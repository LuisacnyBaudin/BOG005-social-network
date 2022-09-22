export default () => {
    const viewWall = `
    <header id="headerWall">
    <button id="profile"></button>
    <button id="singOut"></button>
    <input type="text" placeholder="Search for creators and projects" id="searchtwo">
    <button type="submit" id="search"></button>
    </header>
    <section id="pagWall">
    <input type="text" placeholder="What are you thinking?" id="postUser">
    <button type="submit" id="sendPost"></button>
    <input type="text" id="postpublication">
    <button type="submit" id="heartImg"></button>
    <button type="submit" id="trashImg"></button>
    <button type="submit" id="editImg"></button>
    <input type="text" id="postpublicationtwo">
    </section>
    `;

    const pagWall = document.createElement('section');
    pagWall.innerHTML = viewWall;

    return pagWall;
}