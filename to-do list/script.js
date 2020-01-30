/**
 * todo list
 */

addItem = function () {
    item = this.document.getElementById("item_name").value;
    el = document.createElement('li');
    el.innerHTML = item;
    document.getElementById('all_items').appendChild(el);
}