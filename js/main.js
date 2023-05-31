/* Product List */ 

const products = [
    {
        name: "Lenovo - Ideapad 3i 15.6 FHD Touch Laptop - Core i5-1135G7 with 8GB Memory - 512GB SSD - Arctic Grey",
        price: 430,
        stars: 5,
        reviews: 156,
        seller: "Lenovo",
        image: "product1.jpeg",
        link: "https://www.bestbuy.com/site/lenovo-ideapad-3i-15-6-fhd-touch-laptop-core-i5-1135g7-with-8gb-memory-512gb-ssd-arctic-grey/6531744.p?skuId=6531744"
    },
    {
        name: "HP - 15.6 Touch-Screen Laptop - Intel Core i3 - 8GB Memory - 256GB SSD - Natural Silver",
        price: 370,
        stars: 4,
        reviews: 200,
        seller: "HP",
        image: "product3.jpeg",
        link: "https://www.bestbuy.com/site/hp-15-6-touch-screen-laptop-intel-core-i3-8gb-memory-256gb-ssd-natural-silver/6510528.p?skuId=6510528product"
    },
    {
        name: "HP - ENVY 2-in-1 15.6 Full HD Touch-Screen Laptop - Intel Evo Platform - Core i7 - 16GB Memory - 512GB SSD - Natural Silver",
        price: 1150,
        stars: 5,
        reviews: 25,
        seller: "HP",
        image: "product2.jpeg",
        link: "https://www.bestbuy.com/site/hp-envy-2-in-1-15-6-full-hd-touch-screen-laptop-intel-evo-platform-core-i7-16gb-memory-512gb-ssd-natural-silver/6535818.p?skuId=6535818"
    },
    {
        name: "HP - 14 Laptop - Intel Celeron - 4GB Memory - 64GB eMMC - Rose Gold",
        price: 200,
        stars: 4,
        reviews: 338,
        seller: "HP",
        image: "product4.jpeg",
        link: "https://www.bestbuy.com/site/hp-14-laptop-intel-celeron-4gb-memory-64gb-emmc-rose-gold/6499942.p?skuId=6499942"
    },
    {
        name: "Acer - Chromebook 315 Laptop-15.6 Full HD Touch- 4GB LPDDR4-64GB eMMC- Wi-Fi 5 - Pure Silver",
        price: 289,
        stars: 5,
        reviews: 19,
        seller: "Acer",
        image: "product5.jpeg",
        link: "https://www.bestbuy.com/site/acer-chromebook-315-laptop-15-6-full-hd-touch-4gb-lpddr4-64gb-emmc-wi-fi-5-pure-silver/6529400.p?skuId=6529400"
    },
    {
        name: "ASUS - ROG Zephyrus 14 WQXGA 120Hz Gaming Laptop – AMD Ryzen 9– 16GB DDR5 Memory – AMD Radeon RX 6700S – 1TB PCIe 4.0 SSD",
        price: 1649,
        stars: 4,
        reviews: 166,
        seller: "Asus",
        image: "product6.jpeg",
        link: "https://www.bestbuy.com/site/asus-rog-zephyrus-14-wqxga-120hz-gaming-laptop-amd-ryzen-9-16gb-ddr5-memory-amd-radeon-rx-6700s-1tb-pcie-4-0-ssd/6494638.p?skuId=6494638"
    },
    {
        name: "Lenovo - Yoga 7i 16 WUXGA 2 in 1 Touch-Screen Laptop - Intel Core i7-1355U - 16GB Memory - 512GB SSD - Storm Grey",
        price: 1000,
        stars: 3,
        reviews: 7,
        seller: "Lenovo",
        image: "product7.jpeg",
        link: "https://www.bestbuy.com/site/lenovo-yoga-7i-16-wuxga-2-in-1-touch-screen-laptop-intel-core-i7-1355u-16gb-memory-512gb-ssd-storm-grey/6533950.p?skuId=6533950"
    },
    {
        name: "ASUS - ROG Zephyrus 15.6 WQHD 165Hz Gaming Laptop-AMD Ryzen 9-16GB DDR5 Memory-NVIDIA GeForce RTX 3060-512GB PCIe 4.0 SSD - Eclipse Gray",
        price: 1099,
        stars: 3,
        reviews: 356,
        seller: "Asus",
        image: "product8.jpeg",
        link: "https://www.bestbuy.com/site/asus-rog-zephyrus-15-6-wqhd-165hz-gaming-laptop-amd-ryzen-9-16gb-ddr5-memory-nvidia-geforce-rtx-3060-512gb-pcie-4-0-ssd-eclipse-gray/6494630.p?skuId=6494630"
    },
    {
        name: "Acer - Predator Helios 300 - 15.6 QHD 240Hz Gaming Laptop - Intel Core i7 - 16GB DDR5 - NVIDIA GeForce RTX 3070 Ti - 1TB SSD",
        price: 1299,
        stars: 4,
        reviews: 129,
        seller: "Acer",
        image: "product9.jpeg",
        link: "https://www.bestbuy.com/site/acer-predator-helios-300-15-6-qhd-240hz-gaming-laptop-intel-core-i7-16gb-ddr5-nvidia-geforce-rtx-3070-ti-1tb-ssd/6504564.p?skuId=6504564"
    },
    {
        name: "Acer - Nitro 5 15.6 Gaming Laptop FHD-Intel 12th Gen Core i5- NVIDIA GeForce RTX3050 Ti- 16GB DDR4- 512GB PCIe-SSD",
        price: 949,
        stars: 0,
        reviews: 1,
        seller: "Acer",
        image: "product10.jpeg",
        link: "https://www.bestbuy.com/site/acer-nitro-5-15-6-gaming-laptop-fhd-intel-12th-gen-core-i5-nvidia-geforce-rtx3050-ti-16gb-ddr4-512gb-pcie-ssd/6540566.p?skuId=6540566pro"
    }
]; 

/* General Function */

function shopNow(event) {
    console.log('Shop pressed');
    alert('Shopping not implemented');
};

/* HTML Templates */

const navElement = () => {
    return `
        <nav>
            <div class="nav-bar-container">
                <div class="nav-bar-main-container">
                    <div class="logo-container">
                        <img src="images/bby_logo.png" alt="Best Buy Logo">
                    </div>
                    <div class="nav-bar-menu-container">
                        <button id="hamburger-button">☰</button>
                        <h3 id="nav-bar-menu-title">Menu</h3>
                    </div>
                    <div class="search-container">  
                        <input type="text" id="nav-search-input" placeholder="What can we help you find today?"> 
                        <button id="nav-search-button"><img src="images/search.png" alt="Search Icon"></button>
                    </div>
                </div>
                <div class="nav-bar-buttons-container">
                    <div class="nav-bar-button-container">
                        <a href="https://www.bestbuy.com/site/store-locator"><img src="images/disk.png" alt="Disk Icon"></a>
                        <h3 class="nav-bar-button-title">Bangor</h3>
                    </div>
                    <div class="nav-bar-button-container">
                        <a href="https://www.bestbuy.com/cart"><img src="images/cart.png" alt="Cart Icon"></a>
                        <h3 class="nav-bar-button-title">Cart</h3>
                    </div>
                </div>
            </div>
            <div class="hamburger-menu-container hidden">
                <ul>
                    <li><a href="https://www.bestbuy.com/site/store-locator" rel="noopener">Other store locations</a></li>
                    <li><a href="https://www.bestbuy.com/cart" rel="noopener">Shopping cart</a></li>
                </ul>
            </div>
        </nav>
        `;
}

const headerElement = () => {
    return  `
        <header>
            <div class="header-container">
                <div class="hero-image-container">
                    <img src="images/hero.png" alt="Hero image">
                    <button id="shop-button">Shop now</button>
                </div>
            </div>
        </header>
    `;
}

const mainElement = () => {
    return  `
        <main>
            <div class="section-container">
                <section class="filter"> 
                    <h2>Search for product</h2>
                    </br>
                    <form action="#" class="search-form">
                        <div class="brand-filter-section">
                            <label for="brand-filter">Select brand:</label>
                            <select class="sellers" id="brand-filter">
                                <option value="All">All</option>
                                <option value="Acer">Acer</option>
                                <option value="Asus">Asus</option>
                                <option value="Lenovo">Lenovo</option>
                                <option value="HP">HP</option>
                            </select>
                        </div>
                        <div class="price-filter-section">
                            <label for="price-filter">Maximum price:</label>
                            <input type="number" id="price-filter" name="price-filter" min="0" max="5000" value="5000">
                            <button id="price-filter-button">Search</button>
                        </div>
                        <div class="clear-filter-section">
                            <button id="clear-filters-button">Clear filters</button>
                        </div>
                    </form>
                </section>
                <section class="products">
                    <div class="products-container">
                    </div>
                </section>
            </div>
        </main>
    `;
}

const footerElement = () => {
    return  `
        <footer>
            <p>In-store pricing may vary. Prices and offers are subject to change. © 2023 Best Buy. All rights reserved. BEST BUY, the BEST BUY logo, the tag design, and MY BEST BUY are trademarks of Best Buy and its affiliated companies.</p>
        </footer>
    `;
}

const createProductElement = (productImage, productName, productBrand, productPrice, shoppingFunction) => {
    return `
        <div class="product">
            <div class="product-main-container">
                <div class="product-description-container">
                    <div class="product-image-container">
                        <img src="images/products/${productImage}" alt="Product Image">
                    </div>
                    <div class="product-info-container">
                        <h3>${productName}</h3>
                        <h4>Brand: ${productBrand}</h4>
                    </div>
                </div>
                <div class="product-buy-container">
                    <h2>${productPrice}.-</h2>
                    <button class="add-to-cart-button" type="button" onclick="shopNow">Add to Cart</button>
                </div>
            </div>
            <div class="product-info-container-bottom">
                <h3>${productName}</h3>
                <h4>Brand: ${productBrand}</h4>
            </div>
        </div>
        `;
}

/* Initialization */
const bodyElement = document.querySelector('body');
const navTemplate = navElement();
const headerTemplate =headerElement();
const mainTemplate = mainElement();
const footerTemplate = footerElement();
console.log(headerElement);
bodyElement.innerHTML = navTemplate + headerTemplate + mainTemplate + footerTemplate;

/* HTML links */
const navHamburgerButton = document.querySelector('#hamburger-button');
const dropdownList = document.querySelector('.hamburger-menu-container');
const navSearchButton = document.querySelector('#nav-search-button');
const navSearchInput = document.querySelector('#nav-search-input');
const shopButton = document.querySelector('#shop-button');
const brandSelector = document.querySelector('#brand-filter');
const priceSelector = document.querySelector('#price-filter');
const priceSelectorButton = document.querySelector('#price-filter-button');
const clearFiltersButton = document.querySelector('#clear-filters-button');
const productsContainer = document.querySelector('.products-container');

/* Create products */
const updateProducts = () => {
    console.log('Update products'); /* return; */
    const filteredproducts = products.filter((element, index) => {
        const navSearchFilter = document.querySelector('#nav-search-input').value.toLowerCase();
        const selectedBrand = document.querySelector('#brand-filter').value;
        const selectedMaxPrice = document.querySelector('#price-filter').value;
        const navSearchFiltered = navSearchFilter === '' || element.name.toLowerCase().includes(navSearchFilter);
        console.log('Nav Search: "' + navSearchFilter +'" ' + index + ' ' + navSearchFiltered);
        return ((selectedBrand === 'All' || selectedBrand === element.seller) && element.price <= selectedMaxPrice && navSearchFiltered);
    });
    let productsList = '';
    filteredproducts.forEach(element => {
        productsList += createProductElement(element.image, element.name, element.seller, element.price, shopNow);
    });
    productsContainer.innerHTML = productsList;
    const producs = document.querySelectorAll('.add-to-cart-button');
    producs.forEach(element => {
        element.addEventListener('click', shopNow);
    })
    //console.log(filteredproducts);
    //console.log(productsList);
}

/* Filter Section Button */
const startSearch = (event) => {
    console.log('Start search');
    event.preventDefault();
    updateProducts();
};

const clearFilters = (event) => {
    event.preventDefault();
    console.log('Clear filters');
    navSearchInput.value = '';
    priceSelector.value = 5000;
    brandSelector.value = 'All';
    updateProducts();
}

/* Navigation bar */
function toggleHamburgerMenu() {
    console.log('Toggle hamburger menu');
  dropdownList.classList.toggle('hidden');
};

/* Add Event Listener */
navHamburgerButton.addEventListener('click', toggleHamburgerMenu);
navSearchButton.addEventListener('click', startSearch);
brandSelector.addEventListener('change', startSearch);
priceSelectorButton.addEventListener('click', startSearch);
clearFiltersButton.addEventListener('click', clearFilters);
shopButton.addEventListener('click', shopNow);

/* Initialize product list */
updateProducts();