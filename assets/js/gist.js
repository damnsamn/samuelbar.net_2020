
var id = $("#gistScript").data("gist-id"),
    gist,
    date;

function setDate(d, className) {
    $(".snippet__date span").html(d).parent().addClass(className);

}

async function processGist(g) {
    gist = await g.data;
    date = moment(gist.updated_at).format("DD MMM YYYY");
    sessionStorage.setItem("gist." + id, date);

    setDate(date, "set");
}


if (id) {
    if (!sessionStorage.getItem("gist." + id))
        $.ajax({
            url: 'https://api.github.com/gists/' + id,
            dataType: 'jsonp',
            headers: {
                "Authorisation": "token 3963b3bb9b0f16e07b19792aab4327a93fffa576"
            },
            success: processGist
        });
    else
        setDate(sessionStorage.getItem("gist." + id), "saved");

}