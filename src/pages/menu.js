import * as React from "react"

import { Layout } from "../components"
import InnerHero from "../blocks/innerhero"
import Cta from "../blocks/cta"
import { Container } from "reflexjs"
import scrollTo from 'gatsby-plugin-smoothscroll';

export default function Menupage() {
    return (
        <Layout>
            <InnerHero
                image="url('/images/menu-bg.jpg')"
                subheading="Menu"
                heading="The Emili's menu is a selection of hand-crafted bites made with only the highest quality ingredients."
                id="top"
            />
            {/** Table of Contents */}
            <section py="8" mt="200px|300px" mb="12|8">
                <div variant="container">
                    <div display="grid" col="1" gap="4|8" justifyItems="center">
                        <div textAlign="center">
                            <a variant="text.link" onClick={() => scrollTo('#breakfast')}>Breakfast</a>
                            <br />
                            <a variant="text.link" onClick={() => scrollTo('#quiche')}>Quiche</a>
                            <br />
                            <a variant="text.link" onClick={() => scrollTo('#sandwiches')}>Sandiwches & Paninis</a>
                            <br />
                            <a variant="text.link" onClick={() => scrollTo('#coffee')}>Coffee & Tea</a>
                            <br />
                            <a variant="text.link" onClick={() => scrollTo('#juice')}>Fresh Juice & Italian Soda</a>
                            <br />
                            <a variant="text.link" onClick={() => scrollTo('#desserts')}>Desserts</a>
                            <br />
                            <a variant="text.link" onClick={() => scrollTo('#bread')}>Fresh Baked Bread</a>
                            <br />
                            <a variant="text.link" onClick={() => scrollTo('#pies')}>Pies</a>
                            <br />
                            <a variant="text.link" onClick={() => scrollTo('#cakes')}>Cakes</a>
                            <br />
                            <a variant="text.link" onClick={() => scrollTo('#swisstarts')}>Swiss Tarts</a>
                            <br />
                            <a variant="text.link" onClick={() => scrollTo('#fruittarts')}>Fruit Tarts</a>
                            <br />
                            <a variant="text.link" onClick={() => scrollTo('#croquembouche')}>Croquembouche</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Breakfast */}
            <section py="8|12" my="6|0" id="breakfast">
                <div variant="container">
                    <h2 variant="text.menuheading" pb="12">
                        Breakfast Danishes
                    </h2>
                    <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                        <div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Almond Crescent</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Apple Square</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Apple Turnover</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Cherry Turnover</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Butter Croissant</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Almond Croissant</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Chocolate Croissant</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Custard Raisin</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Nutella Cigar</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Banana Nut Muffin</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Blueberry Muffin</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Honey Bran Muffin w/ prune</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Poppyseed Muffin</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Chocolate Muffin</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Carrot Muffin</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Vegan Banana Nut Bread (slice)</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Palmiers</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Apple Strudel</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Apricot Almond</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Apricot Cheese</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Bear Claw</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Bread Pudding</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Cheese Pocket</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Cheese Square</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Cinammon Raisin Crisp</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Raspberry Walnut Twist</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Copenhagen (4 pc)</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Rum Danish</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Chocolate Scone</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Cranberry Scone</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Blueberry Scone</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Raisin Cross</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>German Pretzel</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p>Raspberry Granola Bar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quiche */}
            <section py="8|12" my="6|0" id="quiche">
                <grid col="2">
                    <div variant="container">
                        <div display="grid" col="1" gap="4|8">
                            <div>
                                <h2 variant="text.menuheading">
                                    Quiche
                                </h2>
                                <p textAlign="center" pb="12">
                                    w/ salad $2
                                </p>
                                <div width="90vw|500px" mx="auto">
                                    <img src="/images/quiche.png" alt="Quiche" />
                                </div>
                                <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                                    <div>
                                        <div display="flex">
                                            <div display="flex" width="90vw|500px" justifyContent="center">
                                                <p textAlign="center">
                                                    The Denver <br /> <span variant="text.menusubtext">Diced Ham, Green Onions, Cheddar</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div display="flex">
                                            <div display="flex" width="90vw|500px" justifyContent="center">
                                                <p textAlign="center">
                                                    The Lorraine <br /> <span variant="text.menusubtext">Bacon, Eggs, Gruyere</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div display="flex">
                                            <div display="flex" width="90vw|500px" justifyContent="center">
                                                <p textAlign="center">
                                                    The Normandy <br /> <span variant="text.menusubtext">Spinach & Mushrooms</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div display="flex">
                                            <div display="flex" width="90vw|500px" justifyContent="center">
                                                <p textAlign="center">
                                                    The Riviera <br /> <span variant="text.menusubtext">Mozzarella, Tomatoes, Fresh Basil</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div display="flex">
                                            <div display="flex" width="90vw|500px" justifyContent="center">
                                                <p textAlign="center">
                                                    The Alpen <br /> <span variant="text.menusubtext">Gorgonzola, Asagio Cheese, Mushrooms, Tomatoes</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div display="flex">
                                            <div display="flex" width="90vw|500px" justifyContent="center">
                                                <p textAlign="center">
                                                    Smoked Salmon <br /> <span variant="text.menusubtext">Dill, Asparagus, Mozzarella</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="quiche.png" alt="" />
                </grid>
            </section>

            {/* Sandwiches */}
            <section py="8|12" my="6|0" id="sandwiches">
                <div variant="container">
                    <h2 variant="text.menuheading">
                        Sandwiches & Paninis
                    </h2>
                    <p textAlign="center" pb="12">
                        incl. Salad
                    </p>
                    <div display="grid" col="1|1" gap="4|8" justifyItems="center" variant="text.menuitem">
                        <div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p textAlign="center">
                                        The French <br /> <span variant="text.menusubtext">French Baguette, Ham, Butter, Cornichons</span>
                                    </p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p textAlign="center">
                                        Ham & Swiss Croissant <br /> <span variant="text.menusubtext">Ham, Swiss Cheese, Butter Croissant</span>
                                    </p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p textAlign="center">
                                        The German <br /> <span variant="text.menusubtext">Bavarian pretzel, Salami, Butter, Black Forest Ham, German pickles</span>
                                    </p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="center">
                                    <p textAlign="center">
                                        The Swiss <br /> <span variant="text.menusubtext">French Loaf, Turkey, Brie, pears, Walnuts</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coffee & Tea */}
            <section py="8|12" my="6|0" id="coffee">
                <div variant="container">
                    <div display="grid" col="1" gap="4|8">
                        <div py="6">
                            <h2 variant="text.menuheading" pb="8">
                                Hot Coffee
                            </h2>
                            <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                                <div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="center">
                                            <p>House Drip</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="center">
                                            <p>Café Americano</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="center">
                                            <p>Café Au Lait</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="center">
                                            <p>Latte</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="center">
                                            <p>Mocha</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="center">
                                            <p>Macchiato</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="center">
                                            <p>Espresso</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="center">
                                            <p>Cappuccino</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="center">
                                            <p>Milky Way</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="center">
                                            <p>Shot In The Dark</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="center">
                                            <p>Weisse Kuh</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="center">
                                            <p>Austrian Hot Chocolate</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div py="6">
                            <h2 variant="text.menuheading" pb="8">
                                Cold Coffee
                            </h2>
                            <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                                <div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="center">
                                            <p>Iced House Drip</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="center">
                                            <p>Iced Cafe Americano</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="center">
                                            <p>Iced Latte</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="center">
                                            <p>Iced Mocha</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="center">
                                            <p>Iced Espresso</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="center">
                                            <p>Iced Milky Way</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="center">
                                            <p>Iced Shot In The Dark</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="center">
                                            <p>Iced Weisse Kuh</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div py="6">
                            <h2 variant="text.menuheading" pb="8">
                                Ice Blended
                            </h2>
                            <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                                <div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="center">
                                            <p>Vanilla Ice Blended</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="center">
                                            <p>Cookies n Cream Ice Blended</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="center">
                                            <p>Mocha Ice Blended</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="center">
                                            <p>Cotton Candy Ice Blended</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div py="6">
                        <h2 variant="text.menuheading">
                            Teas
                        </h2>
                        <p textAlign="center" pb="12">
                            *Iced tea available
                        </p>
                        <div width="90vw|500px" mx="auto">
                            <p textAlign="center" variant="text.menuitem">
                                Green Earl Grey • Tropical Green • Bombay Chai • Early Gray Lavender •
                                English Breakfast • Sweet Ginger Peach • Dragon Eye Oolong • Honeybush
                                Caramel • Golden Chamomile • Southern Mint
                                </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fresh Juice & Italian Soda */}
            <section py="8|12" my="6|0" id="juice">
                <div variant="container">
                    <div display="grid" col="1" gap="4|8">
                        <div py="6">
                            <h2 variant="text.menuheading" pb="8">
                                Fresh Made Juice
                            </h2>
                            <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                                <div>
                                    <div display="flex">
                                        <div display="flex" justifyContent="center">
                                            <p textAlign="center">#1 - Apple, Carrot, Celery, Beet</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" justifyContent="center">
                                            <p textAlign="center">#2 - Apple, Carrot</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" justifyContent="center">
                                            <p textAlign="center">#3 - Apple, Pear</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" justifyContent="center">
                                            <p textAlign="center">$4 - Orange Juice</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div py="6">
                            <h2 variant="text.menuheading" pb="8">
                                Italian Sodas
                            </h2>
                            <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                                <div width="80%">
                                    <p textAlign="center">
                                        Mango • Peach • Strawberry • Vanilla • Raspberry • Blueberry
                                        • Cherry • Pomegranate
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Desserts */}
            <section py="8|12" my="6|0" id="desserts">
                <div variant="container">
                    <h2 variant="text.menuheading" pb="8">
                        Desserts
                    </h2>
                    <div width="90vw|500px" mx="auto" pb="6">
                        <img src="/images/desserts.jpg" alt="Desserts" rounded="lg|md" />
                    </div>
                    <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                        <div width="90vw|500px">
                            <p textAlign="center">
                                Opera • Cannoli • Maple Pecan • Mocha Tres Leches • Raspberry Lemon •
                                Carrot Cake • Raspberry Fudge • Berry Cheesecake • Parisian • Napoleon
                                • Fruit Tart • Chocolate Mousse Tower • Lemon Merengue • Eclair •
                                Tiramisu • Red Velvet • Black Forest • Linzer Tart • Walnut Cranberry
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bread */}
            <section py="8|12" my="6|0" id="bread">
                <div variant="container">
                    <h2 variant="text.menuheading" pb="8">
                        Fresh Baked Breads
                    </h2>
                    <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                        <div width="80%">
                            <p textAlign="center">
                                Challah • Sourdough • French Baguette • French Loaf • German Rye • Multigrain • Whole Wheat
                        </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pies */}
            <section py="8|12" my="6|0" id="pies">
                <div variant="container">
                    <h2 variant="text.menuheading" pb="8">
                        Pies
                    </h2>
                    <div display="grid" col="1" gap="4|8">
                        <div>
                            <div display="grid" col="1|1" gap="4|8" justifyItems="center" variant="text.menuitem">
                                <div width="80%">
                                    <p textAlign="center">
                                        Pecan • Walnut Cranberry • Apple • Cherry • Boston Cream • Pumpkin • Key Lime
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cakes */}
            <section py="8|12" my="6|0" id="cakes">
                <div variant="container">
                    <h2 variant="text.menuheading">
                        Cakes
                    </h2>
                    <div display="grid" justifyItems="center" variant="text.menuitem" my="5rem">
                        <div>
                            <div display="grid" col="3" gap="2|4" justifyItems="center" mx="auto" pb="6">
                                <img width="40vw|250px" src="/images/tuttifrutti.png" alt="Tutti Frutti" />
                                <img width="40vw|500px" src="/images/princesscake.png" alt="Princess Cake" />
                                <img width="40vw|250px" src="/images/germanchocolate.png" alt="German Chocolate" />
                            </div>
                            <p textAlign="center" pb="8">
                                Princess • Mocha Tres Leches • Parisienne • Lemon Merengue • Carrot Cake • Raspberry Fudge • Tutti Frutti • Chocolate Fudge • Strawberry Shortcake • Banana Shortcake • Strawberry Banana Shortcake • Black Forest • Grand Marnier • German Chocolate • Red Velvet • Napoleon • Tiramisu • Opera • Flourless Chocolate Cake
                            </p>
                        </div>
                        <div mt="8">
                            <p textAlign="center" fontSize="2xl|xl" color="primary">
                                <a href="/contact">*Inquire for pricing and sizes</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section >

            {/* Swiss Tarts */}
            <section py="8|12" my="6|0" id="swisstarts">
                <div variant="container">
                    <h2 variant="text.menuheading" pb="8">
                        Swiss Tarts
                    </h2>
                    <div width="90vw|500px" mx="auto">
                        <img src="/images/swisstart.png" alt="Pie" />
                    </div>
                    <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                        <div width="80%" mx="auto">
                            <p textAlign="center" pb="8">
                                Apple - Apricot - Blueberry <br /> Linzer - Pear - Plum - Raspberry
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fruit Tarts */}
            <section py="8|12" id="fruittarts">
                <div variant="container">
                    <h2 variant="text.menuheading" pb="8">
                        Fruit Tarts
                    </h2>
                    <div width="90vw|500px" mx="auto">
                        <img src="/images/fruittart.png" alt="Pie" />
                    </div>
                </div>
            </section>

            {/* Croquembouche */}
            <section py="8|12" my="6|0" id="croquembouche">
                <div variant="container">
                    <h2 variant="text.menuheading">
                        Croquembouche
                    </h2>
                    <div width="90vw|500px" mx="auto" py="2">
                        <img src="/images/croquembouche.jpg" alt="Croquembouche" />
                    </div>
                    <p textAlign="center" variant="text.menuitem" my="6">
                        Italian w/ Chocolate or Traditional French w/Spun Sugar <br /> <span variant="text.menusubtext">Your choice of Vanilla – Chocolate or Mocha Custard Fillings</span>
                    </p>
                    <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                        <div>
                            <div display="flex">
                                <div display="flex" width="90vw|550px" justifyContent="center">
                                    <p>
                                        Available in counts of: 50, 90, 135, 170, 200, 230
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Cta
                heading="Place an order"
                link="https://www.ubereats.com/los-angeles/food-delivery/emilis-pasty-%26-cafe/ygjbd5nrRGeAKSyHpwG1FA"
                linktext="Order Online"
            />

            {/** Back to top button */}
            <div position="fixed" bottom="4" right="4">
                <button variant="button.primary" onClick={() => scrollTo('#top')}>Back To Top</button>
            </div>
        </Layout >
    )
}
