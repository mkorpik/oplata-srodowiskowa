Ext.define('Oplaty.components.main.report.ReportController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.report',

    onGenerateReport: function (combo, record) {
        var me = this,
        companyId = this.getActiveCompanyId(),
        periodId = this.getActivePeriodId(),
        voivodshipId = this.getVoivodshipId();
        window.open('http://report.oplata-srodowiskowa.pl/pdf.php?company='+companyId+'&period='+periodId+'&voivodship='+voivodshipId);
        // Ext.Ajax.request({
        //     url: 'http://report.oplaty-gui.pl/pdf.php',
        //     params: {
        //         "company": companyId,
        //         "period": periodId,
        //         "voivodship":voivodshipId
        //     },
        //     method: 'GET',
        //     success: function (response) {
        //         var result = Ext.decode(response.responseText);
        //         me.downloadFile(result.data, 'application/pdf', result.fileName);                
        //     }
        // });        

    },

    getActiveCompanyId: function () {
        return this.getView().lookupViewModel().get('activeCompanyId');
    },

    getActivePeriodId: function () {
        return this.getView().lookupViewModel().get('activePeriodId');
    },    

    getVoivodshipId: function () {
        return this.getView().lookupViewModel().get('reportVoivodshipId');
    },

    downloadFile: function (data, type, filename) {
        var byteCharacters = atob(data),
            byteNumbers = [];
        for (var i = 0; i < byteCharacters.length; i++) {
            byteNumbers.push(byteCharacters.charCodeAt(i));
        }
        var byteArray = new Uint8Array(byteNumbers),
            blob = new Blob([byteArray], {type: type});
        if (typeof window.navigator.msSaveBlob !== 'undefined') {
            // IE workaround for "HTML7007: One or more blob URLs were revoked by closing
            // the blob for which they were created These URLs will no longer resolve as the data
            // backing the URL has been freed."
            window.navigator.msSaveBlob(blob, filename);
        }
        else {
            var URL = window.URL || window.webkitURL;
            var downloadUrl = URL.createObjectURL(blob);
            if (filename) {
                // use HTML5 a[download] attribute to specify filename
                var a = document.createElement("a");
                // safari doesn't support this yet
                a.href = downloadUrl;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
            }
        }
    }    
});
