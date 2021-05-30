import $ from 'jquery'
console.log('Header component')

$('<h1 />')
    .text('Hello world from JQuery')
    .css({
        textAlign: 'center',
        color: 'red'
    })
    .appendTo($('header'))