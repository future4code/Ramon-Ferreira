const API_KEY = 'c539bda7240d047accfa684442779813'
const API_BASE = 'https://api.themoviedb.org/3'


/*
    -listagem dos filmes mais populares do dia (trending)
    -lista para encontrar novos filmes
    -em alta (top rated)
    -ação
    -comedia
    -terror
    -documentario
*/


const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json();
    return json;
}


export default {
    getHomeList: async () => {
        return[{
            slug: 'trending',
            title: 'Recomendados',
            items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'top rated',
            title: 'Em alta',
            items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'action',
            title: 'Ação',
            items: await basicFetch(`/discover/movie?with_generes=28&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            items: await basicFetch(`/discover/movie?with_generes=35&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'horror',
            title: 'Terror',
            items: await basicFetch(`/discover/movie?with_generes=27&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?with_generes=10749&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'documentary',
            title: 'Documentários',
            items: await basicFetch(`/discover/movie?with_generes=99&language=pt-BR&api_key=${API_KEY}`)
        }
    ]
    },
    getMovieInfo: async (movieId, type) => {
        let info = {} 

        if(movieId){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;
                default:
                    info = null
                break;
            }
        } 

        return info
    }
}