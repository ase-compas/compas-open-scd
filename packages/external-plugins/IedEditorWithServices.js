import { OscdEditorIED } from './oscd-editor-ied/oscd-editor-ied.js'

/**
 * IED editor with default <Services> section (BearingPoint distribution quick fix).
 *
 * Wraps the upstream IED editor (https://github.com/OMICRONEnergyOSS/oscd-editor-ied,
 * git submodule ./oscd-editor-ied, unmodified) and replaces `IedEditor.js` in
 * public/js/plugins.js. The upstream "create IED" dialog produces IEDs without a
 * <Services> section; this wrapper adds one.
 *
 * How: the dialog dispatches a bubbling `oscd-edit-v2` event whose insert holds
 * the new, not yet connected IED element. This listener on the plugin element
 * runs before the shell's listener on the <open-scd> host, and adds <Services>
 * to that element. The shell then commits IED + Services as one edit (one undo).
 *
 * Note: the Services content uses SCL 2007B4 elements/attributes.
 * Remove this wrapper once upstream supports adding Services on IED creation.
 */
const servicesXML = `
<Services nameLength="64">
  <ClientServices goose="true" gsse="false" bufReport="true" unbufReport="true" readLog="false" sv="true" supportsLdName="true" maxAttributes="250" maxReports="32" maxGOOSE="32" maxSMV="32">
    <TimeSyncProt sntp="true" c37_238="false" other="false"/>
  </ClientServices>
  <DynAssociation max="6"/>
  <SettingGroups>
    <SGEdit resvTms="true"/>
  </SettingGroups>
  <GetDirectory/>
  <GetDataObjectDefinition/>
  <DataObjectDirectory/>
  <GetDataSetValue/>
  <DataSetDirectory/>
  <ConfDataSet max="50" maxAttributes="200" modify="true"/>
  <DynDataSet max="30" maxAttributes="60"/>
  <ReadWrite/>
  <ConfReportControl max="60" bufMode="both" bufConf="true"/>
  <GetCBValues/>
  <ReportSettings cbName="Conf" datSet="Dyn" rptID="Dyn" optFields="Dyn" bufTime="Dyn" trgOps="Dyn" intgPd="Dyn" resvTms="true" owner="true"/>
  <GSESettings cbName="Conf" datSet="Conf" appID="Conf" dataLabel="Fix"/>
  <ConfLNs fixPrefix="false" fixLnInst="false"/>
  <ConfLdName/>
  <GOOSE max="16" fixedOffs="false"/>
  <SMVsc max="12" delivery="both" deliveryConf="true"/>
  <FileHandling/>
  <SupSubscription maxGo="128" maxSv="0"/>
  <ValueHandling setToRO="false"/>
  <RedProt hsr="true" prp="true" rstp="true"/>
  <CommProt ipv6="false"/>
</Services>`

function addServicesSection(ied) {
  if (ied.querySelector(':scope > Services')) return

  const ns = ied.namespaceURI ?? ''
  const parsed = new DOMParser().parseFromString(
    servicesXML.replace('<Services ', `<Services xmlns="${ns}" `),
    'application/xml'
  )
  const services = ied.ownerDocument.importNode(parsed.documentElement, true)

  // IED child order per schema: Text, Private, Services, AccessPoint, KDC
  const reference = ied.querySelector(':scope > AccessPoint, :scope > KDC')
  ied.insertBefore(services, reference)
}

function isNewIedInsert(edit) {
  return (
    edit &&
    'parent' in edit &&
    edit.node instanceof Element &&
    edit.node.tagName === 'IED' &&
    !edit.node.isConnected
  )
}

class OscdEditorIEDWithServices extends OscdEditorIED {
  constructor() {
    super()
    this.addEventListener('oscd-edit-v2', event => {
      const { edit } = event.detail ?? {}
      const edits = Array.isArray(edit) ? edit : [edit]
      edits.filter(isNewIedInsert).forEach(e => addServicesSection(e.node))
    })
  }
}

export default OscdEditorIEDWithServices
