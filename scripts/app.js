window.onload = function() {
    const Router = function(name, routes) {
        return {
            name: name,
            routes: routes
        };
    }
    const view = document.getElementById('content');
    const router = new Router('router', [
        {
            path: '/',
            name: 'Home'
        },
        {
            path: '/experience',
            name: 'Experience'
        },
        {
            path: 'projects',
            name: 'Projects'
        },
    ]);

    let currentPath = window.location.pathname;
    if(currentPath === '/') {
        view.innerHTML = 'you are on the root page';
    }else {
        let route = router.routes.filter((r) => {
            return r.path === currentPath
        })[0];
        console.log(route);
    }

    console.log(router);
}