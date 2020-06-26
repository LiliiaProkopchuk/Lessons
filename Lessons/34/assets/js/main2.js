const API_KEY2 = 'ade279bc';
const API_KEY = '1c97ecafa675491c6da0131f8936143e';
let PAGE_NUM = 1;
let FAV_LIST = [];

function SearchFilm($btn) {
    if ($('#service').val() == 'OMDB') {
        if (!$btn.hasClass("done")) {
            if (!$btn.hasClass("disabled")) {
                $btn.addClass("disabled");
                $.ajax({
                    url: 'https://api.themoviedb.org/3/search/movie?api_key=' + API_KEY + '&query=' + $('#search').val() + '&page=' + PAGE_NUM,
                    type: 'get',
                    dataType: 'json',
                    success: function (json) {
                        let rez = '',
                            item,
                            image,
                            in_fav = -1,
                            fav_class = '';
                        if (json.results.length != 0) {
                            for (let i = 0; i < json.results.length; i++) {
                                item = json.results[i];
                                image = (item.poster_path != null) ? 'https://image.tmdb.org/t/p/w500' + item.poster_path : 'https://via.placeholder.com/200x300?text=No poster';
                                in_fav = FAV_LIST.findIndex(f => f.id === item.id);
                                fav_class = (in_fav == -1) ? '' : ' in_fav';
                                rez += `
                            <div class="film_item">
                                <div class="film_poster">
                                <img src="${image}" alt="${item.title}">
                                </div>
                                <div class="film_info">
                                   <h3>${item.title}</h3>
                                   <div><b>Release date:</b>${item.release_date}</div>
                                   <div><b>Rating:</b>${item.vote_average}</div>
                                   <div>${item.overview}</div>
                                   <button class="btn_wrap" type="button">
                                   <a href="javascript:void(0)" data-id="${item.id}" onclick="getDetailInfo($(this))" class="btn">Detail info</a>
                                   <a href="javascript:void(0)" data-id="${item.id}" data-title="${item.title}" data-image="${image}" onclick="toggleFav($(this))" class="btn${fav_class}">Fav</a>
                                   </button>
                                   <div class="film_detail"></div>
                                </div>
                            </div>
                            `;
                            }
                            buildPagination(json.total_pages, json.page);
                        } else {
                            rez = `<p class="err">Nothing found</p>`;
                            buildPagination(json.totalResults);
                        }
                        $('#search_result').html(rez);
                        $btn.removeClass("disabled");
                    },
                    error: function (err) {
                        alert(err.status);
                        $btn.removeClass("disabled");
                    }
                });
            }
        }
    } if ($('#service').val() == 'MDB') {
        let type = $('#type option:selected').val();
        if (!$btn.hasClass("done")) {
            if (!$btn.hasClass("disabled")) {
                $btn.addClass("disabled");
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=' + API_KEY2 + '&s=' + $('#search').val() + '&type=' + type + '&page=' + PAGE_NUM,
                    type: 'get',
                    dataType: 'json',
                    success: function (json) {
                        let rez = '',
                            item,
                            image,
                            in_fav = -1,
                            fav_class = '';
                        if (json.Search != undefined) {
                            for (let i = 0; i < json.Search.length; i++) {
                                item = json.Search[i];
                                image = (item.Poster != 'N/A') ? item.Poster : 'https://via.placeholder.com/200x300?text=No poster';
                                in_fav = FAV_LIST.findIndex(f => f.id === item.id);
                                fav_class = (in_fav == -1) ? '' : ' in_fav';
                                rez += `
                                <div class="film_item">
                                <div class="film_poster">
                                <img src="${image}" alt="${item.Title}">
                                </div>
                                    <div class="film_info">
                                       <h3>${item.Title}</h3>
                                       <div><b>Release year: </b>${item.Year}</div>
                                       <button class="btn_wrap" type="button">
                                       <a href="javascript:void(0)" data-id="${item.imdbID}" onclick="getDetailInfo($(this))" class="btn">Detail info</a>
                                       <a href="javascript:void(0)" data-id="${item.imdbID}" data-title="${item.Title}" data-image="${image}" onclick="toggleFav($(this))" class="btn${fav_class}">Fav</a>
                                       </button>
                                       <div class="film_detail"></div>
                                    </div>
                                </div>
                                `;
                            }
                            buildPagination(json.totalResults);
                        } else {
                            rez = `<p class="err">Nothing found</p>`;
                            buildPagination(json.totalResults);
                        }
                        $('#search_result').html(rez);
                        $btn.removeClass("disabled");
                    },
                    error: function (err) {
                        alert(err.status);
                        $btn.removeClass("disabled");
                    }
                });
            }
        }
    }
};

function toggleFav($btn) {
    let id = $btn.data("id"),
        in_fav = -1;
    in_fav = FAV_LIST.findIndex(f => f.id === id);
    if (in_fav == -1) {
        FAV_LIST.push({
            id: id,
            title: $btn.data("title"),
            image: $btn.data("image")
        });
        $btn.addClass("in_fav");
    } else {
        let tmp_fav = [];
        for (let i = 0; i < FAV_LIST.length; i++) {
            if (i != in_fav) {
                tmp_fav.push(FAV_LIST[i]);
            }
        }
        FAV_LIST = tmp_fav;
        $btn.removeClass("in_fav");
    }
    localStorage.setItem('fav', JSON.stringify(FAV_LIST));
};

function buildPagination(total_page) {
    if ($('#service').val() == 'OMDB') {
        let pager = '';
        pager += '<ul>';
        if (PAGE_NUM != 1) {
            pager += '<li class="page"><a href="javascript:void(0)" onclick="setPage(1)">First</a></li>';
            pager += '<li class="page"><a href="javascript:void(0)" onclick="setPage(' + (PAGE_NUM - 1) + ')">Prev</a></li>';
        };
        for (let p = 1; p < total_page + 1; p++) {
            if (PAGE_NUM == p) {
                pager += '<li class="page"><span>' + p + '</span></li>';
            } else {
                pager += '<li class="page"><a href="javascript:void(0)" onclick="setPage(' + (p) + ')">' + p + '</a></li>';
            }
        };
        if (PAGE_NUM < total_page) {
            pager += '<li class="page"><a href="javascript:void(0)" onclick="setPage(' + (PAGE_NUM + 1) + ')">Next</a></li>';
            pager += '<li class="page"><a href="javascript:void(0)" onclick="setPage(' + total_page + ')">Last</a></li>';
        };
        pager += '</ul>';
        $('#pager_wrap').html(pager);
    } if ($('#service').val() == 'MDB') {
        let total = Math.ceil(total_page / 10);
        let pager = '';
        pager += '<ul>';
        if (PAGE_NUM != 1) {
            pager += '<li class="page"><a href="javascript:void(0)" onclick="setPage(1)">First</a></li>';
            pager += '<li class="page"><a href="javascript:void(0)" onclick="setPage(' + (PAGE_NUM - 1) + ')">Prev</a></li>';
        };
        for (let p = 1; p < total + 1; p++) {
            if (PAGE_NUM == p) {
                pager += '<li class="page"><span>' + p + '</span></li>';
            } else {
                pager += '<li class="page"><a href="javascript:void(0)" onclick="setPage(' + (p) + ')">' + p + '</a></li>';
            }
        };
        if (PAGE_NUM < total) {
            pager += '<li class="page"><a href="javascript:void(0)" onclick="setPage(' + (PAGE_NUM + 1) + ')">Next</a></li>';
            pager += '<li class="page"><a href="javascript:void(0)" onclick="setPage(' + total + ')">Last</a></li>';
        };
        pager += '</ul>';
        $('#pager_wrap').html(pager);
    }
};

function setPage(new_page) {
    PAGE_NUM = new_page;
    SearchFilm($("#search_btn"));
};

function getDetailInfo($lnk) {
    if ($('#service').val() == 'OMDB') {
        $(".film_detail").hide();
        if (!$lnk.hasClass("done")) {
            if (!$lnk.hasClass("disabled")) {
                $lnk.addClass("disabled");
                $.ajax({
                    url: 'https://api.themoviedb.org/3/movie/' + $lnk.data('id') + '?api_key=' + API_KEY,
                    type: 'get',
                    dataType: 'json',
                    success: function (json) {
                        let rez = `
                        <ul>
                          <li><b>Popularity rate: </b>${json.popularity}</li>`;
                        if (json.homepage != "") {
                            rez += `<li><b>Homepage: </b><a href="${json.homepage}" target="_blank">Go to site</a></li>`;
                        }
                        if (json.runtime != 0) {
                            rez += `<li><b>Run Time: </b>${json.runtime} min</li>`;
                        }
                        if (json.tagline.length != 0) {
                            rez += `<li><b>Slogan: </b>${json.tagline}</li>`;
                        }
                        rez += `</ul >`;
                        $lnk.parents(".film_item").find(".film_detail").html(rez);
                        $lnk.parents(".film_item").find(".film_detail").show();
                        $lnk.removeClass("disabled");
                        $lnk.addClass("done");
                    },
                    error: function (err) {
                        alert(err.status);
                        $lnk.removeClass("disabled");
                    }
                });
            }
        } else {
            $lnk.parents(".film_item").find(".film_detail").show();
        }
    } if ($('#service').val() == 'MDB') {
        $(".film_detail").hide();
        if (!$lnk.hasClass("done")) {
            if (!$lnk.hasClass("disabled")) {
                $lnk.addClass("disabled");
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=' + API_KEY2 + '&i=' + $lnk.data('id'),
                    type: 'get',
                    dataType: 'json',
                    success: function (json) {
                        let rez = `
                            <ul>
                              <li><b>Release date: </b>${json.Released}</li>`;
                        if (json.totalSeasons != undefined) {
                            rez += `<li><b>Seasons: </b>${json.totalSeasons}</li>`;
                        }
                        if (json.Actors != "") {
                            rez += `<li><b>Actors: </b>${json.Actors}</li>`;
                        }
                        if (json.Runtime != "") {
                            rez += `<li><b>Run Time: </b>${json.Runtime}</li>`;
                        }
                        if (json.Plot != "") {
                            rez += `<li><b>Slogan: </b>${json.Plot}</li>`;
                        }
                        if (json.Awards != "") {
                            rez += `<li><b>Awards: </b>${json.Awards}</li>`;
                        }
                        rez += `</ul >`;
                        $lnk.parents(".film_item").find(".film_detail").html(rez);
                        $lnk.parents(".film_item").find(".film_detail").show();
                        $lnk.removeClass("disabled");
                        $lnk.addClass("done");
                    },
                    error: function (err) {
                        alert(err.status);
                        $lnk.removeClass("disabled");
                    }
                });
            }
        } else {
            $lnk.parents(".film_item").find(".film_detail").show();
        }
    }
};

function fillFav() {
    if (localStorage.getItem("fav") != null) {
        FAV_LIST = JSON.parse(localStorage.getItem("fav"));
    }
};

function showFav() {
    let fhtml = `<div id = "modal_shadow"></div>
            <div id="my_alert">
            <div class="alert_header">
            <div class="alert_header_title">Your favorite movies</div>
            <a href="javascript:;" id="alert_close" onclick="closeMyAlert()" title="Close">&times;</a>
        </div>
        <div class="alert_body">`;
    if (FAV_LIST.length > 0) {
        fhtml += `<div class="slider">`;
        for (let i = 0; i < FAV_LIST.length; i++) {
            image = FAV_LIST[i].image;
            fhtml += `<div style="width:200px; display:inline-block;">
            <img src="${image}" alt="" style="height:200px;margin: 0 auto;">
            <br>
            <h4>${FAV_LIST[i].title}</h4>
            <a href="javascript:void(0)" data-id="${FAV_LIST[i].id}" onclick="getDetailInfo($(this))" class="btn">Detail info</a>
            <a href="javascript:void(0)" data-id="${FAV_LIST[i].id}" onclick="removeFav($(this))" class="btn">Remove</a>
            </div>`;
        }
        fhtml += `</div>
        <div class="alert_footer">
        <a href="javascript:void(0)" class="btn" onclick="clearFav()">Clear fav</a>
        <div class="film_detail"></div>
        </div>`;
    } else {
        fhtml += `<p>You did not add any movies</p>`;
    } fhtml += `</div >        
    </div >`;
    $("#fav_list").append($(fhtml));
    $('.slider').slick({
        dots: false,
        arrows: true,
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
    });
}

function removeFav($btn) {
    let id = $btn.data("id"),
        in_fav = -1;
    in_fav = FAV_LIST.findIndex(f => f.id === id);
    let tmp_fav = [];
    for (let i = 0; i < FAV_LIST.length; i++) {
        if (i != in_fav) {
            tmp_fav.push(FAV_LIST[i]);
        }
    }
    FAV_LIST = tmp_fav;
    $btn.removeClass("in_fav");
    localStorage.setItem('fav', JSON.stringify(FAV_LIST));
    closeMyAlert();
    showFav();
};

function closeMyAlert() {
    document.getElementById("modal_shadow").remove();
    document.getElementById("my_alert").remove();
}

function clearFav() {
    $("#fav_list").html('');
    FAV_LIST = [];
    localStorage.removeItem('fav');
};

$(document).ready(function () {
    $("#service").change(function () {
        switch ($('#service').val()) {
            case "OMDB": $("#type").removeClass("active"); break;
            case "MDB": $("#type").addClass("active"); break;
            default: alert($('#type').val()); break;
        }
    });
    fillFav();
});