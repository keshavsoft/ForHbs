<script id="Bs5/Icons/Svg"  KS="KeshavSoft" type="text/x-handlebars-template">
{{#if SvgPlusLarge}}
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg"
    viewBox="0 0 16 16">
    <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
</svg>
{{/if}}

{{#if SvgPlus}}
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus"
    viewBox="0 0 16 16">
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
</svg>
{{/if}}

{{#if NewWindow}}
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-window"
    viewBox="0 0 16 16">
    <path
        d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
    <path
        d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1H2z" />
</svg>
{{/if}}

{{#if Table}}
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-table"
    viewBox="0 0 16 16">
    <path
        d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z" />
</svg>
{{/if}}

{{#if Chat}}
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat"
    viewBox="0 0 16 16">
    <path
        d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
</svg>
{{/if}}
</script>
<script id="Global/Common"  KS="KeshavSoft" type="text/x-handlebars-template">
{{#each @root as |val key|}}
{{#switch HTMLControlType}}

{{#case 'KAlert'}}
{{> KAlert}}
{{/case}}

{{#case 'VerticalForShow'}}
{{> Vertical/KVerticalForShow }}
{{/case}}

{{#case 'Vertical'}}
{{> Vertical/KVertical}}
{{/case}}

{{#case 'VerticalToShow'}}
{{> VerticalToShow/KVertical}}
{{/case}}

{{#case 'ReportTable'}}
{{> ReportTable/KTableWithCardAndSearchRow}}
{{/case}}

{{#case 'ReportTableForPrint'}}
{{> ReportTableForPrint/KTable}}
{{/case}}

{{#case 'MainTable'}}
{{> MainTable/KTableWithCardAndSearchRow}}
{{/case}}

{{#case 'SubTable'}}
{{> SubTable/KTableWithCardAndSearchRow}}
{{/case}}

{{#case 'Table'}}
{{> Table/KTableWithCardAndSearchRow}}
{{/case}}
  
{{#case 'TableReport'}}
{{> Table/KTable}}
{{/case}}

{{#case 'TableFromData'}}
{{> Table/KTableFromData}}
{{/case}}

{{#default ''}}
{{/default}}
{{/switch}}
{{/each}}
</script>
<script id="Insert/HtmlControls"  KS="KeshavSoft" type="text/x-handlebars-template">
{{#if IsTextArea}}
<textarea kh7 id="{{DataAttribute}}" name="{{DataAttribute}}" data-dataattribute="{{DataAttribute}}"
    class="form-control" placeholder="Enter {{DisplayName}}" autocomplete="off" value="{{DefaultValue}}"
    style="{{HtmlAttributes.style}}" rows="4" cols="20">
    </textarea>
{{else}}
{{#if IsSelect}}
<select name="{{DataAttribute}}" id="{{DataAttribute}}" class="form-select KeshavSoftSelect"
    data-klist="{{HtmlAttributes.list}}" data-kDefaultValue="{{DefaultValue}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.EnterOnClient({inEvent:event})"
    data-KeshavSoft="{{JSON2string KDatasetStuff}}">
</select>
{{else}}
{{#if EnterToServer}}
<input kh1 id="{{DataAttribute}}" name="{{DataAttribute}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-dataattribute="{{DataAttribute}}" type="text"
    class="form-control KeshavSoft" value="{{DefaultValue}}"   data-KeshavSoft="{{JSON2string KDatasetStuff}}"
    onkeypress="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Table.Footer.KeyPress.EnterToServer({inEvent:event})"
    placeholder="" autocomplete="off" list="{{HtmlAttributes.list}}" data-DataListReverse="{{KDatasetStuff.DataListReverse}}"
    data-ksdatalistvalue="{{DefaultValue}}" />
{{else}}
{{#if KDataAttributes.onkeypress}}
<input kh2 id="{{DataAttribute}}" name="{{DataAttribute}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-dataattribute="{{DataAttribute}}"
    onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.EnterOnClient({ inEvent:event })" type="text"
    class="form-control KeshavSoftonkeypress" value="{{DefaultValue}}"
    onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.EnterToServer({inEvent:event})" placeholder=""
    autocomplete="off" list="{{HtmlAttributes.list}}" data-KeshavSoft="{{JSON2string KDatasetStuff}}" />
{{else}}
{{#if KDataAttributes.CustomDataList}}
<input kh3 id="{{DataAttribute}}" name="{{DataAttribute}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-dataattribute="{{DataAttribute}}"
    onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.EnterOnClient({ inEvent:event })" type="text"
    class="form-control KeshavSoftonkeypress" value="{{DefaultValue}}"
    onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.EnterToServer({inEvent:event})" placeholder=""
    autocomplete="off" list="{{DataAttribute}}-datalist" data-KeshavSoft="{{JSON2string KDatasetStuff}}" />
<datalist id="{{DataAttribute}}-datalist">
</datalist>
{{else}}
{{#if SaveOnEnter}}
<input kh4 id="{{DataAttribute}}" name="{{DataAttribute}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-dataattribute="{{DataAttribute}}"
    onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.SaveOnEnter({ inEvent:event })" type="text"
    class="form-control KeshavSoftSaveOnEnter" placeholder="" autocomplete="off" list="{{HtmlAttributes.list}}" />
{{else}}
{{#if HtmlAttributes.KTF}}
<input kh5 id="{{DataAttribute}}" name="{{DataAttribute}}" data-dataattribute="{{DataAttribute}}"
    value="{{DefaultValue}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" type="{{KDataset.HTMLControlType}}"
    class="{{ParentClasses.InputClass}} KeshavSoftHtmlAttributes" min="{{KDataset.Min}}" max="{{KDataset.Max}}"
    step="{{KDataset.Step}}" placeholder="Enter {{DisplayName}}" autocomplete="off" list="{{HtmlAttributes.list}}"
    data-KeshavSoft="{{JSON2string KDatasetStuff}}" data-ksdatalistvalue="{{DefaultValue}}"
    data-DataListReverse="{{KDatasetStuff.DataListReverse}}" />
{{else}}
<input kh6 id="{{DataAttribute}}" name="{{DataAttribute}}" data-dataattribute="{{DataAttribute}}"
    value="{{DefaultValue}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" type="{{KDataset.HTMLControlType}}"
    class="{{ParentClasses.InputClass}}" min="{{KDataset.Min}}" max="{{KDataset.Max}}" step="{{KDataset.Step}}"
    placeholder="Enter {{DisplayName}}" autocomplete="off" data-KeshavSoft="{{JSON2string KDatasetStuff}}"
    value="{{DefaultValue}}" />
<div class="invalid-feedback">
    Should not be empty!
</div>
{{/if}}
{{/if}}
{{/if}}
{{/if}}
{{/if}}
{{/if}}
{{/if}}
</script>
<script id="KAlert"  KS="KeshavSoft" type="text/x-handlebars-template">
{{#if (lookup KData 'SuccessAlert')}}
<div id="KAlertSuccessId" class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Success!</strong> {{lookup KData 'ShowText'}}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
{{/if}}
</script>
<script id="KInputForVertical"  KS="KeshavSoft" type="text/x-handlebars-template">
<div class="{{ParentClasses.Parent1Class}}">
    <div class="form-group">
        {{> Insert/HtmlControls }}
    </div>
</div>
</script>
<script id="MainTable/Body/KTablebody"  KS="KeshavSoft" type="text/x-handlebars-template">
{{#each this.KData.TableData as |val key|}}

{{#if ../KData.TableInfo.DataAttributesFromTableInfo }}
{{> MainTable/Body/Row/NormalFromTableInfo inTableColumns=../KData.TableColumns inTableInfo=../KData.TableInfo this=this}}
{{/if}}

{{#if ../KData.TableInfo.DataAttributesFromTableDataRow }}
{{> Table/Body/Row/NormalFromTableDataRow  inTableColumns=../KData.TableColumns  inTableInfo=../KData.TableInfo}}
{{/if}}

{{/each}}

</script>
<script id="MainTable/Body/Row/KTCellValue"  KS="KeshavSoft" type="text/x-handlebars-template">
<td class="KCol-{{@index}}" data-kcol={{@index}}
style="text-align: {{lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'TextAlign'}}">
{{#if (lookup (lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'DisplayType') 'IsInput') }}
<input ksr2 class="form-control" type="text"
    name="{{lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'DataAttribute'}}"
    list="{{lookup (lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'HtmlAttributes') 'list'}}"
    data-KeshavSoft="{{JSON2string (lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'KDatasetStuff')}}"
    data-ksdatalistvalue="{{CellValue}}"
    value="{{CellValue}}">
{{else}}
{{#if (lookup (lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'DisplayType') 'IsIndianFormat') }}
{{ShowInIndianDateFormat CellValue}}
{{else}}
{{CellValue}}
{{/if}}

{{/if}}
</td>

</script>
<script id="MainTable/Body/Row/KTbodyRowOptions"  KS="KeshavSoft" type="text/x-handlebars-template">
{{#if this.Delete.Simple}}
<td class="ButtonClass">
    <a href="#" onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.MainTable.Body.Row.DeleteNew({inEvent:event})">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash"
            viewBox="0 0 16 16">
            <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
        </svg>
    </a>
</td>
{{/if}}

{{#if this.PrintToPrinter.FromData}}
<td class="ButtonClass">
    <a href="#"
        onclick="jClassGlobalPrintFuncs.jFPrint({inEvent:event,inJsonConfig:{{lookup (lookup (lookup (lookup (lookup @root @../key) 'KData') 'TableInfo') 'DataAttributes') 'JsonConfig'}},             inItemConfig:{{lookup (lookup (lookup (lookup (lookup @root @../key) 'KData') 'TableInfo') 'DataAttributes') 'ItemConfig'}} })">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer"
            viewBox="0 0 16 16">
            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
            <path
                d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
        </svg>
    </a>
</td>
{{/if}}

{{#if this.PrintToPrinter.Double}}
<td class="ButtonClass">
    <a href="#" class="MainTable Body Row Options Print"
        data-jsonconfig="{{lookup (lookup (lookup (lookup (lookup @root @../key) 'KData') 'TableInfo') 'DataAttributes') 'JsonConfig'}}"
        data-itemconfig="{{lookup (lookup (lookup (lookup (lookup @root @../key) 'KData') 'TableInfo') 'DataAttributes') 'ItemConfig'}}">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer"
            viewBox="0 0 16 16">
            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
            <path
                d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
        </svg>
    </a>
</td>

{{/if}}

{{#if this.PrintToPrinter.Barcode}}
<td class="ButtonClass">
    <a href="#" onclick="jVarGlobalClientObject.Api.UserData.Table.Row.Barcode.Print({inEvent:event})">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer"
            viewBox="0 0 16 16">
            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
            <path
                d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
        </svg>
    </a>
</td>
{{/if}}

{{#if this.Show.Rowshow}}
<td MainTable class="ButtonClass">
    <a href="#" class="KMainTableBodyRowShowButtonClass" style="color: forestgreen;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-arrow-right-square" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
        </svg>
    </a>
</td>
{{/if}}

{{#if this.PopUp.Rowshow}}
<td class="ButtonClass">
    <a href="#" onclick="jVarGlobalClientObject.Api.UserData.Table.Row.Edit.PopUp({ inEvent :event})"
        style="color: forestgreen;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
            <path
                d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
        </svg>
    </a>
</td>
{{/if}}

{{#if this.Edit.RowEdit}}
<td class="ButtonClass">
    <a href="#" onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Table.Body.Row.Edit.ButtonClick({inEvent:event})"
        style="color: forestgreen;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square"
            viewBox="0 0 16 16">
            <path
                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
        </svg>
    </a>
</td>
{{/if}}
</script>
<script id="MainTable/Body/Row/NormalFromTableDataRow"  KS="KeshavSoft" type="text/x-handlebars-template">
<tr class="KTableRow {{this.RowClass}}" data-klevel="{{Table_KLevel inTableInfo.KLevel}}"
    data-pk="{{array_value_indexret inTableColumns inTableInfo.kPK this.DisplayText}}"
    data-details="{{array_value_indexret inTableColumns inTableInfo.kDetails this.DisplayText}}"
    data-kjsonfilename="{{this.TableKJsonFileName}}">

    <td style="text-align:right; display:none" class="kClassSearchSNo"></td>
    <td style="text-align:right">{{array_index_sno @index}}</td>
    {{#each DisplayText as | val1 key1 |}}
    {{#if (ShowInTable ../inTableColumns key1)}}

    {{> Table/Body/Row/KTCellValue inTableColumns=../inTableColumns inIndex=key1}}
    
    {{/if}} {{/each}}

    {{> Table/Body/Row/KTbodyRowOptions inTableInfo.TableRowOptions}}
</tr>


</script>
<script id="MainTable/Body/Row/NormalFromTableInfo"  KS="KeshavSoft" type="text/x-handlebars-template">
<tr class="KTableRow {{this.RowClass}}" data-klevel="{{Table_KLevel inTableInfo.KLevel}}"
    data-pk="{{array_value_indexret inTableColumns inTableInfo.kPK this.DisplayText}}"
    data-details="{{array_value_indexret inTableColumns inTableInfo.kDetails this.DisplayText}}"
    data-kjsonfilename="{{this.TableKJsonFileName}}">

    <td style="text-align:right; display:none" class="kClassSearchSNo"></td>
    <td style="text-align:right">{{array_index_sno @index}}</td>
    {{#each DisplayText as | val1 key1 |}}
    {{#if (lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'ShowInTable')}}

    {{> Table/Body/Row/KTCellValue}}
    
    {{/if}} {{/each}}

    {{> MainTable/Body/Row/KTbodyRowOptions inTableInfo.TableRowOptions}}
</tr>


</script>
<script id="MainTable/Footer/CreateNew/HtmlControls"  KS="KeshavSoft" type="text/x-handlebars-template">
{{#if IsTextArea}}
<textarea kh7 id="{{DataAttribute}}" name="{{DataAttribute}}" data-dataattribute="{{DataAttribute}}"
    class="form-control" placeholder="Enter {{DisplayName}}" autocomplete="off" value="{{DefaultValue}}"
    style="{{HtmlAttributes.style}}" rows="4" cols="20">
    </textarea>
{{else}}
{{#if IsSelect}}
<select name="{{DataAttribute}}" id="{{DataAttribute}}" class="form-select KeshavSoftSelect"
    data-klist="{{HtmlAttributes.list}}" data-kDefaultValue="{{DefaultValue}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.EnterOnClient({inEvent:event})"
    data-KeshavSoft="{{JSON2string KDatasetStuff}}">
</select>
{{else}}
{{#if EnterToServer}}
<input kh1 id="{{DataAttribute}}" name="{{DataAttribute}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-dataattribute="{{DataAttribute}}" type="text"
    class="form-control KeshavSoft KeshavSoftEnterToServer" value="{{DefaultValue}}"   data-KeshavSoft="{{JSON2string KDatasetStuff}}"
    placeholder="" autocomplete="off" list="{{HtmlAttributes.list}}" data-DataListReverse="{{KDatasetStuff.DataListReverse}}"
    data-ksdatalistvalue="{{DefaultValue}}" />
{{else}}
{{#if KDataAttributes.onkeypress}}
<input kh2 id="{{DataAttribute}}" name="{{DataAttribute}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-dataattribute="{{DataAttribute}}"
    onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.EnterOnClient({ inEvent:event })" type="text"
    class="form-control KeshavSoftonkeypress" value="{{DefaultValue}}"
    onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.EnterToServer({inEvent:event})" placeholder=""
    autocomplete="off" list="{{HtmlAttributes.list}}" data-KeshavSoft="{{JSON2string KDatasetStuff}}" />
{{else}}
{{#if KDataAttributes.CustomDataList}}
<input kh3 id="{{DataAttribute}}" name="{{DataAttribute}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-dataattribute="{{DataAttribute}}"
    onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.EnterOnClient({ inEvent:event })" type="text"
    class="form-control KeshavSoftonkeypress" value="{{DefaultValue}}"
    onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.EnterToServer({inEvent:event})" placeholder=""
    autocomplete="off" list="{{DataAttribute}}-datalist" data-KeshavSoft="{{JSON2string KDatasetStuff}}" />
<datalist id="{{DataAttribute}}-datalist">
</datalist>
{{else}}
{{#if SaveOnEnter}}
<input kh4 id="{{DataAttribute}}" name="{{DataAttribute}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-dataattribute="{{DataAttribute}}"
    onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.SaveOnEnter({ inEvent:event })" type="text"
    class="form-control KeshavSoftSaveOnEnter" placeholder="" autocomplete="off" list="{{HtmlAttributes.list}}" />
{{else}}
{{#if HtmlAttributes.KTF}}
<input kh5 id="{{DataAttribute}}" name="{{DataAttribute}}" data-dataattribute="{{DataAttribute}}"
    value="{{DefaultValue}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" type="{{KDataset.HTMLControlType}}"
    class="{{ParentClasses.InputClass}} KeshavSoftHtmlAttributes" min="{{KDataset.Min}}" max="{{KDataset.Max}}"
    step="{{KDataset.Step}}" placeholder="Enter {{DisplayName}}" autocomplete="off" list="{{HtmlAttributes.list}}"
    data-KeshavSoft="{{JSON2string KDatasetStuff}}" data-ksdatalistvalue="{{DefaultValue}}"
    data-DataListReverse="{{KDatasetStuff.DataListReverse}}" />
{{else}}
<input kh6 id="{{DataAttribute}}" name="{{DataAttribute}}" data-dataattribute="{{DataAttribute}}"
    value="{{DefaultValue}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" type="{{KDataset.HTMLControlType}}"
    class="{{ParentClasses.InputClass}}" min="{{KDataset.Min}}" max="{{KDataset.Max}}" step="{{KDataset.Step}}"
    placeholder="Enter {{DisplayName}}" autocomplete="off" data-KeshavSoft="{{JSON2string KDatasetStuff}}"
    value="{{DefaultValue}}" />
<div class="invalid-feedback">
    Should not be empty!
</div>
{{/if}}
{{/if}}
{{/if}}
{{/if}}
{{/if}}
{{/if}}
{{/if}}
</script>
<script id="MainTable/Footer/CreateNew/KTfooterCreateNewRow"  KS="KeshavSoft" type="text/x-handlebars-template">
<td style="text-align:right; display:none" class="kClassSearchSNo"></td>
<td style="text-align:right"></td>

{{#each this.KData.TableColumns as | val1 key1 |}}
{{#if ShowInTable}}
<td class="KCol-{{@index}}  {{TableClasses.ColumnClass}}" data-viewtype="{{this.ViewType}}"
    data-showtotal="{{this.ShowTotal}}" data-editable="{{array_index_Editable this.DisplayMode.Editable}}">
    {{#if CreateNew}}
    {{> Table/Footer/CreateNew/HtmlControls }}
    {{/if}}
</td>
{{/if}}
{{/each}}

{{#if this.KData.TableInfo.FooterType.SaveType.Save}}
<td class="SaveClass">
    <button type="button" class="btn btn-outline-primary MainTableFooterCreateNewSaveClass">save</button>
</td>
{{/if}}

<td class="UpdateClass" style="display: none;">
    <button onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Table.Body.Row.Update({inEvent:event})" type="button"
        class="btn btn-outline-primary">Update</button>
</td>

<td class="UpdateSubTableClass" style="display: none;">
    <button onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Subtable.Body.Row.Update({inEvent:event})"
        type="button" class="btn btn-outline-success">Update</button>
</td>
</script>
<script id="MainTable/Footer/Show/BalanceRow"  KS="KeshavSoft" type="text/x-handlebars-template">
<tr class="table-info">
    <td style="text-align:right; display:none" class="kClassSearchSNo"></td>
    <td></td>

    {{#each this.KData.TableColumns as |val1 key1|}} {{#if val1.ShowInTable}}
    <td style="text-align:{{val1.TextAlign}}">
        {{#if val1.Footer.Show.Balance.ShowTF}}
        {{#if (IsIndianDateFormat ../KData.TableColumns key1) }}
        {{ShowInIndianDateFormatPositiveOnly (TableColumnBalance key1 ../KData.TableData ../KData.TableColumns)}}
        {{else}}
        {{TableColumnBalance key1 ../KData.TableData ../KData.TableColumns}}
        {{/if}}
        {{/if}}
    </td> {{/if}} {{/each}}
</tr>
</script>
<script id="MainTable/Footer"  KS="KeshavSoft" type="text/x-handlebars-template">
{{#if this.KData.TableInfo.FooterType.CreateNewRow.Show}}
<tr data-footertype="CreateNewRow" style="{{this.KData.TableInfo.FooterType.CreateNewRow.Style}}">
    {{> MainTable/Footer/CreateNew/KTfooterCreateNewRow }}
</tr>
{{/if}}

{{#if this.KData.TableInfo.FooterType.ShowTotals}}
<tr MainTableShowTotals class="table-info">
    <td style="text-align:right; display:none" class="kClassSearchSNo"></td>
    <td>{{this.KData.TableData.length}}</td>

    {{#each this.KData.TableColumns as |val1 key1|}} {{#if val1.ShowInTable}}
    <td style="text-align:{{val1.TextAlign}}">
        {{#if val1.ShowTotal}}
            {{#if (IsIndianDateFormat ../KData.TableColumns key1) }}
                {{ShowInIndianDateFormat (TableColumnTotal key1 ../KData.TableData)}}
            {{else}}
                {{TableColumnTotal key1 ../KData.TableData}}
            {{/if}}
        {{/if}}
    </td> {{/if}} {{/each}}
</tr>
{{/if}}

{{#if this.KData.TableInfo.FooterType.ShowBalance}}
{{> Table/Footer/Show/BalanceRow}}
{{/if}}
</script>
<script id="MainTable/Head/KThead"  KS="KeshavSoft" type="text/x-handlebars-template">
<tr>
    <th width="5%" class="kClassSearchSNo" style="cursor:pointer; text-align:right; display:none">#</th>
    <th width="5%" style="cursor:pointer; text-align:right;">#</th>
    {{#each this.KData.TableColumns as |val1 key1|}}
    {{#if val1.ShowInTable}}
    <th class="KCol-{{@index}} kclass1 {{TableClasses.ColumnClass}}"
        width="{{TableColumnWidth  ../KData.TableColumns key1}}%" data-dataattribute="{{this.DataAttribute}}"
        data-viewtype="{{this.ViewType}}" data-showtotal="{{this.ShowTotal}}"
        data-editable="{{array_index_Editable this.DisplayMode.Editable}}"
        onclick="KeshavSoftCrud.AllFuncs.Table.Head.CellClick(event)" style="cursor: pointer;">
        {{this.DisplayName}}
        {{#if Head.Bs5UpArrow}}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-up"
            viewBox="0 0 16 16">
            <path
                d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707V12.5zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
        </svg>
        {{/if}}

        {{#if Head.Bs5DownArrow}}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-down"
            viewBox="0 0 16 16">
            <path
                d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
        </svg>
        {{/if}}
    </th>
    {{/if}} {{/each}}
</tr>
</script>
<script id="MainTable/KTable"  KS="KeshavSoft" type="text/x-handlebars-template">
<div class="table-responsive">
    <table class=" table KTableClass table-hover {{KData.TableInfo.ParentClasses.Table.TableClass}}"
        id="{{KData.TableInfo.TableId}}" data-KType="{{KData.TableInfo.TableKType}}"
        data-kjsonfilename="{{KData.TableInfo.TableKJsonFileName}}" data-pk="{{KData.TableInfo.DataAttributes.PK}}"
        data-queryname="{{KData.TableInfo.DataAttributes.QueryName}}" data-KGlobalIndex="{{KGlobalIndex}}"
        data-jsonType="{{KData.TableInfo.DataAttributes.JsonType}}"
        data-jsonItemName="{{KData.TableInfo.DataAttributes.JsonItemName}}"
        data-InsertKey="{{KData.TableInfo.DataAttributes.InsertKey}}"
        data-KeyAsTree="{{KData.TableInfo.DataAttributes.KeyAsTree}}"
        data-ShowType="{{KData.TableInfo.DataAttributes.ShowType}}">
        <thead>
            {{> Table/Head/KThead }}
        </thead>
        <tbody>
            {{> MainTable/Body/KTablebody }}
        </tbody>
        <tfoot>
            {{#if KData.TableInfo.ShowFooter}} {{> MainTable/Footer }} {{/if}}
        </tfoot>
    </table>
</div>
</script>
<script id="MainTable/KTableFromData"  KS="KeshavSoft" type="text/x-handlebars-template">
<table class=" table KTableClass table-hover">
    <thead>
        <tr>
            <th>#</th>
            {{#each this.KData.TableData.[0]}}
            <th>{{@key}}</th>
            {{/each}}
        </tr>
    </thead>
    <tbody>
        {{#each this.KData.TableData}}
        <tr>
            <td>{{array_index_sno @index}}</td>
            {{#each this}}
            <td>{{this}}</td>
            {{/each}}
        </tr>
        {{/each}}
    </tbody>
</table>
</script>
<script id="MainTable/KTableWithCardAndSearchRow"  KS="KeshavSoft" type="text/x-handlebars-template">
<div class="{{this.KData.TableInfo.ParentClasses.Parent3Class}}">
    {{this.KData.TableInfo.DataAttributes.ItemConfig.inItemName}}

    <div id="kcard1" class="card KTableDivClass {{KData.TableInfo.ParentClasses.Table.CardClass}}"
        data-klevel={{@index}} 
        data-localstorageid="{{KData.TableInfo.DataAttributes.localstorageid}}"
        data-localstoragearrayindex="{{KData.TableInfo.DataAttributes.localstoragearrayindex}}"
        data-jsonconfig="{{KData.TableInfo.DataAttributes.JsonConfig}}"
        data-ItemConfig="{{KData.TableInfo.DataAttributes.ItemConfig}}"
         data-pk="{{KData.TableInfo.DataAttributes.PK}}"
        data-InsertKey="{{KData.TableInfo.DataAttributes.InsertKey}}">
        <div class="card-header">
            {{> MainTable/Search/KSearchRow}}
        </div>
        <div class="card-body">
            {{> MainTable/KTable KGlobalIndex=KGlobalIndex}}
        </div>
    </div>
</div>

</script>
<script id="MainTable/Search/KSearchRow"  KS="KeshavSoft" type="text/x-handlebars-template">
<div class="row">
    {{#if KData.TableInfo.SearchRowArray.Label.KTF}}
    <div class="col-{{KData.TableInfo.SearchRowArray.Label.DisplayObject.ColClass}}">
        <h5 style="margin-left: 7px; margin-top:10px; text-align:left;">
            {{KData.TableInfo.SearchRowArray.Label.DisplayObject.DisplayText}}
        </h5>
    </div>
    {{/if}}
    {{#if KData.TableInfo.SearchRowArray.Search.KTF}}
    <div class="col-{{KData.TableInfo.SearchRowArray.Search.DisplayObject.ColClass}}">
        <div class="input-group">
            <span class="input-group-text text-body"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg></span>
            <input type="text" class="form-control" placeholder="Type here..."
                onkeyup="KeshavSoftCrud.AllFuncs.Table.SearchRow.SearchFuncs.SearchAllRows(event)">
        </div>
    </div>

    {{/if}}
    {{#if KData.TableInfo.SearchRowArray.SearchWithEnter.KTF}}
    <div class="col-{{KData.TableInfo.SearchRowArray.SearchWithEnter.DisplayObject.ColClass}}">
        <div class="input-group no-border">
            <span class="input-group-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-search me-2" viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
                </svg>
            </span>

            <input type="text" value="" class="form-control KClassTableSearchTxt"
                data-ServerAPIURL="{{this.KServerAPIURL}}"
                placeholder="{{KData.TableInfo.SearchRowArray.SearchWithEnter.DisplayObject.DisplayText}}"
                onkeyup="KeshavSoftCrud.AllFuncs.Table.SearchRow.SearchFuncs.SearchWithEnter(event)">

        </div>
    </div>
    {{/if}}

    {{#if KData.TableInfo.SearchRowArray.CreativeTim.SearchWithEnter.KTF}}
    <div class="col-{{KData.TableInfo.SearchRowArray.SearchWithEnter.DisplayObject.ColClass}}">
        <div class="input-group no-border">
            <input type="text" value="" class="form-control KClassTableSearchTxt"
                data-ServerAPIURL="{{this.KServerAPIURL}}"
                placeholder="{{KData.TableInfo.SearchRowArray.SearchWithEnter.DisplayObject.DisplayText}}"
                onkeyup="KeshavSoftCrud.AllFuncs.Table.SearchRow.SearchFuncs.SearchWithEnter(event)">
            <div class="input-group-append">
                <div class="input-group-text">
                    <i class="nc-icon nc-zoom-split"></i>
                </div>
            </div>
        </div>
    </div>
    {{/if}}

    {{> MainTable/Search/KSearchWithButtons }}
</div>
</script>
<script id="MainTable/Search/KSearchWithButtons"  KS="KeshavSoft" type="text/x-handlebars-template">
{{#if KData.TableInfo.SearchRowArray.Button.PrintToPrinter.Double}}
<div class="col-1 d-none d-md-block">
    <a href="#" onclick="jVarGlobalClientObject.Print.Ui.FromSearchRow({inEvent:event})"
        class="btn btn-outline-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer"
            viewBox="0 0 16 16">
            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
            <path
                d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
        </svg>
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.PrintToPrinter.Preview.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.PrintToPrinter.Preview.DisplayObject.ColClass}}">
    <a href="#" onclick="jVarGlobalClientObject.Api.UserData.Table.SearchRow.Buttons.PrintToPrinter.Preview(event)">
        <svg class="bi d-block mx-auto mb-1" width="24" height="24">
            <use xlink:href="#TablePrintId" />
        </svg>
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.Footer.WithApi.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.Footer.WithApi.DisplayObject.ColClass}}">
    <a href="#" onclick="jVarGlobalClientObject.Api.UserData.Table.SearchRow.CreateNew.Footer(event)"
        title="Add new row in the table footer" class="btn btn-outline-primary">
        {{> Bs5/Icons/Svg this.KData.TableInfo.SearchRowArray.Button.Footer.WithApi.DisplayObject}}
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.NewWindow.KTF}}
<div class="CardHeaderButtons col-{{KData.TableInfo.SearchRowArray.Button.NewWindow.DisplayObject.ColClass}}">
    <a href="#" 
        title="Add new row in new window as Vertical" class="btn btn-outline-primary">
        {{> Bs5/Icons/Svg this.KData.TableInfo.SearchRowArray.Button.NewWindow.DisplayObject}}
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.PopUp.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.PopUp.DisplayObject.ColClass}}">
    <a href="#" onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.MainTable.Card.Header.Buttons.PopUp.AddButtonClick({ inEvent :event})" title="Add new row in PopUp as Vertical"
        class="btn btn-outline-primary">
        {{> Bs5/Icons/Svg this.KData.TableInfo.SearchRowArray.Button.PopUp.DisplayObject}}
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.FromHtml.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.FromHtml.DisplayObject.ColClass}}">
    <a href="#" onclick="jFCreateNewFromHtml({ inEvent :event})" class="btn btn-outline-primary">
        {{> Bs5/Icons/Svg this.KData.TableInfo.SearchRowArray.Button.FromHtml.DisplayObject}}
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.Scrollable.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.Scrollable.DisplayObject.ColClass}}">
    <div class="form-check form-switch">
        <input onclick="KeshavSoftCrud.AllFuncs.Table.SearchRow.Scrollable.Click(event)" class="form-check-input"
            type="checkbox" id="flexSwitchCheckDefault">
        <label class="form-check-label" for="flexSwitchCheckDefault">Scrollable</label>
    </div>
</div>
{{/if}}

<div class="col-1 d-none d-md-block">
    <a href="#" onclick="exportTableToCSV()" title="Export data from table to CSV" class="btn btn-outline-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-explicit"
            viewBox="0 0 16 16">
            <path d="M6.826 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826v2.408Z" />
            <path
                d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0h-11ZM1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5v-11Z" />
        </svg>
    </a>
</div>

<div class="col-1 d-none d-md-block">
    <a href="#" onclick="KeshavSoftCrud.AllFuncs.Table.SearchRow.Buttons.Refresh.OnClick({inEvent:event, inJsonConfig:'{{this.KData.TableInfo.DataAttributes.JsonConfig}}',inItemConfig:'{{this.KData.TableInfo.DataAttributes.ItemConfig}}' })" title="Export data from table to CSV" class="btn btn-outline-primary">
    
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
            <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
          </svg>
    </a>
</div>

<div class="col-1 d-none d-md-block">
    <a href="#" title="Row in Table Footer." class="btn btn-outline-primary MainTableSearchTableFooter">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-table" viewBox="0 0 16 16">
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"/>
          </svg>
    </a>
</div>

<div class="col-1 d-none d-md-block">
    <a href="#" title="Row in Table Footer." class="btn btn-outline-primary MainTableVerticalToShow">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
            <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
            <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
          </svg>
    </a>
</div>
</script>
<script id="MainTable/Vertical/KPopUp"  KS="KeshavSoft" type="text/x-handlebars-template">
<div class="card KTableDivClass" data-pk="{{KData.TableInfo.PK}}"
    data-KeyAsTree="{{KData.TableInfo.DataAttributes.KeyAsTree}}"
    data-jsonconfig="{{KData.TableInfo.DataAttributes.JsonConfig}}"
    data-ItemConfig="{{KData.TableInfo.DataAttributes.ItemConfig}}"
    data-InsertKey="{{KData.TableInfo.DataAttributes.InsertKey}}">
    <div class="card-header">
        {{#if KData.TableInfo.SearchRowArray.Label.KTF}}
        <h4>{{KData.TableInfo.SearchRowArray.Label.DisplayObject.DisplayText}}</h4>
        {{/if}}
    </div>
    <div class="card-body KCardBody">
        {{> Vertical/KVertical/CardBody}}
    </div>
    <div class="card-footer">
        <div class="row">
            {{#if KData.TableInfo.Vertical.VerticalCreate.saveFromKeyAsTree}}
            <div class="col">
                <button
                    onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.MainTable.PopUp.SaveFuncs.StartFunc(event)"
                    type="button" class="btn btn-primary">Save New</button>
            </div>
            {{/if}}

            <div class="col visually-hidden">
                <div id="ShowSuccess" class="alert alert-success alert-dismissible fade show">
                    <button type="button" aria-hidden="true" class="close" data-dismiss="alert" aria-label="Close">
                        <i class="nc-icon nc-simple-remove"></i>
                    </button>
                    <span><b> Saved </b> successfully </span>
                </div>
            </div>

            <div id="ShowFailure" class="col visually-hidden">
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Duplicate!</strong> Unsuccessfull.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>
    </div>
</div>
</script>
<script id="ReportTable/Body/KTablebody"  KS="KeshavSoft" type="text/x-handlebars-template">
{{#each this.KData.TableData as |val key|}}

{{#if ../KData.TableInfo.DataAttributesFromTableInfo }}
{{> MainTable/Body/Row/NormalFromTableInfo inTableColumns=../KData.TableColumns inTableInfo=../KData.TableInfo this=this}}
{{/if}}

{{#if ../KData.TableInfo.DataAttributesFromTableDataRow }}
{{> Table/Body/Row/NormalFromTableDataRow  inTableColumns=../KData.TableColumns  inTableInfo=../KData.TableInfo}}
{{/if}}

{{/each}}

</script>
<script id="ReportTable/Body/Row/KTCellValue"  KS="KeshavSoft" type="text/x-handlebars-template">
<td class="KCol-{{@index}}" data-kcol={{@index}}
style="text-align: {{lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'TextAlign'}}">
{{#if (lookup (lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'DisplayType') 'IsInput') }}
<input ksr2 class="form-control" type="text"
    name="{{lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'DataAttribute'}}"
    list="{{lookup (lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'HtmlAttributes') 'list'}}"
    data-KeshavSoft="{{JSON2string (lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'KDatasetStuff')}}"
    data-ksdatalistvalue="{{CellValue}}"
    value="{{CellValue}}">
{{else}}
{{#if (lookup (lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'DisplayType') 'IsIndianFormat') }}
{{ShowInIndianDateFormat CellValue}}
{{else}}
{{CellValue}}
{{/if}}

{{/if}}
</td>

</script>
<script id="ReportTable/Body/Row/KTbodyRowOptions"  KS="KeshavSoft" type="text/x-handlebars-template">
{{#if this.Delete.Simple}}
<td class="ButtonClass">
    <a href="#" onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.MainTable.Body.Row.DeleteNew({inEvent:event})">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash"
            viewBox="0 0 16 16">
            <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
        </svg>
    </a>
</td>
{{/if}}

{{#if this.PrintToPrinter.FromData}}
<td class="ButtonClass">
    <a href="#"
        onclick="jClassGlobalPrintFuncs.jFPrint({inEvent:event,inJsonConfig:{{lookup (lookup (lookup (lookup (lookup @root @../key) 'KData') 'TableInfo') 'DataAttributes') 'JsonConfig'}},             inItemConfig:{{lookup (lookup (lookup (lookup (lookup @root @../key) 'KData') 'TableInfo') 'DataAttributes') 'ItemConfig'}} })">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer"
            viewBox="0 0 16 16">
            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
            <path
                d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
        </svg>
    </a>
</td>
{{/if}}

{{#if this.PrintToPrinter.Double}}
<td class="ButtonClass">
    <a href="#"
        onclick="jClassGlobalPrintFuncs.jFPrintFromData({inEvent:event,inJsonConfig:{{lookup (lookup (lookup (lookup (lookup @root @../key) 'KData') 'TableInfo') 'DataAttributes') 'JsonConfig'}},             inItemConfig:{{lookup (lookup (lookup (lookup (lookup @root @../key) 'KData') 'TableInfo') 'DataAttributes') 'ItemConfig'}} })">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer"
            viewBox="0 0 16 16">
            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
            <path
                d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
        </svg>
    </a>
</td>
{{/if}}

{{#if this.PrintToPrinter.Barcode}}
<td class="ButtonClass">
    <a href="#" onclick="jVarGlobalClientObject.Api.UserData.Table.Row.Barcode.Print({inEvent:event})">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer"
            viewBox="0 0 16 16">
            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
            <path
                d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
        </svg>
    </a>
</td>
{{/if}}

{{#if this.Show.Rowshow}}
<td class="ButtonClass">
    <a href="#" onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Table.Body.Row.ShowClick({ inEvent :event})"
        style="color: forestgreen;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-arrow-right-square" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
        </svg>
    </a>
</td>
{{/if}}

{{#if this.PopUp.Rowshow}}
<td class="ButtonClass">
    <a href="#" onclick="jVarGlobalClientObject.Api.UserData.Table.Row.Edit.PopUp({ inEvent :event})"
        style="color: forestgreen;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
            <path
                d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
        </svg>
    </a>
</td>
{{/if}}

{{#if this.Edit.RowEdit}}
<td class="ButtonClass">
    <a href="#" onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Table.Body.Row.Edit.ButtonClick({inEvent:event})"
        style="color: forestgreen;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square"
            viewBox="0 0 16 16">
            <path
                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
        </svg>
    </a>
</td>
{{/if}}


</script>
<script id="ReportTable/Body/Row/NormalFromTableDataRow"  KS="KeshavSoft" type="text/x-handlebars-template">
<tr class="KTableRow {{this.RowClass}}" data-klevel="{{Table_KLevel inTableInfo.KLevel}}"
    data-pk="{{array_value_indexret inTableColumns inTableInfo.kPK this.DisplayText}}"
    data-details="{{array_value_indexret inTableColumns inTableInfo.kDetails this.DisplayText}}"
    data-kjsonfilename="{{this.TableKJsonFileName}}">

    <td style="text-align:right; display:none" class="kClassSearchSNo"></td>
    <td style="text-align:right">{{array_index_sno @index}}</td>
    {{#each DisplayText as | val1 key1 |}}
    {{#if (ShowInTable ../inTableColumns key1)}}

    {{> Table/Body/Row/KTCellValue inTableColumns=../inTableColumns inIndex=key1}}
    
    {{/if}} {{/each}}

    {{> Table/Body/Row/KTbodyRowOptions inTableInfo.TableRowOptions}}
</tr>


</script>
<script id="ReportTable/Body/Row/NormalFromTableInfo"  KS="KeshavSoft" type="text/x-handlebars-template">
<tr class="KTableRow {{this.RowClass}}" data-klevel="{{Table_KLevel inTableInfo.KLevel}}"
    data-pk="{{array_value_indexret inTableColumns inTableInfo.kPK this.DisplayText}}"
    data-details="{{array_value_indexret inTableColumns inTableInfo.kDetails this.DisplayText}}"
    data-kjsonfilename="{{this.TableKJsonFileName}}">

    <td style="text-align:right; display:none" class="kClassSearchSNo"></td>
    <td style="text-align:right">{{array_index_sno @index}}</td>
    {{#each DisplayText as | val1 key1 |}}
    {{#if (lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'ShowInTable')}}

    {{> Table/Body/Row/KTCellValue}}
    
    {{/if}} {{/each}}

    {{> MainTable/Body/Row/KTbodyRowOptions inTableInfo.TableRowOptions}}
</tr>


</script>
<script id="ReportTable/Footer/CreateNew/HtmlControls"  KS="KeshavSoft" type="text/x-handlebars-template">
{{#if IsTextArea}}
<textarea kh7 id="{{DataAttribute}}" name="{{DataAttribute}}" data-dataattribute="{{DataAttribute}}"
    class="form-control" placeholder="Enter {{DisplayName}}" autocomplete="off" value="{{DefaultValue}}"
    style="{{HtmlAttributes.style}}" rows="4" cols="20">
    </textarea>
{{else}}
{{#if IsSelect}}
<select name="{{DataAttribute}}" id="{{DataAttribute}}" class="form-select KeshavSoftSelect"
    data-klist="{{HtmlAttributes.list}}" data-kDefaultValue="{{DefaultValue}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.EnterOnClient({inEvent:event})"
    data-KeshavSoft="{{JSON2string KDatasetStuff}}">
</select>
{{else}}
{{#if EnterToServer}}
<input kh1 id="{{DataAttribute}}" name="{{DataAttribute}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-dataattribute="{{DataAttribute}}" type="text"
    class="form-control KeshavSoft" value="{{DefaultValue}}"   data-KeshavSoft="{{JSON2string KDatasetStuff}}"
    onkeypress="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Table.Footer.KeyPress.EnterToServer({inEvent:event})"
    placeholder="" autocomplete="off" list="{{HtmlAttributes.list}}" data-DataListReverse="{{KDatasetStuff.DataListReverse}}"
    data-ksdatalistvalue="{{DefaultValue}}" />
{{else}}
{{#if KDataAttributes.onkeypress}}
<input kh2 id="{{DataAttribute}}" name="{{DataAttribute}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-dataattribute="{{DataAttribute}}"
    onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.EnterOnClient({ inEvent:event })" type="text"
    class="form-control KeshavSoftonkeypress" value="{{DefaultValue}}"
    onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.EnterToServer({inEvent:event})" placeholder=""
    autocomplete="off" list="{{HtmlAttributes.list}}" data-KeshavSoft="{{JSON2string KDatasetStuff}}" />
{{else}}
{{#if KDataAttributes.CustomDataList}}
<input kh3 id="{{DataAttribute}}" name="{{DataAttribute}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-dataattribute="{{DataAttribute}}"
    onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.EnterOnClient({ inEvent:event })" type="text"
    class="form-control KeshavSoftonkeypress" value="{{DefaultValue}}"
    onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.EnterToServer({inEvent:event})" placeholder=""
    autocomplete="off" list="{{DataAttribute}}-datalist" data-KeshavSoft="{{JSON2string KDatasetStuff}}" />
<datalist id="{{DataAttribute}}-datalist">
</datalist>
{{else}}
{{#if SaveOnEnter}}
<input kh4 id="{{DataAttribute}}" name="{{DataAttribute}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-dataattribute="{{DataAttribute}}"
    onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.SaveOnEnter({ inEvent:event })" type="text"
    class="form-control KeshavSoftSaveOnEnter" placeholder="" autocomplete="off" list="{{HtmlAttributes.list}}" />
{{else}}
{{#if HtmlAttributes.KTF}}
<input kh5 id="{{DataAttribute}}" name="{{DataAttribute}}" data-dataattribute="{{DataAttribute}}"
    value="{{DefaultValue}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" type="{{KDataset.HTMLControlType}}"
    class="{{ParentClasses.InputClass}} KeshavSoftHtmlAttributes" min="{{KDataset.Min}}" max="{{KDataset.Max}}"
    step="{{KDataset.Step}}" placeholder="Enter {{DisplayName}}" autocomplete="off" list="{{HtmlAttributes.list}}"
    data-KeshavSoft="{{JSON2string KDatasetStuff}}" data-ksdatalistvalue="{{DefaultValue}}"
    data-DataListReverse="{{KDatasetStuff.DataListReverse}}" />
{{else}}
<input kh6 id="{{DataAttribute}}" name="{{DataAttribute}}" data-dataattribute="{{DataAttribute}}"
    value="{{DefaultValue}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" type="{{KDataset.HTMLControlType}}"
    class="{{ParentClasses.InputClass}}" min="{{KDataset.Min}}" max="{{KDataset.Max}}" step="{{KDataset.Step}}"
    placeholder="Enter {{DisplayName}}" autocomplete="off" data-KeshavSoft="{{JSON2string KDatasetStuff}}"
    value="{{DefaultValue}}" />
<div class="invalid-feedback">
    Should not be empty!
</div>
{{/if}}
{{/if}}
{{/if}}
{{/if}}
{{/if}}
{{/if}}
{{/if}}
</script>
<script id="ReportTable/Footer/CreateNew/KTfooterCreateNewRow"  KS="KeshavSoft" type="text/x-handlebars-template">
<td style="text-align:right; display:none" class="kClassSearchSNo"></td>
<td style="text-align:right"></td>

{{#each this.KData.TableColumns as | val1 key1 |}}
{{#if ShowInTable}}
<td class="KCol-{{@index}}  {{TableClasses.ColumnClass}}" data-viewtype="{{this.ViewType}}"
    data-showtotal="{{this.ShowTotal}}" data-editable="{{array_index_Editable this.DisplayMode.Editable}}">
    {{#if CreateNew}}
    {{> Table/Footer/CreateNew/HtmlControls }}
    {{/if}}
</td>
{{/if}}
{{/each}}

{{#if this.KData.TableInfo.FooterType.SaveType.Save}}
<td class="SaveClass">
    <button onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.MainTable.Footer.SaveFuncs.StartFunc(event)"
        type="button" class="btn btn-outline-primary">save</button>
</td>

{{/if}}

<td class="UpdateClass" style="display: none;">
    <button onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Table.Body.Row.Update({inEvent:event})" type="button" class="btn btn-outline-primary">Update</button>
</td>

<td class="UpdateSubTableClass" style="display: none;">
    <button onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Subtable.Body.Row.Update({inEvent:event})" type="button" class="btn btn-outline-success">Update</button>
</td>
</script>
<script id="ReportTable/Footer/Show/BalanceRow"  KS="KeshavSoft" type="text/x-handlebars-template">
<tr class="table-info">
    <td style="text-align:right; display:none" class="kClassSearchSNo"></td>
    <td></td>

    {{#each this.KData.TableColumns as |val1 key1|}} {{#if val1.ShowInTable}}
    <td style="text-align:{{val1.TextAlign}}">
        {{#if val1.Footer.Show.Balance.ShowTF}}
        {{#if (IsIndianDateFormat ../KData.TableColumns key1) }}
        {{ShowInIndianDateFormatPositiveOnly (TableColumnBalance key1 ../KData.TableData ../KData.TableColumns)}}
        {{else}}
        {{TableColumnBalance key1 ../KData.TableData ../KData.TableColumns}}
        {{/if}}
        {{/if}}
    </td> {{/if}} {{/each}}
</tr>
</script>
<script id="ReportTable/Footer"  KS="KeshavSoft" type="text/x-handlebars-template">
{{#if this.KData.TableInfo.FooterType.CreateNewRow.Show}}
<tr data-footertype="CreateNewRow" style="{{this.KData.TableInfo.FooterType.CreateNewRow.Style}}">
    {{> MainTable/Footer/CreateNew/KTfooterCreateNewRow }}
</tr>
{{/if}}

{{#if this.KData.TableInfo.FooterType.ShowTotals}}
<tr ReportTableShowTotals class="table-info">
    <td style="text-align:right; display:none" class="kClassSearchSNo"></td>
    <td>{{this.KData.TableData.length}}</td>

    {{#each this.KData.TableColumns as |val1 key1|}} {{#if val1.ShowInTable}}
    <td style="text-align:{{val1.TextAlign}}">
        {{TableFooterShowTotal val1 key1 ../KData.TableColumns ../KData.TableData}}
    </td> {{/if}} {{/each}}
</tr>
{{/if}}

{{#if this.KData.TableInfo.FooterType.ShowBalance}}
{{> Table/Footer/Show/BalanceRow}}
{{/if}}
</script>
<script id="ReportTable/Head/KThead"  KS="KeshavSoft" type="text/x-handlebars-template">
<tr>
    <th width="5%" class="kClassSearchSNo" style="cursor:pointer; text-align:right; display:none">#</th>
    <th width="5%" style="cursor:pointer; text-align:right;">#</th>
    {{#each this.KData.TableColumns as |val1 key1|}}
    {{#if val1.ShowInTable}}
    <th class="KCol-{{@index}} kclass1 {{TableClasses.ColumnClass}}"
        width="{{TableColumnWidth  ../KData.TableColumns key1}}%" data-dataattribute="{{this.DataAttribute}}"
        data-viewtype="{{this.ViewType}}" data-showtotal="{{this.ShowTotal}}"
        data-editable="{{array_index_Editable this.DisplayMode.Editable}}"
        onclick="KeshavSoftCrud.AllFuncs.Table.Head.CellClick(event)" style="cursor: pointer;">
        {{this.DisplayName}}
        {{#if Head.Bs5UpArrow}}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-up"
            viewBox="0 0 16 16">
            <path
                d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707V12.5zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
        </svg>
        {{/if}}

        {{#if Head.Bs5DownArrow}}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-down"
            viewBox="0 0 16 16">
            <path
                d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
        </svg>
        {{/if}}
    </th>
    {{/if}} {{/each}}
</tr>
</script>
<script id="ReportTable/KTable"  KS="KeshavSoft" type="text/x-handlebars-template">
<div class="table-responsive">
    <table class=" table KTableClass table-hover {{KData.TableInfo.ParentClasses.Table.TableClass}}"
        id="{{KData.TableInfo.TableId}}" data-KType="{{KData.TableInfo.TableKType}}"
        data-kjsonfilename="{{KData.TableInfo.TableKJsonFileName}}" data-pk="{{KData.TableInfo.DataAttributes.PK}}"
        data-queryname="{{KData.TableInfo.DataAttributes.QueryName}}" data-KGlobalIndex="{{KGlobalIndex}}"
        data-jsonType="{{KData.TableInfo.DataAttributes.JsonType}}"
        data-jsonItemName="{{KData.TableInfo.DataAttributes.JsonItemName}}"
        data-InsertKey="{{KData.TableInfo.DataAttributes.InsertKey}}"
        data-KeyAsTree="{{KData.TableInfo.DataAttributes.KeyAsTree}}"
        data-ShowType="{{KData.TableInfo.DataAttributes.ShowType}}">
        <thead>
            {{> Table/Head/KThead }}
        </thead>
        <tbody>
            {{> MainTable/Body/KTablebody }}
        </tbody>
        <tfoot>
            {{#if KData.TableInfo.ShowFooter}} {{> ReportTable/Footer }} {{/if}}
        </tfoot>
    </table>
</div>
</script>
<script id="ReportTable/KTableFromData"  KS="KeshavSoft" type="text/x-handlebars-template">
<table class=" table KTableClass table-hover">
    <thead>
        <tr>
            <th>#</th>
            {{#each this.KData.TableData.[0]}}
            <th>{{@key}}</th>
            {{/each}}
        </tr>
    </thead>
    <tbody>
        {{#each this.KData.TableData}}
        <tr>
            <td>{{array_index_sno @index}}</td>
            {{#each this}}
            <td>{{this}}</td>
            {{/each}}
        </tr>
        {{/each}}
    </tbody>
</table>
</script>
<script id="ReportTable/KTableWithCardAndSearchRow"  KS="KeshavSoft" type="text/x-handlebars-template">
<div class="{{this.KData.TableInfo.ParentClasses.Parent3Class}}">
    {{this.KData.TableInfo.DataAttributes.ItemConfig.inItemName}}

    <div id="kcard1" class="card KTableDivClass {{KData.TableInfo.ParentClasses.Table.CardClass}}"
        data-klevel={{@index}} 
        data-localstorageid="{{KData.TableInfo.DataAttributes.localstorageid}}"
        data-localstoragearrayindex="{{KData.TableInfo.DataAttributes.localstoragearrayindex}}"
        data-jsonconfig="{{KData.TableInfo.DataAttributes.JsonConfig}}"
        data-ItemConfig="{{KData.TableInfo.DataAttributes.ItemConfig}}"
         data-pk="{{KData.TableInfo.DataAttributes.PK}}"
        data-InsertKey="{{KData.TableInfo.DataAttributes.InsertKey}}">
        <div class="card-header">
            {{> MainTable/Search/KSearchRow}}
        </div>
        <div class="card-body">
            {{> ReportTable/KTable KGlobalIndex=KGlobalIndex}}
        </div>
    </div>
</div>

</script>
<script id="ReportTable/Search/KSearchRow"  KS="KeshavSoft" type="text/x-handlebars-template">
<div class="row">
    {{#if KData.TableInfo.SearchRowArray.Label.KTF}}
    <div class="col-{{KData.TableInfo.SearchRowArray.Label.DisplayObject.ColClass}}">
        <h5 style="margin-left: 7px; margin-top:10px; text-align:left;">
            {{KData.TableInfo.SearchRowArray.Label.DisplayObject.DisplayText}}
        </h5>
    </div>
    {{/if}}
    {{#if KData.TableInfo.SearchRowArray.Search.KTF}}
    <div class="col-{{KData.TableInfo.SearchRowArray.Search.DisplayObject.ColClass}}">
        <div class="input-group">
            <span class="input-group-text text-body"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg></span>
            <input type="text" class="form-control" placeholder="Type here..."
                onkeyup="KeshavSoftCrud.AllFuncs.Table.SearchRow.SearchFuncs.SearchAllRows(event)">
        </div>
    </div>

    {{/if}}
    {{#if KData.TableInfo.SearchRowArray.SearchWithEnter.KTF}}
    <div class="col-{{KData.TableInfo.SearchRowArray.SearchWithEnter.DisplayObject.ColClass}}">
        <div class="input-group no-border">
            <span class="input-group-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-search me-2" viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
                </svg>
            </span>

            <input type="text" value="" class="form-control KClassTableSearchTxt"
                data-ServerAPIURL="{{this.KServerAPIURL}}"
                placeholder="{{KData.TableInfo.SearchRowArray.SearchWithEnter.DisplayObject.DisplayText}}"
                onkeyup="KeshavSoftCrud.AllFuncs.Table.SearchRow.SearchFuncs.SearchWithEnter(event)">

        </div>
    </div>
    {{/if}}

    {{#if KData.TableInfo.SearchRowArray.CreativeTim.SearchWithEnter.KTF}}
    <div class="col-{{KData.TableInfo.SearchRowArray.SearchWithEnter.DisplayObject.ColClass}}">
        <div class="input-group no-border">
            <input type="text" value="" class="form-control KClassTableSearchTxt"
                data-ServerAPIURL="{{this.KServerAPIURL}}"
                placeholder="{{KData.TableInfo.SearchRowArray.SearchWithEnter.DisplayObject.DisplayText}}"
                onkeyup="KeshavSoftCrud.AllFuncs.Table.SearchRow.SearchFuncs.SearchWithEnter(event)">
            <div class="input-group-append">
                <div class="input-group-text">
                    <i class="nc-icon nc-zoom-split"></i>
                </div>
            </div>
        </div>
    </div>
    {{/if}}

    {{> MainTable/Search/KSearchWithButtons }}
</div>
</script>
<script id="ReportTable/Search/KSearchWithButtons"  KS="KeshavSoft" type="text/x-handlebars-template">
{{#if KData.TableInfo.SearchRowArray.Button.PrintToPrinter.Double}}
<div class="col-1 d-none d-md-block">
    <a href="#" onclick="jVarGlobalClientObject.Print.Ui.FromSearchRow({inEvent:event})"
        class="btn btn-outline-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer"
            viewBox="0 0 16 16">
            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
            <path
                d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
        </svg>
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.PrintToPrinter.Preview.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.PrintToPrinter.Preview.DisplayObject.ColClass}}">
    <a href="#" onclick="jVarGlobalClientObject.Api.UserData.Table.SearchRow.Buttons.PrintToPrinter.Preview(event)">
        <svg class="bi d-block mx-auto mb-1" width="24" height="24">
            <use xlink:href="#TablePrintId" />
        </svg>
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.Footer.WithApi.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.Footer.WithApi.DisplayObject.ColClass}}">
    <a href="#" onclick="jVarGlobalClientObject.Api.UserData.Table.SearchRow.CreateNew.Footer(event)"
        title="Add new row in the table footer" class="btn btn-outline-primary">
        {{> Bs5/Icons/Svg this.KData.TableInfo.SearchRowArray.Button.Footer.WithApi.DisplayObject}}
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.NewWindow.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.NewWindow.DisplayObject.ColClass}}">
    <a href="#" onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Table.Card.Header.AddButtonClick(event)"
        title="Add new row in new window as Vertical" class="btn btn-outline-primary">
        {{> Bs5/Icons/Svg this.KData.TableInfo.SearchRowArray.Button.NewWindow.DisplayObject}}
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.PopUp.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.PopUp.DisplayObject.ColClass}}">
    <a href="#" onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.MainTable.Card.Header.Buttons.PopUp.AddButtonClick({ inEvent :event})" title="Add new row in PopUp as Vertical"
        class="btn btn-outline-primary">
        {{> Bs5/Icons/Svg this.KData.TableInfo.SearchRowArray.Button.PopUp.DisplayObject}}
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.FromHtml.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.FromHtml.DisplayObject.ColClass}}">
    <a href="#" onclick="jFCreateNewFromHtml({ inEvent :event})" class="btn btn-outline-primary">
        {{> Bs5/Icons/Svg this.KData.TableInfo.SearchRowArray.Button.FromHtml.DisplayObject}}
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.Scrollable.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.Scrollable.DisplayObject.ColClass}}">
    <div class="form-check form-switch">
        <input onclick="KeshavSoftCrud.AllFuncs.Table.SearchRow.Scrollable.Click(event)" class="form-check-input"
            type="checkbox" id="flexSwitchCheckDefault">
        <label class="form-check-label" for="flexSwitchCheckDefault">Scrollable</label>
    </div>
</div>
{{/if}}

<div class="col-1 d-none d-md-block">
    <a href="#" onclick="exportTableToCSV()" title="Export data from table to CSV" class="btn btn-outline-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-explicit"
            viewBox="0 0 16 16">
            <path d="M6.826 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826v2.408Z" />
            <path
                d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0h-11ZM1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5v-11Z" />
        </svg>
    </a>
</div>

<div class="col-1 d-none d-md-block">
    <a href="#" onclick="KeshavSoftCrud.AllFuncs.Table.SearchRow.Buttons.Refresh.OnClick({inEvent:event, inJsonConfig:'{{this.KData.TableInfo.DataAttributes.JsonConfig}}',inItemConfig:'{{this.KData.TableInfo.DataAttributes.ItemConfig}}' })" title="Export data from table to CSV" class="btn btn-outline-primary">
    
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
            <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
          </svg>
    </a>
</div>
</script>
<script id="ReportTable/Vertical/KPopUp"  KS="KeshavSoft" type="text/x-handlebars-template">
<div class="card KTableDivClass" data-pk="{{KData.TableInfo.PK}}"
    data-KeyAsTree="{{KData.TableInfo.DataAttributes.KeyAsTree}}"
    data-jsonconfig="{{KData.TableInfo.DataAttributes.JsonConfig}}"
    data-ItemConfig="{{KData.TableInfo.DataAttributes.ItemConfig}}"
    data-InsertKey="{{KData.TableInfo.DataAttributes.InsertKey}}">
    <div class="card-header">
        {{#if KData.TableInfo.SearchRowArray.Label.KTF}}
        <h4>{{KData.TableInfo.SearchRowArray.Label.DisplayObject.DisplayText}}</h4>
        {{/if}}
    </div>
    <div class="card-body KCardBody">
        {{> Vertical/KVertical/CardBody}}
    </div>
    <div class="card-footer">
        <div class="row">
            {{#if KData.TableInfo.Vertical.VerticalCreate.saveFromKeyAsTree}}
            <div class="col">
                <button
                    onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.MainTable.PopUp.SaveFuncs.StartFunc(event)"
                    type="button" class="btn btn-primary">Save New</button>
            </div>
            {{/if}}

            <div class="col visually-hidden">
                <div id="ShowSuccess" class="alert alert-success alert-dismissible fade show">
                    <button type="button" aria-hidden="true" class="close" data-dismiss="alert" aria-label="Close">
                        <i class="nc-icon nc-simple-remove"></i>
                    </button>
                    <span><b> Saved </b> successfully </span>
                </div>
            </div>

            <div id="ShowFailure" class="col visually-hidden">
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Duplicate!</strong> Unsuccessfull.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>
    </div>
</div>
</script>
<script id="ReportTableForPrint/Body/KTablebody"  KS="KeshavSoft" type="text/x-handlebars-template">
{{#each this.KData.TableData as |val key|}}
{{> ReportTableForPrint/Body/Row/NormalFromTableInfo inTableColumns=../KData.TableColumns inTableInfo=../KData.TableInfo this=this}}
{{/each}}

</script>
<script id="ReportTableForPrint/Body/Row/KTCellValue"  KS="KeshavSoft" type="text/x-handlebars-template">
<td class="KCol-{{@index}}" data-kcol={{@index}}
style="text-align: {{lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'TextAlign'}}">
{{#if (lookup (lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'DisplayType') 'IsInput') }}
<input ksr2 class="form-control" type="text"
    name="{{lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'DataAttribute'}}"
    list="{{lookup (lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'HtmlAttributes') 'list'}}"
    data-KeshavSoft="{{JSON2string (lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'KDatasetStuff')}}"
    data-ksdatalistvalue="{{CellValue}}"
    value="{{CellValue}}">
{{else}}
{{#if (lookup (lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'DisplayType') 'IsIndianFormat') }}
{{ShowInIndianDateFormat CellValue}}
{{else}}
{{CellValue}}
{{/if}}

{{/if}}
</td>

</script>
<script id="ReportTableForPrint/Body/Row/NormalFromTableInfo"  KS="KeshavSoft" type="text/x-handlebars-template">
<tr class="KTableRow {{this.RowClass}}" data-klevel="{{Table_KLevel inTableInfo.KLevel}}"
    data-pk="{{array_value_indexret inTableColumns inTableInfo.kPK this.DisplayText}}"
    data-details="{{array_value_indexret inTableColumns inTableInfo.kDetails this.DisplayText}}"
    data-kjsonfilename="{{this.TableKJsonFileName}}">

    <td style="text-align:right; display:none" class="kClassSearchSNo"></td>
    <td style="text-align:right">{{array_index_sno @index}}</td>
    {{#each DisplayText as | val1 key1 |}}
    {{#if (lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'ShowInTable')}}

    {{> ReportTableForPrint/Body/Row/KTCellValue}}
    
    {{/if}} {{/each}}
</tr>


</script>
<script id="ReportTableForPrint/Footer/Show/BalanceRow"  KS="KeshavSoft" type="text/x-handlebars-template">
<tr class="table-info">
    <td style="text-align:right; display:none" class="kClassSearchSNo"></td>
    <td></td>

    {{#each this.KData.TableColumns as |val1 key1|}} {{#if val1.ShowInTable}}
    <th style="text-align:{{val1.TextAlign}}">
        {{#if val1.Footer.Show.Balance.ShowTF}}
        {{#if (IsIndianDateFormat ../KData.TableColumns key1) }}
        {{ShowInIndianDateFormatPositiveOnly (TableColumnBalance key1 ../KData.TableData ../KData.TableColumns)}}
        {{else}}
        {{TableColumnBalance key1 ../KData.TableData ../KData.TableColumns}}
        {{/if}}
        {{/if}}
    </th> {{/if}} {{/each}}
</tr>
</script>
<script id="ReportTableForPrint/Footer"  KS="KeshavSoft" type="text/x-handlebars-template">
{{#if this.KData.TableInfo.FooterType.ShowTotals}}
<tr ReportTableShowTotals class="table-info">
    <td style="text-align:right; display:none" class="kClassSearchSNo"></td>
    <td>{{this.KData.TableData.length}}</td>

    {{#each this.KData.TableColumns as |val1 key1|}} {{#if val1.ShowInTable}}
    <th style="text-align:{{val1.TextAlign}}">
        {{TableFooterShowTotal val1 key1 ../KData.TableColumns ../KData.TableData}}
    </th> {{/if}} {{/each}}
</tr>
{{/if}}

{{#if this.KData.TableInfo.FooterType.ShowBalance}}
{{> ReportTableForPrint/Footer/Show/BalanceRow}}
{{/if}}
</script>
<script id="ReportTableForPrint/Head/KThead"  KS="KeshavSoft" type="text/x-handlebars-template">
<tr>
    <th width="5%" class="kClassSearchSNo" style="cursor:pointer; text-align:right; display:none">#</th>
    <th width="5%" style="cursor:pointer; text-align:right;">#</th>
    {{#each this.KData.TableColumns as |val1 key1|}}
    {{#if val1.ShowInTable}}
    <th class="KCol-{{@index}} kclass1 {{TableClasses.ColumnClass}}"
        width="{{TableColumnWidth  ../KData.TableColumns key1}}%" data-dataattribute="{{this.DataAttribute}}"
        data-viewtype="{{this.ViewType}}" data-showtotal="{{this.ShowTotal}}"
        data-editable="{{array_index_Editable this.DisplayMode.Editable}}"
        onclick="KeshavSoftCrud.AllFuncs.Table.Head.CellClick(event)" style="cursor: pointer;">
        {{this.DisplayName}}
        {{#if Head.Bs5UpArrow}}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-up"
            viewBox="0 0 16 16">
            <path
                d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707V12.5zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
        </svg>
        {{/if}}

        {{#if Head.Bs5DownArrow}}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-down"
            viewBox="0 0 16 16">
            <path
                d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
        </svg>
        {{/if}}
    </th>
    {{/if}} {{/each}}
</tr>
</script>
<script id="ReportTableForPrint/KTable"  KS="KeshavSoft" type="text/x-handlebars-template">
<div class="table-responsive">
    <table class=" table KTableClass table-hover {{KData.TableInfo.ParentClasses.Table.TableClass}}"
        id="{{KData.TableInfo.TableId}}" data-KType="{{KData.TableInfo.TableKType}}"
        data-kjsonfilename="{{KData.TableInfo.TableKJsonFileName}}" data-pk="{{KData.TableInfo.DataAttributes.PK}}"
        data-queryname="{{KData.TableInfo.DataAttributes.QueryName}}" data-KGlobalIndex="{{KGlobalIndex}}"
        data-jsonType="{{KData.TableInfo.DataAttributes.JsonType}}"
        data-jsonItemName="{{KData.TableInfo.DataAttributes.JsonItemName}}"
        data-InsertKey="{{KData.TableInfo.DataAttributes.InsertKey}}"
        data-KeyAsTree="{{KData.TableInfo.DataAttributes.KeyAsTree}}"
        data-ShowType="{{KData.TableInfo.DataAttributes.ShowType}}">
        <thead>
            {{> ReportTableForPrint/Head/KThead }}
        </thead>
        <tbody>
            {{> ReportTableForPrint/Body/KTablebody }}
        </tbody>
        <tfoot>
            {{#if KData.TableInfo.ShowFooter}} {{> ReportTableForPrint/Footer }} {{/if}}
        </tfoot>
    </table>
</div>
</script>
<script id="ReportTableForPrint/Vertical/KPopUp"  KS="KeshavSoft" type="text/x-handlebars-template">
<div class="card KTableDivClass" data-pk="{{KData.TableInfo.PK}}"
    data-KeyAsTree="{{KData.TableInfo.DataAttributes.KeyAsTree}}"
    data-jsonconfig="{{KData.TableInfo.DataAttributes.JsonConfig}}"
    data-ItemConfig="{{KData.TableInfo.DataAttributes.ItemConfig}}"
    data-InsertKey="{{KData.TableInfo.DataAttributes.InsertKey}}">
    <div class="card-header">
        {{#if KData.TableInfo.SearchRowArray.Label.KTF}}
        <h4>{{KData.TableInfo.SearchRowArray.Label.DisplayObject.DisplayText}}</h4>
        {{/if}}
    </div>
    <div class="card-body KCardBody">
        {{> Vertical/KVertical/CardBody}}
    </div>
    <div class="card-footer">
        <div class="row">
            {{#if KData.TableInfo.Vertical.VerticalCreate.saveFromKeyAsTree}}
            <div class="col">
                <button
                    onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.MainTable.PopUp.SaveFuncs.StartFunc(event)"
                    type="button" class="btn btn-primary">Save New</button>
            </div>
            {{/if}}

            <div class="col visually-hidden">
                <div id="ShowSuccess" class="alert alert-success alert-dismissible fade show">
                    <button type="button" aria-hidden="true" class="close" data-dismiss="alert" aria-label="Close">
                        <i class="nc-icon nc-simple-remove"></i>
                    </button>
                    <span><b> Saved </b> successfully </span>
                </div>
            </div>

            <div id="ShowFailure" class="col visually-hidden">
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Duplicate!</strong> Unsuccessfull.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>
    </div>
</div>
</script>
<script id="SubTable/Body/KTablebody"  KS="KeshavSoft" type="text/x-handlebars-template">
{{#each this.KData.TableData as |val key|}}

{{#if ../KData.TableInfo.DataAttributesFromTableInfo }}
{{> SubTable/Body/Row/NormalFromTableInfo inTableColumns=../KData.TableColumns inTableInfo=../KData.TableInfo this=this}}
{{/if}}

{{#if ../KData.TableInfo.DataAttributesFromTableDataRow }}
{{> Table/Body/Row/NormalFromTableDataRow  inTableColumns=../KData.TableColumns  inTableInfo=../KData.TableInfo}}
{{/if}}

{{/each}}

</script>
<script id="SubTable/Body/Row/KTCellValue"  KS="KeshavSoft" type="text/x-handlebars-template">
<td class="KCol-{{@index}}" data-kcol={{@index}}
style="text-align: {{lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'TextAlign'}}">
{{#if (lookup (lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'DisplayType') 'IsInput') }}
<input ksr2 class="form-control" type="text"
    name="{{lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'DataAttribute'}}"
    list="{{lookup (lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'HtmlAttributes') 'list'}}"
    data-KeshavSoft="{{JSON2string (lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'KDatasetStuff')}}"
    data-ksdatalistvalue="{{CellValue}}"
    value="{{CellValue}}">
{{else}}
{{#if (lookup (lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'DisplayType') 'IsIndianFormat') }}
{{ShowInIndianDateFormat CellValue}}
{{else}}
{{CellValue}}
{{/if}}

{{/if}}
</td>

</script>
<script id="SubTable/Body/Row/KTbodyRowOptions"  KS="KeshavSoft" type="text/x-handlebars-template">
{{#if this.Delete.Simple}}
<td class="ButtonClass">
    <button type="button" class="btn btn-circle btn-primary"
        onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Subtable.Body.Row.DeleteNew({inEvent:event})"><svg
            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash"
            viewBox="0 0 16 16">
            <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
        </svg></button>
</td>
{{/if}}

{{#if this.PrintToPrinter.FromData}}
<td class="ButtonClass">
    <a href="#"
        onclick="jClassGlobalPrintFuncs.jFPrint({inEvent:event,inJsonConfig:{{lookup (lookup (lookup (lookup (lookup @root @../key) 'KData') 'TableInfo') 'DataAttributes') 'JsonConfig'}},             inItemConfig:{{lookup (lookup (lookup (lookup (lookup @root @../key) 'KData') 'TableInfo') 'DataAttributes') 'ItemConfig'}} })">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer"
            viewBox="0 0 16 16">
            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
            <path
                d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
        </svg>
    </a>
</td>
{{/if}}

{{#if this.PrintToPrinter.Double}}
<td class="ButtonClass">
    <a href="#"
        onclick="jClassGlobalPrintFuncs.jFPrintFromData({inEvent:event,inJsonConfig:{{lookup (lookup (lookup (lookup (lookup @root @../key) 'KData') 'TableInfo') 'DataAttributes') 'JsonConfig'}},             inItemConfig:{{lookup (lookup (lookup (lookup (lookup @root @../key) 'KData') 'TableInfo') 'DataAttributes') 'ItemConfig'}} })">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer"
            viewBox="0 0 16 16">
            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
            <path
                d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
        </svg>
    </a>
</td>
{{/if}}

{{#if this.PrintToPrinter.Barcode}}
<td class="ButtonClass">
    <a href="#" onclick="jVarGlobalClientObject.Api.UserData.Table.Row.Barcode.Print({inEvent:event})">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer"
            viewBox="0 0 16 16">
            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
            <path
                d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
        </svg>
    </a>
</td>
{{/if}}

{{#if this.Show.Rowshow}}
<td class="ButtonClass">
    <a href="#" onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Table.Body.Row.ShowClick({ inEvent :event})"
        style="color: forestgreen;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-arrow-right-square" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
        </svg>
    </a>
</td>
{{/if}}

{{#if this.PopUp.Rowshow}}
<td class="ButtonClass">
    <a href="#" onclick="jVarGlobalClientObject.Api.UserData.Table.Row.Edit.PopUp({ inEvent :event})"
        style="color: forestgreen;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
            <path
                d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
        </svg>
    </a>
</td>
{{/if}}

{{#if this.Edit.RowEdit}}
<td class="ButtonClass">
    <a href="#" onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Table.Body.Row.Edit.ButtonClick({inEvent:event})"
        style="color: forestgreen;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square"
            viewBox="0 0 16 16">
            <path
                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
        </svg>
    </a>
</td>
{{/if}}

{{#if this.Edit.SubTableRowEdit}}
<td class="ButtonClass">
    <a href="#"
        onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Subtable.Body.Row.Edit.ButtonClick({inEvent:event})"
        style="color: brown;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square"
            viewBox="0 0 16 16">
            <path
                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
        </svg>
    </a>
</td>
{{/if}}
</script>
<script id="SubTable/Body/Row/NormalFromTableDataRow"  KS="KeshavSoft" type="text/x-handlebars-template">
<tr class="KTableRow {{this.RowClass}}" data-klevel="{{Table_KLevel inTableInfo.KLevel}}"
    data-pk="{{array_value_indexret inTableColumns inTableInfo.kPK this.DisplayText}}"
    data-details="{{array_value_indexret inTableColumns inTableInfo.kDetails this.DisplayText}}"
    data-kjsonfilename="{{this.TableKJsonFileName}}">

    <td style="text-align:right; display:none" class="kClassSearchSNo"></td>
    <td style="text-align:right">{{array_index_sno @index}}</td>
    {{#each DisplayText as | val1 key1 |}}
    {{#if (ShowInTable ../inTableColumns key1)}}

    {{> Table/Body/Row/KTCellValue inTableColumns=../inTableColumns inIndex=key1}}
    
    {{/if}} {{/each}}

    {{> Table/Body/Row/KTbodyRowOptions inTableInfo.TableRowOptions}}
</tr>


</script>
<script id="SubTable/Body/Row/NormalFromTableInfo"  KS="KeshavSoft" type="text/x-handlebars-template">
<tr class="KTableRow {{this.RowClass}}" data-klevel="{{Table_KLevel inTableInfo.KLevel}}"
    data-pk="{{array_value_indexret inTableColumns inTableInfo.kPK this.DisplayText}}"
    data-details="{{array_value_indexret inTableColumns inTableInfo.kDetails this.DisplayText}}"
    data-kjsonfilename="{{this.TableKJsonFileName}}">

    <td style="text-align:right; display:none" class="kClassSearchSNo"></td>
    <td style="text-align:right">{{array_index_sno @index}}</td>
    {{#each DisplayText as | val1 key1 |}}
    {{#if (lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'ShowInTable')}}

    {{> Table/Body/Row/KTCellValue}}
    
    {{/if}} {{/each}}

    {{> SubTable/Body/Row/KTbodyRowOptions inTableInfo.TableRowOptions}}
</tr>


</script>
<script id="SubTable/Footer/CreateNew/HtmlControls"  KS="KeshavSoft" type="text/x-handlebars-template">
{{#if IsTextArea}}
<textarea kh7 id="{{DataAttribute}}" name="{{DataAttribute}}" data-dataattribute="{{DataAttribute}}"
    class="form-control" placeholder="Enter {{DisplayName}}" autocomplete="off" value="{{DefaultValue}}"
    style="{{HtmlAttributes.style}}" rows="4" cols="20">
    </textarea>
{{else}}
{{#if IsSelect}}
<select name="{{DataAttribute}}" id="{{DataAttribute}}" class="form-select KeshavSoftSelect"
    data-klist="{{HtmlAttributes.list}}" data-kDefaultValue="{{DefaultValue}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.EnterOnClient({inEvent:event})"
    data-KeshavSoft="{{JSON2string KDatasetStuff}}">
</select>
{{else}}
{{#if EnterToServer}}
<input kh1 id="{{DataAttribute}}" name="{{DataAttribute}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-dataattribute="{{DataAttribute}}" type="text"
    class="form-control KeshavSoft KeshavSoftEnterToServer" value="{{DefaultValue}}"   data-KeshavSoft="{{JSON2string KDatasetStuff}}"
    placeholder="" autocomplete="off" list="{{HtmlAttributes.list}}" data-DataListReverse="{{KDatasetStuff.DataListReverse}}"
    data-ksdatalistvalue="{{DefaultValue}}" />
{{else}}
{{#if KDataAttributes.onkeypress}}
<input kh2 id="{{DataAttribute}}" name="{{DataAttribute}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-dataattribute="{{DataAttribute}}"
  type="text"
    class="form-control KeshavSoftonkeypress" value="{{DefaultValue}}"
    autocomplete="off" list="{{HtmlAttributes.list}}" data-KeshavSoft="{{JSON2string KDatasetStuff}}" />
{{else}}
{{#if KDataAttributes.CustomDataList}}
<input kh3 id="{{DataAttribute}}" name="{{DataAttribute}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-dataattribute="{{DataAttribute}}"
    onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.EnterOnClient({ inEvent:event })" type="text"
    class="form-control KeshavSoftonkeypress" value="{{DefaultValue}}"
    onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.EnterToServer({inEvent:event})" placeholder=""
    autocomplete="off" list="{{DataAttribute}}-datalist" data-KeshavSoft="{{JSON2string KDatasetStuff}}" />
<datalist id="{{DataAttribute}}-datalist">
</datalist>
{{else}}
{{#if SaveOnEnter}}
<input kh4 id="{{DataAttribute}}" name="{{DataAttribute}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-dataattribute="{{DataAttribute}}"
    onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.SaveOnEnter({ inEvent:event })" type="text"
    class="form-control KeshavSoftSaveOnEnter" placeholder="" autocomplete="off" list="{{HtmlAttributes.list}}" />
{{else}}
{{#if HtmlAttributes.KTF}}
<input kh5 id="{{DataAttribute}}" name="{{DataAttribute}}" data-dataattribute="{{DataAttribute}}"
    value="{{DefaultValue}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" type="{{KDataset.HTMLControlType}}"
    class="{{ParentClasses.InputClass}} KeshavSoftHtmlAttributes" min="{{KDataset.Min}}" max="{{KDataset.Max}}"
    step="{{KDataset.Step}}" placeholder="Enter {{DisplayName}}" autocomplete="off" list="{{HtmlAttributes.list}}"
    data-KeshavSoft="{{JSON2string KDatasetStuff}}" data-ksdatalistvalue="{{DefaultValue}}"
    data-DataListReverse="{{KDatasetStuff.DataListReverse}}" />
{{else}}
<input kh6 id="{{DataAttribute}}" name="{{DataAttribute}}" data-dataattribute="{{DataAttribute}}"
    value="{{DefaultValue}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" type="{{KDataset.HTMLControlType}}"
    class="{{ParentClasses.InputClass}}" min="{{KDataset.Min}}" max="{{KDataset.Max}}" step="{{KDataset.Step}}"
    placeholder="Enter {{DisplayName}}" autocomplete="off" data-KeshavSoft="{{JSON2string KDatasetStuff}}"
    value="{{DefaultValue}}" />
<div class="invalid-feedback">
    Should not be empty!
</div>
{{/if}}
{{/if}}
{{/if}}
{{/if}}
{{/if}}
{{/if}}
{{/if}}
</script>
<script id="SubTable/Footer/CreateNew/KTfooterCreateNewRow"  KS="KeshavSoft" type="text/x-handlebars-template">
<td style="text-align:right; display:none" class="kClassSearchSNo"></td>
<td style="text-align:right"></td>

{{#each this.KData.TableColumns as | val1 key1 |}}
{{#if ShowInTable}}
<td class="KCol-{{@index}}  {{TableClasses.ColumnClass}}" data-viewtype="{{this.ViewType}}"
    data-showtotal="{{this.ShowTotal}}" data-editable="{{array_index_Editable this.DisplayMode.Editable}}">
    {{#if CreateNew}}
    {{> SubTable/Footer/CreateNew/HtmlControls }}
    {{/if}}
</td>
{{/if}}
{{/each}}

{{#if this.KData.TableInfo.FooterType.SaveType.Save}}
<td class="SaveClass">
    <button type="button" class="btn btn-outline-primary SubTableFooterCreateNewRowSaveButtonClass">save</button>
</td>

{{/if}}

<td class="UpdateClass" style="display: none;">
    <button onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Table.Body.Row.Update({inEvent:event})" type="button"
        class="btn btn-outline-primary">Update</button>
</td>

<td class="UpdateSubTableClass" style="display: none;">
    <button onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Subtable.Body.Row.Update({inEvent:event})"
        type="button" class="btn btn-outline-success">Update</button>
</td>
</script>
<script id="SubTable/Footer/Show/BalanceRow"  KS="KeshavSoft" type="text/x-handlebars-template">
<tr class="table-info">
    <td style="text-align:right; display:none" class="kClassSearchSNo"></td>
    <td></td>

    {{#each this.KData.TableColumns as |val1 key1|}} {{#if val1.ShowInTable}}
    <td style="text-align:{{val1.TextAlign}}">
        {{#if val1.Footer.Show.Balance.ShowTF}}
        {{#if (IsIndianDateFormat ../KData.TableColumns key1) }}
        {{ShowInIndianDateFormatPositiveOnly (TableColumnBalance key1 ../KData.TableData ../KData.TableColumns)}}
        {{else}}
        {{TableColumnBalance key1 ../KData.TableData ../KData.TableColumns}}
        {{/if}}
        {{/if}}
    </td> {{/if}} {{/each}}
</tr>
</script>
<script id="SubTable/Footer"  KS="KeshavSoft" type="text/x-handlebars-template">
{{#if this.KData.TableInfo.FooterType.CreateNewRow.Show}}
<tr data-footertype="CreateNewRow" style="{{this.KData.TableInfo.FooterType.CreateNewRow.Style}}">
    {{> SubTable/Footer/CreateNew/KTfooterCreateNewRow }}
</tr>
{{/if}}


{{#if this.KData.TableInfo.FooterType.ShowTotals}}
<tr class="table-info">
    <td style="text-align:right; display:none" class="kClassSearchSNo"></td>
    <td>{{this.KData.TableData.length}}</td>

    {{#each this.KData.TableColumns as |val1 key1|}} {{#if val1.ShowInTable}}
    <td style="text-align:{{val1.TextAlign}}">
        {{#if val1.ShowTotal}}
        {{#if (IsIndianDateFormat ../KData.TableColumns key1) }}
        {{ShowInIndianDateFormat (TableColumnTotal key1 ../KData.TableData)}}
        {{else}}
        {{TableColumnTotal key1 ../KData.TableData}}
        {{/if}}
        {{/if}}
    </td> {{/if}} {{/each}}
</tr>
{{/if}}

{{#if this.KData.TableInfo.FooterType.ShowBalance}}
{{> Table/Footer/Show/BalanceRow}}
{{/if}}
</script>
<script id="SubTable/Head/KThead"  KS="KeshavSoft" type="text/x-handlebars-template">
<tr>
    <th width="5%" class="kClassSearchSNo" style="cursor:pointer; text-align:right; display:none">#</th>
    <th width="5%" style="cursor:pointer; text-align:right;">#</th>
    {{#each this.KData.TableColumns as |val1 key1|}}
    {{#if val1.ShowInTable}}
    <th class="KCol-{{@index}} kclass1 {{TableClasses.ColumnClass}}"
        width="{{TableColumnWidth  ../KData.TableColumns key1}}%" data-dataattribute="{{this.DataAttribute}}"
        data-viewtype="{{this.ViewType}}" data-showtotal="{{this.ShowTotal}}"
        data-editable="{{array_index_Editable this.DisplayMode.Editable}}"
        onclick="KeshavSoftCrud.AllFuncs.Table.Head.CellClick(event)" style="cursor: pointer;">
        {{this.DisplayName}}
        {{#if Head.Bs5UpArrow}}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-up"
            viewBox="0 0 16 16">
            <path
                d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707V12.5zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
        </svg>
        {{/if}}

        {{#if Head.Bs5DownArrow}}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-down"
            viewBox="0 0 16 16">
            <path
                d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
        </svg>
        {{/if}}
    </th>
    {{/if}} {{/each}}
</tr>
</script>
<script id="SubTable/KTable"  KS="KeshavSoft" type="text/x-handlebars-template">
<div class="table-responsive">
    <table class=" table KTableClass table-hover {{KData.TableInfo.ParentClasses.Table.TableClass}}"
        id="{{KData.TableInfo.TableId}}" data-KType="{{KData.TableInfo.TableKType}}"
        data-kjsonfilename="{{KData.TableInfo.TableKJsonFileName}}" data-pk="{{KData.TableInfo.DataAttributes.PK}}"
        data-queryname="{{KData.TableInfo.DataAttributes.QueryName}}" data-KGlobalIndex="{{KGlobalIndex}}"
        data-jsonType="{{KData.TableInfo.DataAttributes.JsonType}}"
        data-jsonItemName="{{KData.TableInfo.DataAttributes.JsonItemName}}"
        data-InsertKey="{{KData.TableInfo.DataAttributes.InsertKey}}"
        data-KeyAsTree="{{KData.TableInfo.DataAttributes.KeyAsTree}}"
        data-ShowType="{{KData.TableInfo.DataAttributes.ShowType}}">
        <thead>
            {{> SubTable/Head/KThead }}
        </thead>
        <tbody>
            {{> SubTable/Body/KTablebody }}
        </tbody>
        <tfoot>
            {{#if KData.TableInfo.ShowFooter}} {{> SubTable/Footer }} {{/if}}
        </tfoot>
    </table>
</div>
</script>
<script id="SubTable/KTableWithCardAndSearchRow"  KS="KeshavSoft" type="text/x-handlebars-template">
<div class="{{this.KData.TableInfo.ParentClasses.Parent3Class}}">
    {{this.KData.TableInfo.DataAttributes.ItemConfig.inItemName}}

    <div id="kcard1" class="card border-primary KTableDivClass {{KData.TableInfo.ParentClasses.Table.CardClass}}"
        data-klevel={{@index}} 
        data-localstorageid="{{KData.TableInfo.DataAttributes.localstorageid}}"
        data-localstoragearrayindex="{{KData.TableInfo.DataAttributes.localstoragearrayindex}}"
        data-jsonconfig="{{KData.TableInfo.DataAttributes.JsonConfig}}"
        data-ItemConfig="{{KData.TableInfo.DataAttributes.ItemConfig}}"
         data-pk="{{KData.TableInfo.DataAttributes.PK}}"
        data-InsertKey="{{KData.TableInfo.DataAttributes.InsertKey}}">
        <div class="card-header">
            {{> SubTable/Search/KSearchRow}}
        </div>
        <div class="card-body">
            {{> SubTable/KTable KGlobalIndex=KGlobalIndex}}
        </div>
    </div>
</div>

</script>
<script id="SubTable/Search/KSearchRow"  KS="KeshavSoft" type="text/x-handlebars-template">
<div class="row">
    {{#if KData.TableInfo.SearchRowArray.Label.KTF}}
    <div class="col-{{KData.TableInfo.SearchRowArray.Label.DisplayObject.ColClass}}">
        <h5 style="margin-left: 7px; margin-top:10px; text-align:left;">
            {{KData.TableInfo.SearchRowArray.Label.DisplayObject.DisplayText}}
        </h5>
    </div>
    {{/if}}
    {{#if KData.TableInfo.SearchRowArray.Search.KTF}}
    <div class="col-{{KData.TableInfo.SearchRowArray.Search.DisplayObject.ColClass}}">
        <div class="input-group">
            <span class="input-group-text text-body"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg></span>
            <input type="text" class="form-control" placeholder="Type here..."
                onkeyup="KeshavSoftCrud.AllFuncs.Table.SearchRow.SearchFuncs.SearchAllRows(event)">
        </div>
    </div>

    {{/if}}
    {{#if KData.TableInfo.SearchRowArray.SearchWithEnter.KTF}}
    <div class="col-{{KData.TableInfo.SearchRowArray.SearchWithEnter.DisplayObject.ColClass}}">
        <div class="input-group no-border">
            <span class="input-group-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-search me-2" viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
                </svg>
            </span>

            <input type="text" value="" class="form-control KClassTableSearchTxt"
                data-ServerAPIURL="{{this.KServerAPIURL}}"
                placeholder="{{KData.TableInfo.SearchRowArray.SearchWithEnter.DisplayObject.DisplayText}}"
                onkeyup="KeshavSoftCrud.AllFuncs.Table.SearchRow.SearchFuncs.SearchWithEnter(event)">

        </div>
    </div>
    {{/if}}

    {{#if KData.TableInfo.SearchRowArray.CreativeTim.SearchWithEnter.KTF}}
    <div class="col-{{KData.TableInfo.SearchRowArray.SearchWithEnter.DisplayObject.ColClass}}">
        <div class="input-group no-border">
            <input type="text" value="" class="form-control KClassTableSearchTxt"
                data-ServerAPIURL="{{this.KServerAPIURL}}"
                placeholder="{{KData.TableInfo.SearchRowArray.SearchWithEnter.DisplayObject.DisplayText}}"
                onkeyup="KeshavSoftCrud.AllFuncs.Table.SearchRow.SearchFuncs.SearchWithEnter(event)">
            <div class="input-group-append">
                <div class="input-group-text">
                    <i class="nc-icon nc-zoom-split"></i>
                </div>
            </div>
        </div>
    </div>
    {{/if}}

    {{> SubTable/Search/KSearchWithButtons }}
</div>
</script>
<script id="SubTable/Search/KSearchWithButtons"  KS="KeshavSoft" type="text/x-handlebars-template">
{{#if KData.TableInfo.SearchRowArray.Button.PrintToPrinter.Double}}
<div class="col-1 d-none d-md-block">
    <a href="#" onclick="jVarGlobalClientObject.Print.Ui.FromSearchRow({inEvent:event})"
        class="btn btn-outline-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer"
            viewBox="0 0 16 16">
            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
            <path
                d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
        </svg>
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.PrintToPrinter.Preview.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.PrintToPrinter.Preview.DisplayObject.ColClass}}">
    <a href="#" onclick="jVarGlobalClientObject.Api.UserData.Table.SearchRow.Buttons.PrintToPrinter.Preview(event)">
        <svg class="bi d-block mx-auto mb-1" width="24" height="24">
            <use xlink:href="#TablePrintId" />
        </svg>
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.Footer.WithApi.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.Footer.WithApi.DisplayObject.ColClass}}">
    <a href="#" onclick="jVarGlobalClientObject.Api.UserData.Table.SearchRow.CreateNew.Footer(event)"
        title="Add new row in the table footer" class="btn btn-outline-primary">
        {{> Bs5/Icons/Svg this.KData.TableInfo.SearchRowArray.Button.Footer.WithApi.DisplayObject}}
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.NewWindow.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.NewWindow.DisplayObject.ColClass}}">
    <a href="#" onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Table.Card.Header.AddButtonClick(event)"
        title="Add new row in new window as Vertical" class="btn btn-outline-primary">
        {{> Bs5/Icons/Svg this.KData.TableInfo.SearchRowArray.Button.NewWindow.DisplayObject}}
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.PopUp.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.PopUp.DisplayObject.ColClass}}">
    <a href="#" onclick="jFPopUpCreateNewForSubTable({ inEvent :event})" title="Add new row in PopUp as Vertical"
        class="btn btn-outline-primary">
        {{> Bs5/Icons/Svg this.KData.TableInfo.SearchRowArray.Button.PopUp.DisplayObject}}
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.FromHtml.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.FromHtml.DisplayObject.ColClass}}">
    <a href="#" onclick="jFCreateNewFromHtml({ inEvent :event})" class="btn btn-outline-primary">
        {{> Bs5/Icons/Svg this.KData.TableInfo.SearchRowArray.Button.FromHtml.DisplayObject}}
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.Scrollable.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.Scrollable.DisplayObject.ColClass}}">
    <div class="form-check form-switch">
        <input onclick="KeshavSoftCrud.AllFuncs.Table.SearchRow.Scrollable.Click(event)" class="form-check-input"
            type="checkbox" id="flexSwitchCheckDefault">
        <label class="form-check-label" for="flexSwitchCheckDefault">Scrollable</label>
    </div>
</div>
{{/if}}

</script>
<script id="Table/Body/KTablebody"  KS="KeshavSoft" type="text/x-handlebars-template">
{{#each this.KData.TableData as |val key|}}

{{#if ../KData.TableInfo.DataAttributesFromTableInfo }}
{{> Table/Body/Row/NormalFromTableInfo inTableColumns=../KData.TableColumns inTableInfo=../KData.TableInfo this=this}}
{{/if}}

{{#if ../KData.TableInfo.DataAttributesFromTableDataRow }}
{{> Table/Body/Row/NormalFromTableDataRow  inTableColumns=../KData.TableColumns  inTableInfo=../KData.TableInfo}}
{{/if}}

{{/each}}

</script>
<script id="Table/Body/Row/KTCellValue"  KS="KeshavSoft" type="text/x-handlebars-template">
<td class="KCol-{{@index}}" data-kcol={{@index}}
style="text-align: {{lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'TextAlign'}}">
{{#if (lookup (lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'DisplayType') 'IsInput') }}
<input ksr2 class="form-control" type="text"
    name="{{lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'DataAttribute'}}"
    list="{{lookup (lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'HtmlAttributes') 'list'}}"
    data-KeshavSoft="{{JSON2string (lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'KDatasetStuff')}}"
    data-ksdatalistvalue="{{CellValue}}"
    value="{{CellValue}}">
{{else}}
{{#if (lookup (lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'DisplayType') 'IsIndianFormat') }}
{{ShowInIndianDateFormat CellValue}}
{{else}}
{{CellValue}}
{{/if}}

{{/if}}
</td>

</script>
<script id="Table/Body/Row/KTbodyRowOptions"  KS="KeshavSoft" type="text/x-handlebars-template">
{{#if this.Delete.Simple}}
<td class="ButtonClass">
    <a href="#" onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Table.Body.Row.DeleteNew({inEvent:event})">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash"
            viewBox="0 0 16 16">
            <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
        </svg>
    </a>
</td>
{{/if}}

{{#if this.PrintToPrinter.FromData}}
<td class="ButtonClass">
    <a href="#"
        onclick="jClassGlobalPrintFuncs.jFPrint({inEvent:event,inJsonConfig:{{lookup (lookup (lookup (lookup (lookup @root @../key) 'KData') 'TableInfo') 'DataAttributes') 'JsonConfig'}},             inItemConfig:{{lookup (lookup (lookup (lookup (lookup @root @../key) 'KData') 'TableInfo') 'DataAttributes') 'ItemConfig'}} })">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer"
            viewBox="0 0 16 16">
            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
            <path
                d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
        </svg>
    </a>
</td>
{{/if}}

{{#if this.PrintToPrinter.Double}}
<td class="ButtonClass">
    <a href="#"
        onclick="jClassGlobalPrintFuncs.jFPrintFromData({inEvent:event,inJsonConfig:{{lookup (lookup (lookup (lookup (lookup @root @../key) 'KData') 'TableInfo') 'DataAttributes') 'JsonConfig'}},             inItemConfig:{{lookup (lookup (lookup (lookup (lookup @root @../key) 'KData') 'TableInfo') 'DataAttributes') 'ItemConfig'}} })">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer"
            viewBox="0 0 16 16">
            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
            <path
                d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
        </svg>
    </a>
</td>
{{/if}}

{{#if this.PrintToPrinter.Barcode}}
<td class="ButtonClass">
    <a href="#" onclick="jVarGlobalClientObject.Api.UserData.Table.Row.Barcode.Print({inEvent:event})">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer"
            viewBox="0 0 16 16">
            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
            <path
                d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
        </svg>
    </a>
</td>
{{/if}}

{{#if this.Show.Rowshow}}
<td class="ButtonClass">
    <a href="#" onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Table.Body.Row.ShowClick({ inEvent :event})"
        style="color: forestgreen;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-arrow-right-square" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
        </svg>
    </a>
</td>
{{/if}}

{{#if this.PopUp.Rowshow}}
<td class="ButtonClass">
    <a href="#" onclick="jVarGlobalClientObject.Api.UserData.Table.Row.Edit.PopUp({ inEvent :event})"
        style="color: forestgreen;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
            <path
                d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
        </svg>
    </a>
</td>
{{/if}}

{{#if this.Edit.RowEdit}}
<td class="ButtonClass">
    <a href="#" onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Table.Body.Row.Edit.ButtonClick({inEvent:event})"
        style="color: forestgreen;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square"
            viewBox="0 0 16 16">
            <path
                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
        </svg>
    </a>
</td>
{{/if}}

{{#if this.Edit.SubTableRowEdit}}
<td class="ButtonClass">
    <a href="#" onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Subtable.Body.Row.Edit.ButtonClick({inEvent:event})"
        style="color: brown;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square"
            viewBox="0 0 16 16">
            <path
                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
        </svg>
    </a>
</td>
{{/if}}


</script>
<script id="Table/Body/Row/NormalFromTableDataRow"  KS="KeshavSoft" type="text/x-handlebars-template">
<tr class="KTableRow {{this.RowClass}}" data-klevel="{{Table_KLevel inTableInfo.KLevel}}"
    data-pk="{{array_value_indexret inTableColumns inTableInfo.kPK this.DisplayText}}"
    data-details="{{array_value_indexret inTableColumns inTableInfo.kDetails this.DisplayText}}"
    data-kjsonfilename="{{this.TableKJsonFileName}}">

    <td style="text-align:right; display:none" class="kClassSearchSNo"></td>
    <td style="text-align:right">{{array_index_sno @index}}</td>
    {{#each DisplayText as | val1 key1 |}}
    {{#if (ShowInTable ../inTableColumns key1)}}

    {{> Table/Body/Row/KTCellValue inTableColumns=../inTableColumns inIndex=key1}}
    
    {{/if}} {{/each}}

    {{> Table/Body/Row/KTbodyRowOptions inTableInfo.TableRowOptions}}
</tr>


</script>
<script id="Table/Body/Row/NormalFromTableInfo"  KS="KeshavSoft" type="text/x-handlebars-template">
<tr class="KTableRow {{this.RowClass}}" data-klevel="{{Table_KLevel inTableInfo.KLevel}}"
    data-pk="{{array_value_indexret inTableColumns inTableInfo.kPK this.DisplayText}}"
    data-details="{{array_value_indexret inTableColumns inTableInfo.kDetails this.DisplayText}}"
    data-kjsonfilename="{{this.TableKJsonFileName}}">

    <td style="text-align:right; display:none" class="kClassSearchSNo"></td>
    <td style="text-align:right">{{array_index_sno @index}}</td>
    {{#each DisplayText as | val1 key1 |}}
    {{#if (lookup (lookup (lookup (lookup (lookup @root @../../key) 'KData') 'TableColumns') @key) 'ShowInTable')}}

    {{> Table/Body/Row/KTCellValue}}
    
    {{/if}} {{/each}}

    {{> Table/Body/Row/KTbodyRowOptions inTableInfo.TableRowOptions}}
</tr>


</script>
<script id="Table/Footer/CreateNew/HtmlControls"  KS="KeshavSoft" type="text/x-handlebars-template">
{{#if IsTextArea}}
<textarea kh7 id="{{DataAttribute}}" name="{{DataAttribute}}" data-dataattribute="{{DataAttribute}}"
    class="form-control" placeholder="Enter {{DisplayName}}" autocomplete="off" value="{{DefaultValue}}"
    style="{{HtmlAttributes.style}}" rows="4" cols="20">
    </textarea>
{{else}}
{{#if IsSelect}}
<select name="{{DataAttribute}}" id="{{DataAttribute}}" class="form-select KeshavSoftSelect"
    data-klist="{{HtmlAttributes.list}}" data-kDefaultValue="{{DefaultValue}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.EnterOnClient({inEvent:event})"
    data-KeshavSoft="{{JSON2string KDatasetStuff}}">
</select>
{{else}}
{{#if EnterToServer}}
<input kh1 id="{{DataAttribute}}" name="{{DataAttribute}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-dataattribute="{{DataAttribute}}" type="text"
    class="form-control KeshavSoft" value="{{DefaultValue}}"   data-KeshavSoft="{{JSON2string KDatasetStuff}}"
    onkeypress="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Table.Footer.KeyPress.EnterToServer({inEvent:event})"
    placeholder="" autocomplete="off" list="{{HtmlAttributes.list}}" data-DataListReverse="{{KDatasetStuff.DataListReverse}}"
    data-ksdatalistvalue="{{DefaultValue}}" />
{{else}}
{{#if KDataAttributes.onkeypress}}
<input kh2 id="{{DataAttribute}}" name="{{DataAttribute}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-dataattribute="{{DataAttribute}}"
    onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.EnterOnClient({ inEvent:event })" type="text"
    class="form-control KeshavSoftonkeypress" value="{{DefaultValue}}"
    onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.EnterToServer({inEvent:event})" placeholder=""
    autocomplete="off" list="{{HtmlAttributes.list}}" data-KeshavSoft="{{JSON2string KDatasetStuff}}" />
{{else}}
{{#if KDataAttributes.CustomDataList}}
<input kh3 id="{{DataAttribute}}" name="{{DataAttribute}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-dataattribute="{{DataAttribute}}"
    onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.EnterOnClient({ inEvent:event })" type="text"
    class="form-control KeshavSoftonkeypress" value="{{DefaultValue}}"
    onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.EnterToServer({inEvent:event})" placeholder=""
    autocomplete="off" list="{{DataAttribute}}-datalist" data-KeshavSoft="{{JSON2string KDatasetStuff}}" />
<datalist id="{{DataAttribute}}-datalist">
</datalist>
{{else}}
{{#if SaveOnEnter}}
<input kh4 id="{{DataAttribute}}" name="{{DataAttribute}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-dataattribute="{{DataAttribute}}"
    onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.SaveOnEnter({ inEvent:event })" type="text"
    class="form-control KeshavSoftSaveOnEnter" placeholder="" autocomplete="off" list="{{HtmlAttributes.list}}" />
{{else}}
{{#if HtmlAttributes.KTF}}
<input kh5 id="{{DataAttribute}}" name="{{DataAttribute}}" data-dataattribute="{{DataAttribute}}"
    value="{{DefaultValue}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" type="{{KDataset.HTMLControlType}}"
    class="{{ParentClasses.InputClass}} KeshavSoftHtmlAttributes" min="{{KDataset.Min}}" max="{{KDataset.Max}}"
    step="{{KDataset.Step}}" placeholder="Enter {{DisplayName}}" autocomplete="off" list="{{HtmlAttributes.list}}"
    data-KeshavSoft="{{JSON2string KDatasetStuff}}" data-ksdatalistvalue="{{DefaultValue}}"
    data-DataListReverse="{{KDatasetStuff.DataListReverse}}" />
{{else}}
<input kh6 id="{{DataAttribute}}" name="{{DataAttribute}}" data-dataattribute="{{DataAttribute}}"
    value="{{DefaultValue}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
    data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" type="{{KDataset.HTMLControlType}}"
    class="{{ParentClasses.InputClass}}" min="{{KDataset.Min}}" max="{{KDataset.Max}}" step="{{KDataset.Step}}"
    placeholder="Enter {{DisplayName}}" autocomplete="off" data-KeshavSoft="{{JSON2string KDatasetStuff}}"
    value="{{DefaultValue}}" />
<div class="invalid-feedback">
    Should not be empty!
</div>
{{/if}}
{{/if}}
{{/if}}
{{/if}}
{{/if}}
{{/if}}
{{/if}}
</script>
<script id="Table/Footer/CreateNew/KTfooterCreateNewRow"  KS="KeshavSoft" type="text/x-handlebars-template">
<td style="text-align:right; display:none" class="kClassSearchSNo"></td>
<td style="text-align:right"></td>

{{#each this.KData.TableColumns as | val1 key1 |}}
{{#if ShowInTable}}
<td class="KCol-{{@index}}  {{TableClasses.ColumnClass}}" data-viewtype="{{this.ViewType}}"
    data-showtotal="{{this.ShowTotal}}" data-editable="{{array_index_Editable this.DisplayMode.Editable}}">
    {{#if CreateNew}}
    {{> Table/Footer/CreateNew/HtmlControls }}
    {{/if}}
</td>
{{/if}}
{{/each}}

{{#if this.KData.TableInfo.FooterType.SaveType.Save}}
<td class="SaveClass">
    <button onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Table.Footer.SaveFuncs.StartFunc(event)"
        type="button" class="btn btn-outline-primary">save</button>
</td>

{{/if}}

<td class="UpdateClass" style="display: none;">
    <button onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Table.Body.Row.Update({inEvent:event})" type="button" class="btn btn-outline-primary">Update</button>
</td>

<td class="UpdateSubTableClass" style="display: none;">
    <button onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Subtable.Body.Row.Update({inEvent:event})" type="button" class="btn btn-outline-success">Update</button>
</td>
</script>
<script id="Table/Footer/Show/BalanceRow"  KS="KeshavSoft" type="text/x-handlebars-template">
<tr class="table-info">
    <td style="text-align:right; display:none" class="kClassSearchSNo"></td>
    <td></td>

    {{#each this.KData.TableColumns as |val1 key1|}} {{#if val1.ShowInTable}}
    <td style="text-align:{{val1.TextAlign}}">
        {{#if val1.Footer.Show.Balance.ShowTF}}
        {{#if (IsIndianDateFormat ../KData.TableColumns key1) }}
        {{ShowInIndianDateFormatPositiveOnly (TableColumnBalance key1 ../KData.TableData ../KData.TableColumns)}}
        {{else}}
        {{TableColumnBalance key1 ../KData.TableData ../KData.TableColumns}}
        {{/if}}
        {{/if}}
    </td> {{/if}} {{/each}}
</tr>
</script>
<script id="Table/Footer"  KS="KeshavSoft" type="text/x-handlebars-template">
{{#if this.KData.TableInfo.FooterType.CreateNewRow.Show}}
<tr data-footertype="CreateNewRow" style="{{this.KData.TableInfo.FooterType.CreateNewRow.Style}}">
    {{> Table/Footer/CreateNew/KTfooterCreateNewRow }}
</tr>
{{/if}}


{{#if this.KData.TableInfo.FooterType.ShowTotals}}
<tr class="table-info">
    <td style="text-align:right; display:none" class="kClassSearchSNo"></td>
    <td>{{this.KData.TableData.length}}</td>

    {{#each this.KData.TableColumns as |val1 key1|}} {{#if val1.ShowInTable}}
    <td style="text-align:{{val1.TextAlign}}">
        {{#if val1.ShowTotal}}
        {{#if (IsIndianDateFormat ../KData.TableColumns key1) }}
        {{ShowInIndianDateFormat (TableColumnTotal key1 ../KData.TableData)}}
        {{else}}
        {{TableColumnTotal key1 ../KData.TableData}}
        {{/if}}
        {{/if}}
    </td> {{/if}} {{/each}}
</tr>
{{/if}}

{{#if this.KData.TableInfo.FooterType.ShowBalance}}
{{> Table/Footer/Show/BalanceRow}}
{{/if}}
</script>
<script id="Table/Head/KThead"  KS="KeshavSoft" type="text/x-handlebars-template">
<tr>
    <th width="5%" class="kClassSearchSNo" style="cursor:pointer; text-align:right; display:none">#</th>
    <th width="5%" style="cursor:pointer; text-align:right;">#</th>
    {{#each this.KData.TableColumns as |val1 key1|}}
    {{#if val1.ShowInTable}}
    <th class="KCol-{{@index}} kclass1 {{TableClasses.ColumnClass}}"
        width="{{TableColumnWidth  ../KData.TableColumns key1}}%" data-dataattribute="{{this.DataAttribute}}"
        data-viewtype="{{this.ViewType}}" data-showtotal="{{this.ShowTotal}}"
        data-editable="{{array_index_Editable this.DisplayMode.Editable}}"
        onclick="KeshavSoftCrud.AllFuncs.Table.Head.CellClick(event)" style="cursor: pointer;">
        {{this.DisplayName}}
        {{#if Head.Bs5UpArrow}}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-up"
            viewBox="0 0 16 16">
            <path
                d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707V12.5zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
        </svg>
        {{/if}}

        {{#if Head.Bs5DownArrow}}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-down"
            viewBox="0 0 16 16">
            <path
                d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
        </svg>
        {{/if}}
    </th>
    {{/if}} {{/each}}
</tr>
</script>
<script id="Table/KTable"  KS="KeshavSoft" type="text/x-handlebars-template">
<div class="table-responsive">
    <table class=" table KTableClass table-hover {{KData.TableInfo.ParentClasses.Table.TableClass}}"
        id="{{KData.TableInfo.TableId}}" data-KType="{{KData.TableInfo.TableKType}}"
        data-kjsonfilename="{{KData.TableInfo.TableKJsonFileName}}" data-pk="{{KData.TableInfo.DataAttributes.PK}}"
        data-queryname="{{KData.TableInfo.DataAttributes.QueryName}}" data-KGlobalIndex="{{KGlobalIndex}}"
        data-jsonType="{{KData.TableInfo.DataAttributes.JsonType}}"
        data-jsonItemName="{{KData.TableInfo.DataAttributes.JsonItemName}}"
        data-InsertKey="{{KData.TableInfo.DataAttributes.InsertKey}}"
        data-KeyAsTree="{{KData.TableInfo.DataAttributes.KeyAsTree}}"
        data-ShowType="{{KData.TableInfo.DataAttributes.ShowType}}">
        <thead>
            {{> Table/Head/KThead }}
        </thead>
        <tbody>
            {{> Table/Body/KTablebody }}
        </tbody>
        <tfoot>
            {{#if KData.TableInfo.ShowFooter}} {{> Table/Footer }} {{/if}}
        </tfoot>
    </table>
</div>
</script>
<script id="Table/KTableFromData"  KS="KeshavSoft" type="text/x-handlebars-template">
<table class=" table KTableClass table-hover">
    <thead>
        <tr>
            <th>#</th>
            {{#each this.KData.TableData.[0]}}
            <th>{{@key}}</th>
            {{/each}}
        </tr>
    </thead>
    <tbody>
        {{#each this.KData.TableData}}
        <tr>
            <td>{{array_index_sno @index}}</td>
            {{#each this}}
            <td>{{this}}</td>
            {{/each}}
        </tr>
        {{/each}}
    </tbody>
</table>
</script>
<script id="Table/KTableWithCardAndSearchRow"  KS="KeshavSoft" type="text/x-handlebars-template">
<div class="{{this.KData.TableInfo.ParentClasses.Parent3Class}}">
    {{this.KData.TableInfo.DataAttributes.ItemConfig.inItemName}}

    <div id="kcard1" class="card KTableDivClass {{KData.TableInfo.ParentClasses.Table.CardClass}}"
        data-klevel={{@index}} 
        data-localstorageid="{{KData.TableInfo.DataAttributes.localstorageid}}"
        data-localstoragearrayindex="{{KData.TableInfo.DataAttributes.localstoragearrayindex}}"
        data-jsonconfig="{{KData.TableInfo.DataAttributes.JsonConfig}}"
        data-ItemConfig="{{KData.TableInfo.DataAttributes.ItemConfig}}"
         data-pk="{{KData.TableInfo.DataAttributes.PK}}"
        data-InsertKey="{{KData.TableInfo.DataAttributes.InsertKey}}">
        <div class="card-header">
            {{> Table/Search/KSearchRow}}
        </div>
        <div class="card-body">
            {{> Table/KTable KGlobalIndex=KGlobalIndex}}
        </div>
    </div>
</div>

</script>
<script id="Table/Search/KSearchRow"  KS="KeshavSoft" type="text/x-handlebars-template">
<div class="row">
    {{#if KData.TableInfo.SearchRowArray.Label.KTF}}
    <div class="col-{{KData.TableInfo.SearchRowArray.Label.DisplayObject.ColClass}}">
        <h5 style="margin-left: 7px; margin-top:10px; text-align:left;">
            {{KData.TableInfo.SearchRowArray.Label.DisplayObject.DisplayText}}
        </h5>
    </div>
    {{/if}}
    {{#if KData.TableInfo.SearchRowArray.Search.KTF}}
    <div class="col-{{KData.TableInfo.SearchRowArray.Search.DisplayObject.ColClass}}">
        <div class="input-group">
            <span class="input-group-text text-body"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg></span>
            <input type="text" class="form-control" placeholder="Type here..."
                onkeyup="KeshavSoftCrud.AllFuncs.Table.SearchRow.SearchFuncs.SearchAllRows(event)">
        </div>
    </div>

    {{/if}}
    {{#if KData.TableInfo.SearchRowArray.SearchWithEnter.KTF}}
    <div class="col-{{KData.TableInfo.SearchRowArray.SearchWithEnter.DisplayObject.ColClass}}">
        <div class="input-group no-border">
            <span class="input-group-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-search me-2" viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
                </svg>
            </span>

            <input type="text" value="" class="form-control KClassTableSearchTxt"
                data-ServerAPIURL="{{this.KServerAPIURL}}"
                placeholder="{{KData.TableInfo.SearchRowArray.SearchWithEnter.DisplayObject.DisplayText}}"
                onkeyup="KeshavSoftCrud.AllFuncs.Table.SearchRow.SearchFuncs.SearchWithEnter(event)">

        </div>
    </div>
    {{/if}}

    {{#if KData.TableInfo.SearchRowArray.CreativeTim.SearchWithEnter.KTF}}
    <div class="col-{{KData.TableInfo.SearchRowArray.SearchWithEnter.DisplayObject.ColClass}}">
        <div class="input-group no-border">
            <input type="text" value="" class="form-control KClassTableSearchTxt"
                data-ServerAPIURL="{{this.KServerAPIURL}}"
                placeholder="{{KData.TableInfo.SearchRowArray.SearchWithEnter.DisplayObject.DisplayText}}"
                onkeyup="KeshavSoftCrud.AllFuncs.Table.SearchRow.SearchFuncs.SearchWithEnter(event)">
            <div class="input-group-append">
                <div class="input-group-text">
                    <i class="nc-icon nc-zoom-split"></i>
                </div>
            </div>
        </div>
    </div>
    {{/if}}

    {{> Table/Search/KSearchWithButtons }}
</div>
</script>
<script id="Table/Search/KSearchWithButtons"  KS="KeshavSoft" type="text/x-handlebars-template">
{{#if KData.TableInfo.SearchRowArray.Button.PrintToPrinter.Double}}
<div class="col-1 d-none d-md-block">
    <a href="#" onclick="jVarGlobalClientObject.Print.Ui.FromSearchRow({inEvent:event})"
        class="btn btn-outline-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer"
            viewBox="0 0 16 16">
            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
            <path
                d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
        </svg>
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.PrintToPrinter.Preview.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.PrintToPrinter.Preview.DisplayObject.ColClass}}">
    <a href="#" onclick="jVarGlobalClientObject.Api.UserData.Table.SearchRow.Buttons.PrintToPrinter.Preview(event)">
        <svg class="bi d-block mx-auto mb-1" width="24" height="24">
            <use xlink:href="#TablePrintId" />
        </svg>
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.Footer.WithApi.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.Footer.WithApi.DisplayObject.ColClass}}">
    <a href="#" onclick="jVarGlobalClientObject.Api.UserData.Table.SearchRow.CreateNew.Footer(event)"
        title="Add new row in the table footer" class="btn btn-outline-primary">
        {{> Bs5/Icons/Svg this.KData.TableInfo.SearchRowArray.Button.Footer.WithApi.DisplayObject}}
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.NewWindow.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.NewWindow.DisplayObject.ColClass}}">
    <a href="#" onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Table.Card.Header.AddButtonClick(event)"
        title="Add new row in new window as Vertical" class="btn btn-outline-primary">
        {{> Bs5/Icons/Svg this.KData.TableInfo.SearchRowArray.Button.NewWindow.DisplayObject}}
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.PopUp.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.PopUp.DisplayObject.ColClass}}">
    <a href="#" onclick="jFPopUpCreateNew({ inEvent :event})" title="Add new row in PopUp as Vertical"
        class="btn btn-outline-primary">
        {{> Bs5/Icons/Svg this.KData.TableInfo.SearchRowArray.Button.PopUp.DisplayObject}}
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.FromHtml.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.FromHtml.DisplayObject.ColClass}}">
    <a href="#" onclick="jFCreateNewFromHtml({ inEvent :event})" class="btn btn-outline-primary">
        {{> Bs5/Icons/Svg this.KData.TableInfo.SearchRowArray.Button.FromHtml.DisplayObject}}
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.Scrollable.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.Scrollable.DisplayObject.ColClass}}">
    <div class="form-check form-switch">
        <input onclick="KeshavSoftCrud.AllFuncs.Table.SearchRow.Scrollable.Click(event)" class="form-check-input"
            type="checkbox" id="flexSwitchCheckDefault">
        <label class="form-check-label" for="flexSwitchCheckDefault">Scrollable</label>
    </div>
</div>
{{/if}}

<div class="col-1 d-none d-md-block">
    <a href="#" onclick="exportTableToCSV()" title="Export data from table to CSV" class="btn btn-outline-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-explicit"
            viewBox="0 0 16 16">
            <path d="M6.826 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826v2.408Z" />
            <path
                d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0h-11ZM1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5v-11Z" />
        </svg>
    </a>
</div>

<div class="col-1 d-none d-md-block">
    <a href="#" onclick="KeshavSoftCrud.AllFuncs.Table.SearchRow.Buttons.Refresh.OnClick({inEvent:event, inJsonConfig:'{{this.KData.TableInfo.DataAttributes.JsonConfig}}',inItemConfig:'{{this.KData.TableInfo.DataAttributes.ItemConfig}}' })" title="Export data from table to CSV" class="btn btn-outline-primary">
    
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
            <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
          </svg>
    </a>
</div>
</script>
<script id="Vertical/KPopUp"  KS="KeshavSoft" type="text/x-handlebars-template">
<div class="card KTableDivClass" data-pk="{{KData.TableInfo.PK}}"
    data-KeyAsTree="{{KData.TableInfo.DataAttributes.KeyAsTree}}"
    data-jsonconfig="{{KData.TableInfo.DataAttributes.JsonConfig}}"
    data-ItemConfig="{{KData.TableInfo.DataAttributes.ItemConfig}}"
    data-InsertKey="{{KData.TableInfo.DataAttributes.InsertKey}}">
    <div class="card-header">
        {{#if KData.TableInfo.SearchRowArray.Label.KTF}}
        <h4>{{KData.TableInfo.SearchRowArray.Label.DisplayObject.DisplayText}}</h4>
        {{/if}}
    </div>
    <div class="card-body KCardBody">
        {{> Vertical/KVertical/CardBody}}
    </div>
    <div class="card-footer">
        <div class="row">
            {{#if KData.TableInfo.Vertical.VerticalCreate.saveFromKeyAsTree}}
            <div class="col">
                <button
                    onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Table.PopUp.SaveFuncs.StartFunc(event)"
                    type="button" class="btn btn-primary">Save New</button>
            </div>
            {{/if}}

            <div class="col visually-hidden">
                <div id="ShowSuccess" class="alert alert-success alert-dismissible fade show">
                    <button type="button" aria-hidden="true" class="close" data-dismiss="alert" aria-label="Close">
                        <i class="nc-icon nc-simple-remove"></i>
                    </button>
                    <span><b> Saved </b> successfully </span>
                </div>
            </div>

            <div id="ShowFailure" class="col visually-hidden">
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Duplicate!</strong> Unsuccessfull.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>
    </div>
</div>
</script>
<script id="Vertical/KPopUpForSubTable"  KS="KeshavSoft" type="text/x-handlebars-template">
<div class="card KTableDivClass" data-pk="{{KData.TableInfo.DataAttributes.PK}}"
    data-KeyAsTree="{{KData.TableInfo.DataAttributes.KeyAsTree}}"
    data-jsonconfig="{{KData.TableInfo.DataAttributes.JsonConfig}}"
    data-ItemConfig="{{KData.TableInfo.DataAttributes.ItemConfig}}"
    data-InsertKey="{{KData.TableInfo.DataAttributes.InsertKey}}">
    <div class="card-header">
        {{#if KData.TableInfo.SearchRowArray.Label.KTF}}
        <h4>{{KData.TableInfo.SearchRowArray.Label.DisplayObject.DisplayText}}</h4>
        {{/if}}
    </div>
    <div class="card-body KCardBody">
        {{> Vertical/KVertical/CardBody}}
    </div>
    <div class="card-footer">   
        <div class="row">
            {{#if KData.TableInfo.Vertical.VerticalCreate.saveFromKeyAsTree}}
            <div class="col">
                <button
                    onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Subtable.PopUp.SaveFuncs.StartFunc(event)"
                    type="button" class="btn btn-primary">Save New</button>
            </div>
            {{/if}}

            <div class="col visually-hidden">
                <div id="ShowSuccess" class="alert alert-success alert-dismissible fade show">
                    <button type="button" aria-hidden="true" class="close" data-dismiss="alert" aria-label="Close">
                        <i class="nc-icon nc-simple-remove"></i>
                    </button>
                    <span><b> Saved </b> successfully </span>
                </div>
            </div>

            <div id="ShowFailure" class="col visually-hidden">
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Duplicate!</strong> Unsuccessfull.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>
    </div>
</div>
</script>
<script id="Vertical/KVertical/CardBody/HtmlControls"  KS="KeshavSoft" type="text/x-handlebars-template">
<div class="{{ParentClasses.Parent1Class}}">
    {{#if IsTextArea}}
    <textarea kv7 id="{{DataAttribute}}" name="{{DataAttribute}}" data-dataattribute="{{DataAttribute}}"
        class="form-control" placeholder="Enter {{DisplayName}}" autocomplete="off" value="{{DefaultValue}}"
        style="{{HtmlAttributes.style}}" rows="4" cols="20">
    </textarea>
    {{else}}
    {{#if IsSelect}}
    <select name="{{DataAttribute}}" id="{{DataAttribute}}" class="form-select KeshavSoftSelect"
        data-klist="{{HtmlAttributes.list}}" data-kDefaultValue="{{DefaultValue}}"
        data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
        onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.EnterOnClient({inEvent:event})"
        data-KeshavSoft="{{JSON2string KDatasetStuff}}">
    </select>
    {{else}}
    {{#if EnterToServer}}
    <input kv1 id="{{DataAttribute}}" name="{{DataAttribute}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
        data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-dataattribute="{{DataAttribute}}" type="text"
        class="form-control KeshavSoft KeshavSoftEnterToServer" value="{{DefaultValue}}" data-KeshavSoft="{{JSON2string KDatasetStuff}}"
        autocomplete="off" list="{{HtmlAttributes.list}}"
        data-DataListReverse="{{KDatasetStuff.DataListReverse}}" data-ksdatalistvalue="{{DefaultValue}}" />
    {{else}}
    {{#if KDataAttributes.onkeypress}}
    <input kVertical2 id="{{DataAttribute}}" name="{{DataAttribute}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
        data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-dataattribute="{{DataAttribute}}"
        onkeypress="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Vertical.KeyPress.EnterOnClient({ inEvent:event })"
        type="text" class="form-control KeshavSoftonkeypress" value="{{DefaultValue}}"
        placeholder="" autocomplete="off" list="{{HtmlAttributes.list}}"
        data-KeshavSoft="{{JSON2string KDatasetStuff}}" />
    {{else}}
    {{#if KDataAttributes.CustomDataList}}
    <input kv3 id="{{DataAttribute}}" name="{{DataAttribute}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
        data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-dataattribute="{{DataAttribute}}"
        onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.EnterOnClient({ inEvent:event })"
        type="text" class="form-control KeshavSoftonkeypress" value="{{DefaultValue}}"
        onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.EnterToServer({inEvent:event})"
        placeholder="" autocomplete="off" list="{{DataAttribute}}-datalist"
        data-KeshavSoft="{{JSON2string KDatasetStuff}}" />
    <datalist id="{{DataAttribute}}-datalist">
    </datalist>
    {{else}}
    {{#if SaveOnEnter}}
    <input kv4 id="{{DataAttribute}}" name="{{DataAttribute}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
        data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-dataattribute="{{DataAttribute}}"
        onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.SaveOnEnter({ inEvent:event })"
        type="text" class="form-control KeshavSoftSaveOnEnter" placeholder="" autocomplete="off"
        list="{{HtmlAttributes.list}}" />
    {{else}}
    {{#if HtmlAttributes.KTF}}
    <input kv5 id="{{DataAttribute}}" name="{{DataAttribute}}" data-dataattribute="{{DataAttribute}}"
        value="{{DefaultValue}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
        data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" type="{{KDataset.HTMLControlType}}"
        class="{{ParentClasses.InputClass}} KeshavSoftHtmlAttributes" min="{{KDataset.Min}}" max="{{KDataset.Max}}"
        step="{{KDataset.Step}}" placeholder="Enter {{DisplayName}}" autocomplete="off" list="{{HtmlAttributes.list}}"
        data-KeshavSoft="{{JSON2string KDatasetStuff}}" data-ksdatalistvalue="{{DefaultValue}}"
        data-DataListReverse="{{KDatasetStuff.DataListReverse}}" />
    {{else}}
    <input kv6 id="{{DataAttribute}}" name="{{DataAttribute}}" data-dataattribute="{{DataAttribute}}"
        value="{{DefaultValue}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
        data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" type="{{KDataset.HTMLControlType}}"
        class="{{ParentClasses.InputClass}}" min="{{KDataset.Min}}" max="{{KDataset.Max}}" step="{{KDataset.Step}}"
        placeholder="Enter {{DisplayName}}" autocomplete="off" data-KeshavSoft="{{JSON2string KDatasetStuff}}"
        value="{{DefaultValue}}" />
    <div class="invalid-feedback">
        Should not be empty!
    </div>
    {{/if}}
    {{/if}}
    {{/if}}
    {{/if}}
    {{/if}}
    {{/if}}
    {{/if}}

</div>
</script>
<script id="Vertical/KVertical/CardBody"  KS="KeshavSoft" type="text/x-handlebars-template">
<form href="#" class="form-horizontal needs-validation" id="kform1"
    data-jsonconfig="{{KData.TableInfo.DataAttributes.JsonConfig}}"
    data-ItemConfig="{{KData.TableInfo.DataAttributes.ItemConfig}}"
    data-InsertKey="{{KData.TableInfo.DataAttributes.InsertKey}}" data-pk="{{KData.TableInfo.DataAttributes.PK}}"
    onsubmit="return false" novalidate>
    <div class="row">
        {{#each KData.TableColumns}} {{#if CreateNew}}
        <div class="{{this.ParentClasses.Parent3Class}}">
            <label class="{{this.ParentClasses.Parent2Class}} col-form-label">{{DisplayName}}</label>
            {{> Vertical/KVertical/CardBody/HtmlControls}}
        </div>
        {{/if}} {{/each}}
    </div>
</form>
</script>
<script id="Vertical/KVertical/CardHeader/Search/KSearchRow"  KS="KeshavSoft" type="text/x-handlebars-template">
<div class="row">
    {{#if KData.TableInfo.SearchRowArray.Label.KTF}}
    <div class="col-{{KData.TableInfo.SearchRowArray.Label.DisplayObject.ColClass}}">
        <h5 style="margin-left: 7px; margin-top:10px; text-align:left;">
            {{KData.TableInfo.SearchRowArray.Label.DisplayObject.DisplayText}}
        </h5>

    </div>
    {{/if}}

    {{> Vertical/KVertical/CardHeader/Search/KSearchWithButtons}}
</div>
</script>
<script id="Vertical/KVertical/CardHeader/Search/KSearchWithButtons"  KS="KeshavSoft" type="text/x-handlebars-template">
{{#if KData.TableInfo.SearchRowArray.Button.PrintToPrinter.Double}}
<div class="col-1 d-none d-md-block">
    <a href="#" onclick="jVarGlobalClientObject.Print.Ui.FromSearchRow({inEvent:event})"
        class="btn btn-outline-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer"
            viewBox="0 0 16 16">
            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
            <path
                d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
        </svg>
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.PrintToPrinter.Preview.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.PrintToPrinter.Preview.DisplayObject.ColClass}}">
    <a href="#" onclick="jVarGlobalClientObject.Api.UserData.Table.SearchRow.Buttons.PrintToPrinter.Preview(event)">
        <svg class="bi d-block mx-auto mb-1" width="24" height="24">
            <use xlink:href="#TablePrintId" />
        </svg>
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.Footer.WithApi.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.Footer.WithApi.DisplayObject.ColClass}}">
    <a href="#" onclick="jVarGlobalClientObject.Api.UserData.Table.SearchRow.CreateNew.Footer(event)"
        title="Add new row in the table footer" class="btn btn-outline-primary">
        {{> Bs5/Icons/Svg this.KData.TableInfo.SearchRowArray.Button.Footer.WithApi.DisplayObject}}
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.NewWindow.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.NewWindow.DisplayObject.ColClass}}">
    <a href="#" onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Table.Card.Header.AddButtonClick(event)"
        title="Add new row in new window as Vertical" class="btn btn-outline-primary">
        {{> Bs5/Icons/Svg this.KData.TableInfo.SearchRowArray.Button.NewWindow.DisplayObject}}
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.PopUp.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.PopUp.DisplayObject.ColClass}}">
    <a href="#" onclick="jFPopUpCreateNew({ inEvent :event})" title="Add new row in PopUp as Vertical"
        class="btn btn-outline-primary">
        {{> Bs5/Icons/Svg this.KData.TableInfo.SearchRowArray.Button.PopUp.DisplayObject}}
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.FromHtml.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.FromHtml.DisplayObject.ColClass}}">
    <a href="#" onclick="jFCreateNewFromHtml({ inEvent :event})" class="btn btn-outline-primary">
        {{> Bs5/Icons/Svg this.KData.TableInfo.SearchRowArray.Button.FromHtml.DisplayObject}}
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.Scrollable.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.Scrollable.DisplayObject.ColClass}}">
    <div class="form-check form-switch">
        <input onclick="KeshavSoftCrud.AllFuncs.Table.SearchRow.Scrollable.Click(event)" class="form-check-input"
            type="checkbox" id="flexSwitchCheckDefault">
        <label class="form-check-label" for="flexSwitchCheckDefault">Scrollable</label>
    </div>
</div>
{{/if}}

</script>
<script id="Vertical/KVertical"  KS="KeshavSoft" type="text/x-handlebars-template">
<div KVertical class="card KTableDivClass d-print-none" data-pk="{{KData.TableInfo.PK}}"
    data-KeyAsTree="{{KData.TableInfo.DataAttributes.KeyAsTree}}"
    data-jsonconfig="{{KData.TableInfo.DataAttributes.JsonConfig}}"
    data-ItemConfig="{{KData.TableInfo.DataAttributes.ItemConfig}}"
    data-InsertKey="{{KData.TableInfo.DataAttributes.InsertKey}}">
    <div class="card-header">
        {{> Vertical/KVertical/CardHeader/Search/KSearchRow}}
    </div>
    <div class="card-body KCardBody">
        {{> Vertical/KVertical/CardBody}}
    </div>
    <div class="card-footer">
        <div class="row">
            {{#if KData.TableInfo.Vertical.VerticalCreate.saveFromKeyAsTree}}
            <div class="col">
                <button type="button" class="btn btn-success KVerticalFooterSaveButtonClass">Save New</button>
            </div>
            {{/if}}

            <div class="col visually-hidden">

                <div id="ShowSuccess" class="alert alert-success alert-dismissible fade show">
                    <button type="button" aria-hidden="true" class="close" data-dismiss="alert" aria-label="Close">
                        <i class="nc-icon nc-simple-remove"></i>
                    </button>
                    <span><b> Saved </b> successfully </span>
                </div>
            </div>

            <div id="ShowFailure" class="col visually-hidden">
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Duplicate!</strong> Unsuccessfull.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col visually-hidden WarningAlertColumn">
                <div class="alert alert-warning fade show" role="alert">
                    <strong>Warning!</strong>
                    <p> Updated data on the server.</p>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>
    </div>
</div>
</script>
<script id="Vertical/KVerticalForShow"  KS="KeshavSoft" type="text/x-handlebars-template">
<div class="{{KData.TableInfo.ParentClasses.Parent3Class}}">
    <div KVerticalForShow class="card KTableDivClass d-print-none" data-pk="{{KData.TableInfo.kPK}}"
        data-KeyAsTree="{{KData.TableInfo.DataAttributes.KeyAsTree}}"
        data-jsonconfig="{{KData.TableInfo.DataAttributes.JsonConfig}}"
        data-ItemConfig="{{KData.TableInfo.DataAttributes.ItemConfig}}"
        data-InsertKey="{{KData.TableInfo.DataAttributes.InsertKey}}">
        <div class="card-header ">
            {{> Vertical/KVertical/CardHeader/Search/KSearchRow}}
        </div>
        <div class="card-body KCardBody">
            <form class="form-horizontal" id="kform1">
                <fieldset disabled>
                    {{> Vertical/KVertical/CardBody}}
                </fieldset>
            </form>
        </div>
        <div class="card-footer">
            <div class="row">
                <div class="col-1 visually-hidden UpdateButtonColumn">
                    <button class="btn btn-outline-primary UpdateButton KeshavSoftUpdateButtonClickClass"
                     type="button">
                        Update</button>
                </div>
                <div class="col-1 EditButtonColumn">
                    <button class="btn btn-outline-primary EditButton KeshavSoftButtonClickClass"
                     type="button"><svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path
                                d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                        </svg></button>
                </div>

                <div class="col-1 offset-md-10 offset-9">
                    <button class="btn btn-outline-primary" type="button"
                        onclick="JVarGlobalAPICalls.Vertical.Delete.jFDeletes({inEvent:event})"><svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-trash" viewBox="0 0 16 16">
                            <path
                                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fill-rule="evenodd"
                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg></button>
                </div>
            </div>
            <div class="row">
                <div class="col visually-hidden SuccessAlertColumn">
                    <div class="alert alert-warning fade show" role="alert">
                        <strong>Success!</strong> Updated data on the server.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col visually-hidden WarningAlertColumn">
                    <div class="alert alert-warning fade show" role="alert">
                        <strong>Warning!</strong>
                        <p> Updated data on the server.</p>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</script>
<script id="VerticalToShow/KPopUp"  KS="KeshavSoft" type="text/x-handlebars-template">
<div class="card KTableDivClass" data-pk="{{KData.TableInfo.PK}}"
    data-KeyAsTree="{{KData.TableInfo.DataAttributes.KeyAsTree}}"
    data-jsonconfig="{{KData.TableInfo.DataAttributes.JsonConfig}}"
    data-ItemConfig="{{KData.TableInfo.DataAttributes.ItemConfig}}"
    data-InsertKey="{{KData.TableInfo.DataAttributes.InsertKey}}">
    <div class="card-header">
        {{#if KData.TableInfo.SearchRowArray.Label.KTF}}
        <h4>{{KData.TableInfo.SearchRowArray.Label.DisplayObject.DisplayText}}</h4>
        {{/if}}
    </div>
    <div class="card-body KCardBody">
        {{> Vertical/KVertical/CardBody}}
    </div>
    <div class="card-footer">
        <div class="row">
            {{#if KData.TableInfo.Vertical.VerticalCreate.saveFromKeyAsTree}}
            <div class="col">
                <button
                    onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Table.PopUp.SaveFuncs.StartFunc(event)"
                    type="button" class="btn btn-primary">Save New</button>
            </div>
            {{/if}}

            <div class="col visually-hidden">
                <div id="ShowSuccess" class="alert alert-success alert-dismissible fade show">
                    <button type="button" aria-hidden="true" class="close" data-dismiss="alert" aria-label="Close">
                        <i class="nc-icon nc-simple-remove"></i>
                    </button>
                    <span><b> Saved </b> successfully </span>
                </div>
            </div>

            <div id="ShowFailure" class="col visually-hidden">
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Duplicate!</strong> Unsuccessfull.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>
    </div>
</div>
</script>
<script id="VerticalToShow/KPopUpForSubTable"  KS="KeshavSoft" type="text/x-handlebars-template">
<div class="card KTableDivClass" data-pk="{{KData.TableInfo.DataAttributes.PK}}"
    data-KeyAsTree="{{KData.TableInfo.DataAttributes.KeyAsTree}}"
    data-jsonconfig="{{KData.TableInfo.DataAttributes.JsonConfig}}"
    data-ItemConfig="{{KData.TableInfo.DataAttributes.ItemConfig}}"
    data-InsertKey="{{KData.TableInfo.DataAttributes.InsertKey}}">
    <div class="card-header">
        {{#if KData.TableInfo.SearchRowArray.Label.KTF}}
        <h4>{{KData.TableInfo.SearchRowArray.Label.DisplayObject.DisplayText}}</h4>
        {{/if}}
    </div>
    <div class="card-body KCardBody">
        {{> Vertical/KVertical/CardBody}}
    </div>
    <div class="card-footer">   
        <div class="row">
            {{#if KData.TableInfo.Vertical.VerticalCreate.saveFromKeyAsTree}}
            <div class="col">
                <button
                    onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Subtable.PopUp.SaveFuncs.StartFunc(event)"
                    type="button" class="btn btn-primary">Save New</button>
            </div>
            {{/if}}

            <div class="col visually-hidden">
                <div id="ShowSuccess" class="alert alert-success alert-dismissible fade show">
                    <button type="button" aria-hidden="true" class="close" data-dismiss="alert" aria-label="Close">
                        <i class="nc-icon nc-simple-remove"></i>
                    </button>
                    <span><b> Saved </b> successfully </span>
                </div>
            </div>

            <div id="ShowFailure" class="col visually-hidden">
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Duplicate!</strong> Unsuccessfull.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>
    </div>
</div>
</script>
<script id="VerticalToShow/KVertical/CardBody/HtmlControls"  KS="KeshavSoft" type="text/x-handlebars-template">
<div class="{{ParentClasses.Parent1Class}}">
    {{#if IsTextArea}}
    <textarea kv7 id="{{DataAttribute}}" name="{{DataAttribute}}" data-dataattribute="{{DataAttribute}}"
        class="form-control" placeholder="Enter {{DisplayName}}" autocomplete="off" value="{{DefaultValue}}"
        style="{{HtmlAttributes.style}}" rows="4" cols="20">
    </textarea>
    {{else}}
    {{#if IsSelect}}
    <select name="{{DataAttribute}}" id="{{DataAttribute}}" class="form-select KeshavSoftSelect"
        data-klist="{{HtmlAttributes.list}}" data-kDefaultValue="{{DefaultValue}}"
        data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
        onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.EnterOnClient({inEvent:event})"
        data-KeshavSoft="{{JSON2string KDatasetStuff}}">
    </select>
    {{else}}
    {{#if EnterToServer}}
    <input kv1 id="{{DataAttribute}}" name="{{DataAttribute}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
        data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-dataattribute="{{DataAttribute}}" type="text"
        class="form-control KeshavSoft" value="{{DefaultValue}}" data-KeshavSoft="{{JSON2string KDatasetStuff}}"
        onkeypress="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Vertical.KeyPress.EnterToServer({inEvent:event})"
        placeholder="" autocomplete="off" list="{{HtmlAttributes.list}}"
        data-DataListReverse="{{KDatasetStuff.DataListReverse}}" data-ksdatalistvalue="{{DefaultValue}}" />
    {{else}}
    {{#if KDataAttributes.onkeypress}}
    <input kVertical2 id="{{DataAttribute}}" name="{{DataAttribute}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
        data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-dataattribute="{{DataAttribute}}"
        onkeypress="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Vertical.KeyPress.EnterOnClient({ inEvent:event })"
        type="text" class="form-control KeshavSoftonkeypress" value="{{DefaultValue}}"
        placeholder="" autocomplete="off" list="{{HtmlAttributes.list}}"
        data-KeshavSoft="{{JSON2string KDatasetStuff}}" />
    {{else}}
    {{#if KDataAttributes.CustomDataList}}
    <input kv3 id="{{DataAttribute}}" name="{{DataAttribute}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
        data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-dataattribute="{{DataAttribute}}"
        onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.EnterOnClient({ inEvent:event })"
        type="text" class="form-control KeshavSoftonkeypress" value="{{DefaultValue}}"
        onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.EnterToServer({inEvent:event})"
        placeholder="" autocomplete="off" list="{{DataAttribute}}-datalist"
        data-KeshavSoft="{{JSON2string KDatasetStuff}}" />
    <datalist id="{{DataAttribute}}-datalist">
    </datalist>
    {{else}}
    {{#if SaveOnEnter}}
    <input kv4 id="{{DataAttribute}}" name="{{DataAttribute}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
        data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" data-dataattribute="{{DataAttribute}}"
        onkeypress="jVarGlobalClientObject.Api.UserData.Table.Footer.KeyPress.SaveOnEnter({ inEvent:event })"
        type="text" class="form-control KeshavSoftSaveOnEnter" placeholder="" autocomplete="off"
        list="{{HtmlAttributes.list}}" />
    {{else}}
    {{#if HtmlAttributes.KTF}}
    <input kv5 id="{{DataAttribute}}" name="{{DataAttribute}}" data-dataattribute="{{DataAttribute}}"
        value="{{DefaultValue}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
        data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" type="{{KDataset.HTMLControlType}}"
        class="{{ParentClasses.InputClass}} KeshavSoftHtmlAttributes" min="{{KDataset.Min}}" max="{{KDataset.Max}}"
        step="{{KDataset.Step}}" placeholder="Enter {{DisplayName}}" autocomplete="off" list="{{HtmlAttributes.list}}"
        data-KeshavSoft="{{JSON2string KDatasetStuff}}" data-ksdatalistvalue="{{DefaultValue}}"
        data-DataListReverse="{{KDatasetStuff.DataListReverse}}" />
    {{else}}
    <input kv6 id="{{DataAttribute}}" name="{{DataAttribute}}" data-dataattribute="{{DataAttribute}}"
        value="{{DefaultValue}}" data-ClientEval="{{KDataAttributes.ClientEval}}"
        data-EnterOnClient="{{KDataAttributes.EnterOnClient}}" type="{{KDataset.HTMLControlType}}"
        class="{{ParentClasses.InputClass}}" min="{{KDataset.Min}}" max="{{KDataset.Max}}" step="{{KDataset.Step}}"
        placeholder="Enter {{DisplayName}}" autocomplete="off" data-KeshavSoft="{{JSON2string KDatasetStuff}}"
        value="{{DefaultValue}}" />
    <div class="invalid-feedback">
        Should not be empty!
    </div>
    {{/if}}
    {{/if}}
    {{/if}}
    {{/if}}
    {{/if}}
    {{/if}}
    {{/if}}

</div>
</script>
<script id="VerticalToShow/KVertical/CardBody"  KS="KeshavSoft" type="text/x-handlebars-template">
<form href="#" class="form-horizontal needs-validation" id="kform1"
    data-jsonconfig="{{KData.TableInfo.DataAttributes.JsonConfig}}"
    data-ItemConfig="{{KData.TableInfo.DataAttributes.ItemConfig}}"
    data-InsertKey="{{KData.TableInfo.DataAttributes.InsertKey}}" data-pk="{{KData.TableInfo.DataAttributes.PK}}"
    onsubmit="return false" novalidate>
    <div class="row">
        {{#each KData.TableColumns}} {{#if CreateNew}}
        <div class="{{this.ParentClasses.Parent3Class}}">
            <label class="{{this.ParentClasses.Parent2Class}} col-form-label">{{DisplayName}}</label>
            {{> Vertical/KVertical/CardBody/HtmlControls}}
        </div>
        {{/if}} {{/each}}
    </div>
</form>
</script>
<script id="VerticalToShow/KVertical/CardHeader/Search/KSearchRow"  KS="KeshavSoft" type="text/x-handlebars-template">
<div class="row">
    {{#if KData.TableInfo.SearchRowArray.Label.KTF}}
    <div class="col-{{KData.TableInfo.SearchRowArray.Label.DisplayObject.ColClass}}">
        <h5 style="margin-left: 7px; margin-top:10px; text-align:left;">
            {{KData.TableInfo.SearchRowArray.Label.DisplayObject.DisplayText}}
        </h5>

    </div>
    {{/if}}

    {{> Vertical/KVertical/CardHeader/Search/KSearchWithButtons}}
</div>
</script>
<script id="VerticalToShow/KVertical/CardHeader/Search/KSearchWithButtons"  KS="KeshavSoft" type="text/x-handlebars-template">
{{#if KData.TableInfo.SearchRowArray.Button.PrintToPrinter.Double}}
<div class="col-1 d-none d-md-block">
    <a href="#" onclick="jVarGlobalClientObject.Print.Ui.FromSearchRow({inEvent:event})"
        class="btn btn-outline-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer"
            viewBox="0 0 16 16">
            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
            <path
                d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
        </svg>
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.PrintToPrinter.Preview.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.PrintToPrinter.Preview.DisplayObject.ColClass}}">
    <a href="#" onclick="jVarGlobalClientObject.Api.UserData.Table.SearchRow.Buttons.PrintToPrinter.Preview(event)">
        <svg class="bi d-block mx-auto mb-1" width="24" height="24">
            <use xlink:href="#TablePrintId" />
        </svg>
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.Footer.WithApi.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.Footer.WithApi.DisplayObject.ColClass}}">
    <a href="#" onclick="jVarGlobalClientObject.Api.UserData.Table.SearchRow.CreateNew.Footer(event)"
        title="Add new row in the table footer" class="btn btn-outline-primary">
        {{> Bs5/Icons/Svg this.KData.TableInfo.SearchRowArray.Button.Footer.WithApi.DisplayObject}}
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.NewWindow.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.NewWindow.DisplayObject.ColClass}}">
    <a href="#" onclick="jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.Table.Card.Header.AddButtonClick(event)"
        title="Add new row in new window as Vertical" class="btn btn-outline-primary">
        {{> Bs5/Icons/Svg this.KData.TableInfo.SearchRowArray.Button.NewWindow.DisplayObject}}
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.PopUp.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.PopUp.DisplayObject.ColClass}}">
    <a href="#" onclick="jFPopUpCreateNew({ inEvent :event})" title="Add new row in PopUp as Vertical"
        class="btn btn-outline-primary">
        {{> Bs5/Icons/Svg this.KData.TableInfo.SearchRowArray.Button.PopUp.DisplayObject}}
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.FromHtml.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.FromHtml.DisplayObject.ColClass}}">
    <a href="#" onclick="jFCreateNewFromHtml({ inEvent :event})" class="btn btn-outline-primary">
        {{> Bs5/Icons/Svg this.KData.TableInfo.SearchRowArray.Button.FromHtml.DisplayObject}}
    </a>
</div>
{{/if}}

{{#if KData.TableInfo.SearchRowArray.Button.Scrollable.KTF}}
<div class="col-{{KData.TableInfo.SearchRowArray.Button.Scrollable.DisplayObject.ColClass}}">
    <div class="form-check form-switch">
        <input onclick="KeshavSoftCrud.AllFuncs.Table.SearchRow.Scrollable.Click(event)" class="form-check-input"
            type="checkbox" id="flexSwitchCheckDefault">
        <label class="form-check-label" for="flexSwitchCheckDefault">Scrollable</label>
    </div>
</div>
{{/if}}

</script>
<script id="VerticalToShow/KVertical"  KS="KeshavSoft" type="text/x-handlebars-template">
<div KVertical class="card KTableDivClass d-print-none" data-pk="{{KData.TableInfo.PK}}"
    data-KeyAsTree="{{KData.TableInfo.DataAttributes.KeyAsTree}}"
    data-jsonconfig="{{KData.TableInfo.DataAttributes.JsonConfig}}"
    data-ItemConfig="{{KData.TableInfo.DataAttributes.ItemConfig}}"
    data-InsertKey="{{KData.TableInfo.DataAttributes.InsertKey}}">
    <div class="card-header">
        {{> Vertical/KVertical/CardHeader/Search/KSearchRow}}
    </div>
    <div class="card-body KCardBody">
        {{> Vertical/KVertical/CardBody}}
    </div>
    <div class="card-footer">
        <div class="row">
            {{#if KData.TableInfo.Vertical.VerticalCreate.saveFromKeyAsTree}}
            <div class="col">
                <button type="button" class="btn btn-success KVerticalFooterSaveButtonClass">Save New</button>
            </div>
            {{/if}}

            <div class="col visually-hidden">

                <div id="ShowSuccess" class="alert alert-success alert-dismissible fade show">
                    <button type="button" aria-hidden="true" class="close" data-dismiss="alert" aria-label="Close">
                        <i class="nc-icon nc-simple-remove"></i>
                    </button>
                    <span><b> Saved </b> successfully </span>
                </div>
            </div>

            <div id="ShowFailure" class="col visually-hidden">
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Duplicate!</strong> Unsuccessfull.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col visually-hidden WarningAlertColumn">
                <div class="alert alert-warning fade show" role="alert">
                    <strong>Warning!</strong>
                    <p> Updated data on the server.</p>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>
    </div>
</div>
</script>
<script id="VerticalToShow/KVerticalForShow"  KS="KeshavSoft" type="text/x-handlebars-template">
<div class="{{KData.TableInfo.ParentClasses.Parent3Class}}">
    <div KVerticalForShow class="card KTableDivClass d-print-none" data-pk="{{KData.TableInfo.kPK}}"
        data-KeyAsTree="{{KData.TableInfo.DataAttributes.KeyAsTree}}"
        data-jsonconfig="{{KData.TableInfo.DataAttributes.JsonConfig}}"
        data-ItemConfig="{{KData.TableInfo.DataAttributes.ItemConfig}}"
        data-InsertKey="{{KData.TableInfo.DataAttributes.InsertKey}}">
        <div class="card-header ">
            {{> Vertical/KVertical/CardHeader/Search/KSearchRow}}
        </div>
        <div class="card-body KCardBody">
            <form class="form-horizontal" id="kform1">
                <fieldset disabled>
                    {{> Vertical/KVertical/CardBody}}
                </fieldset>
            </form>
        </div>
        <div class="card-footer">
            <div class="row">
                <div class="col-1 visually-hidden UpdateButtonColumn">
                    <button class="btn btn-outline-primary UpdateButton KeshavSoftUpdateButtonClickClass"
                     type="button">
                        Update</button>
                </div>
                <div class="col-1 EditButtonColumn">
                    <button class="btn btn-outline-primary EditButton KeshavSoftButtonClickClass"
                     type="button"><svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path
                                d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                        </svg></button>
                </div>

                <div class="col-1 offset-md-10 offset-9">
                    <button class="btn btn-outline-primary" type="button"
                        onclick="JVarGlobalAPICalls.Vertical.Delete.jFDeletes({inEvent:event})"><svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-trash" viewBox="0 0 16 16">
                            <path
                                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fill-rule="evenodd"
                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg></button>
                </div>
            </div>
            <div class="row">
                <div class="col visually-hidden SuccessAlertColumn">
                    <div class="alert alert-warning fade show" role="alert">
                        <strong>Success!</strong> Updated data on the server.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col visually-hidden WarningAlertColumn">
                    <div class="alert alert-warning fade show" role="alert">
                        <strong>Warning!</strong>
                        <p> Updated data on the server.</p>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</script>
