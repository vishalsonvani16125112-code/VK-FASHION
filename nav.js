document.addEventListener("DOMContentLoaded", function(){

  const nav = document.createElement("div");

  nav.className = "bottom-nav";

  nav.innerHTML = `
    <a href="index.html">
      <span class="nav-icon">⌂</span>
      <span>Home</span>
    </a>

    <a href="offers.html">
      <span class="nav-icon">%</span>
      <span>Deals</span>
    </a>

    <a href="myorders.html">
      <span class="nav-icon">▣</span>
      <span>My Orders</span>
    </a>

    <a href="account.html">
      <span class="nav-icon">○</span>
      <span>Account</span>
    </a>
  `;

  document.body.appendChild(nav);

});
