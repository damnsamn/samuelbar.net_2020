
var id = $("#gistScript").data("gist-id"),
    gist;

async function processGist(g) {
    gist = await g.data;

    $(".snippet__date span").html(moment(gist.updated_at).format("DD MMM YYYY")).parent().addClass("set");

}


if (id) {
    $.ajax({
        url: 'https://api.github.com/gists/' + id,
        dataType: 'jsonp',
        success: processGist
    });
}