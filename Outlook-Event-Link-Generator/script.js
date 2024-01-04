function generateLink() {
    var startdt = document.getElementById('startdt').value;
    var enddt = document.getElementById('enddt').value;
    var title = encodeURIComponent(document.getElementById('title').value);
    var body = encodeURIComponent(document.getElementById('body').value);

    var link = `https://outlook.office365.com/calendar/action/compose?startdt=${startdt}&enddt=${enddt}&subject=${title}&body=${body}`;

    var meeting_url = document.getElementById('meeting_url').value;
    if (meeting_url) {
        link += encodeURIComponent(`<br><a href="${meeting_url}">ミーティングURLはこちら</a>`);
    }

    document.getElementById('generatedLink').value = link;
    document.getElementById('copyMessage').style.display = 'none';
}

function copyToClipboard() {
    var link = document.getElementById('generatedLink').value;
    navigator.clipboard.writeText(link).then(function() {
        document.getElementById('copyMessage').style.display = 'inline';
    }, function(err) {
        console.error('コピーに失敗しました: ', err);
    });
}

function setEndTime(minutes) {
    var startDate = document.getElementById('startdt').value;
    if (startDate) {
        var endDate = new Date(startDate);
        endDate.setMinutes(endDate.getMinutes() + minutes);
        
        var endYear = endDate.getFullYear();
        var endMonth = ('0' + (endDate.getMonth() + 1)).slice(-2);
        var endDay = ('0' + endDate.getDate()).slice(-2);
        var endHours = ('0' + endDate.getHours()).slice(-2);
        var endMinutes = ('0' + endDate.getMinutes()).slice(-2);

        var endDateTime = `${endYear}-${endMonth}-${endDay}T${endHours}:${endMinutes}`;
        document.getElementById('enddt').value = endDateTime;
    }
}

function setCurrentDateTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = ('0' + (now.getMonth() + 1)).slice(-2);
    var day = ('0' + now.getDate()).slice(-2);
    var hours = ('0' + now.getHours()).slice(-2);
    var minutes = ('0' + now.getMinutes()).slice(-2);

    var currentDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
    document.getElementById('startdt').value = currentDateTime;
}

document.addEventListener('DOMContentLoaded', function() {
    setCurrentDateTime();
});