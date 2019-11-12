const CACHE_NAME = 'firstpwa-v9';
var urlsToCache = [
	'/',
	'/index.html',
	'/favicon.ico',
	'/assets/jquery.min.js',
	'/assets/style.css',
	'/assets/ace-builds-master/src-noconflict/ace.js',
	'/assets/ace-builds-master/src-noconflict/ext-language_tools.js',
	'/assets/ace-builds-master/src-noconflict/theme-monokai.js',
	'/assets/ace-builds-master/src-noconflict/mode-html.js',
	'/assets/ace-builds-master/src-noconflict/snippets/text.js',
	'/assets/bootstrap-4.1.3-dist/css/bootstrap.min.css',
	'/assets/bootstrap-4.1.3-dist/js/bootstrap.min.js',
	'/assets/fontawesome-free-5.11.2-web/css/all.min.css',
	'/assets/fontawesome-free-5.11.2-web/webfonts/fa-brands-400.ttf',
	'/assets/fontawesome-free-5.11.2-web/webfonts/fa-brands-400.woff',
	'/assets/fontawesome-free-5.11.2-web/webfonts/fa-solid-900.woff2',
	'/assets/fontawesome-free-5.11.2-web/webfonts/fa-solid-900.woff',
	'/assets/fontawesome-free-5.11.2-web/webfonts/fa-solid-900.ttf',
	'/assets/fonts/Mansalva/Mansalva-Regular.ttf',
	'/assets/fonts/Montserrat/Montserrat-Regular.ttf',
	'/assets/fonts/Montserrat/Montserrat-Medium.ttf',
	'/assets/images/featured/b.svg',
	'/assets/images/featured/c.svg',
	'/assets/images/featured/d.svg',
	'/assets/images/featured/e.svg',
	'/assets/images/featured/document.svg',
	'/assets/images/featured/information.svg',
	'/assets/images/featured/question.svg',
	'/assets/images/icons/icon-512x512.png',
	'/assets/images/firman.jpx',
	'/pages/about.html',
	'/pages/glosarium.html',
	'/pages/help.html',
	'/pages/ki_kd.html',
	'/pages/content/1/',
	'/pages/content/1/index.html',
	'/pages/content/1/latihan.html',
	'/pages/content/1/materi2.html',
	'/pages/content/1/materi3.html',
	'/pages/content/1/editor/1/index.html',
	'/pages/content/1/editor/1/coba_view.html',
	'/pages/content/1/editor/1/live_editor.js',
	'/pages/content/1/editor/2/index.html',
	'/pages/content/1/editor/2/coba_view.html',
	'/pages/content/1/editor/2/live_editor.js',
	'/pages/content/1/editor/3/index.html',
	'/pages/content/1/editor/3/coba_view.html',
	'/pages/content/1/editor/3/live_editor.js',
	'/pages/content/1/editor/4/index.html',
	'/pages/content/1/editor/4/coba_view.html',
	'/pages/content/1/editor/4/live_editor.js',
	'/pages/content/1/editor/5/index.html',
	'/pages/content/1/editor/5/coba_view.html',
	'/pages/content/1/editor/5/live_editor.js',
	'/pages/content/1/js/latihan.js',
	'/pages/quizz/index.html',
	'/pages/quizz/main.html',
	'/pages/quizz/main.html?',
	'/pages/quizz/quiz.html',
	'/pages/quizz/quiz.html?',
	'/pages/quizz/register.html',
	'/pages/quizz/result.html',
	'/pages/quizz/result.html?',
	'/pages/quizz/register.html?type=login',
	'/pages/quizz/register.html?type=register',
	'/pages/quizz/js/main.js',
	'/pages/quizz/js/quiz.js',
	'/pages/quizz/js/register.js',
	'/pages/quizz/js/result.js',
	'/pages/quizz/image/lock.png',
	'/pages/quizz/image/q1.svg',
	'/pages/quizz/image/quiz.svg',
];

self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(function (cache) {
			return cache.addAll(urlsToCache);
		})
	);
})

self.addEventListener('activate', function (event) {
	event.waitUntil(
		caches.keys()
		.then(function (cacheNames) {
			return Promise.all(
				cacheNames.map(function (cacheName) {
					if (cacheName != CACHE_NAME) {
						console.log("ServiceWorker: cache " + cacheName + " dihapus");
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
})

self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request, {
			cacheName: CACHE_NAME
		})
		.then(function (response) {
			if (response) {
				console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
				return response;
			}

			console.log("ServiceWorker: Memuat aset dari server: ", event.request.url);
			return fetch(event.request);
		})
	);
});