function loadArticle(id, forcePushState) {
    $.ajax({
        type: 'GET',
        url: 'data/data.json',
        // data: {
        //     dataObj: items
        // },
        success: function (res) {
            var article = res.find(item => item.id === parseInt(id));
            if (!article) {
                alert(`Article with id ${id} is not existed.`);
            }

            if (forcePushState) {
                history.pushState({ id: id }, article.title, "?id=" + id);
            }

            displayArticle(article);
        },
        error: function () {
            console.log('error');
        }
    });
}

function displayArticle(article) {
    $("#content figure img").attr('src', 'data/img/' + article.figure);
    $("#content h1").text(article.title);
    $("#content article").html(article.content);
}

function init() {
    var browserState = history.state;
    console.log(browserState);
    if (!browserState) {
        loadArticle(1, true);
        return;
    }
    loadArticle(browserState.id, true);
}

//--------------------------------------------------
init();

window.onpopstate = function(event) {
    if (!event.state) {
        return;
    }
    loadArticle(event.state.id, false);
}

$('.article-link').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href').replace('#', '');
    loadArticle(id, true);
});

