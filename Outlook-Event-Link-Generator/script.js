function generateLink() {
    var startdt = document.getElementById('startdt').value;
    var enddt = document.getElementById('enddt').value;
    var title = encodeURIComponent(document.getElementById('title').value);
    var body = encodeURIComponent(document.getElementById('body').value);

    var link = `https://outlook.office365.com/calendar/action/compose?startdt=${startdt}&enddt=${enddt}&subject=${title}&body=${body}`;

    document.getElementById('result').textContent = link;
    document.getElementById('copyMessage').style.display = 'none';
}

function copyToClipboard() {
    var link = document.getElementById('result').textContent;
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
