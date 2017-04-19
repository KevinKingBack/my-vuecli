<template>
    <div>
        <div class="col-sm-3 col-md-2 sidebar">
            <ul class="nav nav-sidebar">
                <router-link to='/' tag='li' exact >
                    <a>Home<span class="sr-only">(current)</span></a>
                </router-link>
                <router-link to='foo' tag='li'>
                    <a>Go Foo</a>
                </router-link>
                <router-link to='/bar' tag='li'>
                    <a>Go Bar</a>
                </router-link>
            </ul>
            <ul class="nav nav-sidebar">
                <li><a href="">Nav item</a></li>
                <li><a href="">Nav item again</a></li>
                <li><a href="">One more nav</a></li>
                <li><a href="">Another nav item</a></li>
                <li><a href="">More navigation</a></li>
            </ul>
            <ul class="nav nav-sidebar">
                <li><a href="">Nav item again</a></li>
                <li><a href="">One more nav</a></li>
                <li><a href="">Another nav item</a></li>
            </ul>
        </div>
    </div>
</template>
