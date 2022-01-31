import React from "react";
import PropTypes from "prop-types";

import Logo from "../assets/img/logo.svg";
import "../assets/css/Home.css";

const Home = ({ style , section}) => {
    return (
        <>
            <section id={section.id}>
                <div className="hero">
                    <div id="particles-js" className="burbujas_home">
                        {/*<canvas class="particles-js-canvas-el"></canvas>*/}
                    </div>
                    <div className="inner-header text-center  flex text-white logo_home_center">
                        {
                            //Esto es temporal mientras se decide cual es la mejor idea para el inicio.
                            (() => {
                                switch (style) {
                                    case "onlyLogo":
                                        return (
                                            <div className="logo">
                                                <img
                                                    src={Logo}
                                                    id="logo_home"
                                                    alt=""
                                                />
                                            </div>
                                        );
                                    case "onlyText":
                                        return (
                                            <div className="use_home_grid">
                                                <h1 className="title_home">
                                                    Digitalmente
                                                </h1>
                                                <p className="desc_home">
                                                    Plataforma de salud mental
                                                </p>
                                            </div>
                                        );
                                    case "oneCharacter":
                                        return (
                                            <div className="image_home">
                                                <img
                                                    src="img/personajeHome.svg"
                                                    id="logo_home"
                                                    alt="Logotipo del proyecto"
                                                />
                                            </div>
                                        );
                                    case "twoCharacters":
                                        return (
                                            <>
                                                <div className="image_home">
                                                    <img
                                                        src="img/personajeHome.svg"
                                                        id="logo_home"
                                                        alt="Personaje animado"
                                                    />
                                                </div>
                                                <div className="use_home_grid">
                                                    <img
                                                        src="img/logo.svg"
                                                        id="logo_home"
                                                        alt="Personaje animado"
                                                    />
                                                </div>
                                            </>
                                        );
                                }
                            })()
                        }
                        <div className="w wave"></div>
                        <div className="w wave2"></div>
                        <div className="w wave3"></div>
                        <div className="w wave4"></div>
                    </div>
                </div>
            </section>
            <section id="Section-2">
                <h1>Lorem ipsum</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus sodales ante ut tortor varius, id congue risus
                    vestibulum. Integer consectetur vehicula rutrum. Nunc ipsum
                    tellus, rutrum eget dignissim vitae, eleifend at purus.
                    Donec viverra est quam, et tempor neque elementum non. Donec
                    congue mauris eu sollicitudin faucibus. Quisque vitae congue
                    magna. Suspendisse nec pharetra orci. Mauris lacinia
                    ultrices ante nec elementum. Proin consectetur eros vitae
                    nunc vehicula ultrices. Nam eget libero et massa pulvinar
                    semper vel ac ipsum. Morbi non suscipit dolor, sed tincidunt
                    sem. Nam venenatis nibh non neque malesuada, nec bibendum
                    velit convallis. Quisque non purus tristique tortor
                    scelerisque rutrum ac sit amet nisi. Duis condimentum ex sed
                    nibh hendrerit imperdiet. Aliquam erat volutpat. Fusce
                    posuere felis nisi, ac auctor quam lobortis ac. Donec
                    lobortis malesuada mollis. Vivamus id lobortis lacus. Proin
                    justo mauris, posuere vel eros quis, vulputate vestibulum
                    odio. Nunc at nibh sit amet nibh eleifend elementum ut in
                    orci. Nunc aliquet sem nunc, a laoreet tellus ultricies at.
                    Nullam dapibus est ligula, eget sagittis arcu posuere id.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas. Nulla dictum tempus tristique. Praesent
                    aliquet est eget ipsum convallis, non varius massa
                    pellentesque. Vestibulum orci nulla, auctor in laoreet sit
                    amet, egestas eu ex. Sed sed venenatis mi, vel ornare enim.
                    Nunc sem tortor, commodo vel velit a, vestibulum hendrerit
                    metus. Aenean mattis metus sit amet quam cursus tempor.
                    Suspendisse potenti. Etiam vel est tellus. Cras augue dolor,
                    aliquet facilisis tellus mattis, placerat pharetra magna.
                    Integer sit amet sem a ipsum vestibulum egestas eu vitae
                    eros. Curabitur semper, elit eu venenatis egestas, justo
                    elit placerat massa, porta semper eros lectus sit amet
                    justo. Etiam at elit nec velit euismod feugiat quis id ex.
                    Aliquam sit amet varius magna, non viverra purus.
                    Suspendisse viverra in risus at pretium. Phasellus quam leo,
                    tincidunt non enim vel, sodales interdum velit. Nam nec mi
                    eget libero pretium pellentesque sed ac libero. Vivamus a
                    leo et justo efficitur pellentesque sit amet eu sem. Aliquam
                    eu velit orci. Maecenas varius cursus risus, et consectetur
                    metus bibendum nec. Donec porttitor euismod odio, eu
                    ullamcorper purus pulvinar sit amet. Proin magna sapien,
                    cursus et interdum id, rhoncus et diam. Sed suscipit vitae
                    urna at auctor. Nullam et dui non augue semper hendrerit a
                    at velit. Curabitur ut nisl neque. Nulla mollis ornare
                    maximus. Nam faucibus enim id mauris rhoncus, non facilisis
                    ex dictum. Vivamus hendrerit nisi eu pellentesque lobortis.
                    Donec vitae lectus ligula. Nulla ut malesuada felis. Nulla
                    interdum orci eget consequat iaculis. Ut non quam dui.
                    Mauris a viverra eros. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus. Vestibulum eget justo non velit
                    blandit sagittis at vitae risus. Suspendisse sagittis dolor
                    ut arcu fermentum ultricies. Praesent eget ipsum molestie,
                    aliquet augue non, vestibulum ex. Praesent eu blandit orci,
                    at sagittis enim. Nam sollicitudin feugiat sagittis. Morbi
                    suscipit, neque gravida lobortis pellentesque, augue leo
                    viverra quam, vitae suscipit orci lacus nec mi. Donec
                    tincidunt ullamcorper leo ut venenatis. Aliquam tincidunt,
                    justo et sodales vehicula, libero augue auctor ligula, sed
                    venenatis orci elit id mi. Praesent semper sagittis
                    sollicitudin. Morbi rhoncus dolor at orci viverra, vel
                    congue nulla commodo. Aliquam eleifend lobortis scelerisque.
                    Duis commodo tincidunt accumsan. Nulla convallis diam sed
                    sagittis ultricies. Aenean sit amet dolor et libero
                    dignissim scelerisque. Nullam vehicula condimentum mauris,
                    ac cursus turpis viverra id. Pellentesque eu justo libero.
                    Suspendisse blandit tortor ut orci aliquet mollis. Curabitur
                    imperdiet lectus quis risus aliquet sagittis. Aenean et
                    tortor nibh. Sed scelerisque molestie enim, et iaculis purus
                    finibus vitae. Pellentesque habitant morbi tristique
                    senectus et netus et malesuada fames ac turpis egestas.
                    Vestibulum tincidunt elit eget nisi semper, luctus mattis
                    elit imperdiet. Sed iaculis vulputate vulputate. Donec a
                    vulputate est. Suspendisse pretium urna ac leo interdum, at
                    interdum sem posuere. Morbi eget aliquam lorem. Mauris sit
                    amet justo elit. Quisque porta lacinia nunc, at porta risus.
                    Integer condimentum nisl vel eleifend volutpat. Vivamus
                    lobortis mollis lorem, vel commodo massa facilisis ultrices.
                    Praesent et eros leo. Aliquam quis odio purus. Aliquam erat
                    volutpat. Phasellus sagittis vel urna non feugiat. Praesent
                    aliquet vitae quam tincidunt ornare. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Nam ornare auctor nibh, a vulputate turpis
                    blandit eget. Suspendisse id ipsum ut lorem dignissim
                    pharetra et maximus magna. Donec vel tellus sit amet libero
                    porta luctus et sit amet augue. Ut in vulputate nibh,
                    convallis aliquet eros. Morbi fringilla ligula eu ligula
                    dictum, molestie luctus est fringilla. In dignissim neque et
                    egestas tristique. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos.
                    Vestibulum nec nunc lorem. Quisque suscipit, magna interdum
                    sagittis dapibus, nisl felis lobortis mauris, nec tristique
                    nisi magna non lorem. Vivamus non est sit amet lectus
                    sodales consequat non non ante. Integer vulputate urna quis
                    varius lobortis. Nulla ullamcorper erat vitae ante commodo
                    vehicula. Vivamus vitae dignissim ligula. Morbi id porta
                    diam. Phasellus id est sollicitudin, auctor nisi a,
                    fringilla tellus. Vestibulum gravida nibh quam, sit amet
                    lobortis sem elementum at. Curabitur convallis tellus massa,
                    eget consequat ligula semper eget. Nulla rutrum eros ut dui
                    facilisis tincidunt et quis massa. Nam mollis risus ut magna
                    tempus, nec convallis magna porttitor. Duis placerat congue
                    mollis. Fusce dignissim nisi lectus, ut sagittis nisi
                    feugiat sed. Morbi velit urna, dapibus ut tortor sit amet,
                    vulputate euismod nunc. Curabitur vestibulum volutpat
                    blandit. Sed fermentum eget ex placerat efficitur.
                    Vestibulum tincidunt mollis turpis a congue. Donec non ante
                    dui. Mauris a vulputate magna.
                </p>
            </section>
            <section id="Section-3">
                <h1>Lorem ipsum 2</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus sodales ante ut tortor varius, id congue risus
                    vestibulum. Integer consectetur vehicula rutrum. Nunc ipsum
                    tellus, rutrum eget dignissim vitae, eleifend at purus.
                    Donec viverra est quam, et tempor neque elementum non. Donec
                    congue mauris eu sollicitudin faucibus. Quisque vitae congue
                    magna. Suspendisse nec pharetra orci. Mauris lacinia
                    ultrices ante nec elementum. Proin consectetur eros vitae
                    nunc vehicula ultrices. Nam eget libero et massa pulvinar
                    semper vel ac ipsum. Morbi non suscipit dolor, sed tincidunt
                    sem. Nam venenatis nibh non neque malesuada, nec bibendum
                    velit convallis. Quisque non purus tristique tortor
                    scelerisque rutrum ac sit amet nisi. Duis condimentum ex sed
                    nibh hendrerit imperdiet. Aliquam erat volutpat. Fusce
                    posuere felis nisi, ac auctor quam lobortis ac. Donec
                    lobortis malesuada mollis. Vivamus id lobortis lacus. Proin
                    justo mauris, posuere vel eros quis, vulputate vestibulum
                    odio. Nunc at nibh sit amet nibh eleifend elementum ut in
                    orci. Nunc aliquet sem nunc, a laoreet tellus ultricies at.
                    Nullam dapibus est ligula, eget sagittis arcu posuere id.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas. Nulla dictum tempus tristique. Praesent
                    aliquet est eget ipsum convallis, non varius massa
                    pellentesque. Vestibulum orci nulla, auctor in laoreet sit
                    amet, egestas eu ex. Sed sed venenatis mi, vel ornare enim.
                    Nunc sem tortor, commodo vel velit a, vestibulum hendrerit
                    metus. Aenean mattis metus sit amet quam cursus tempor.
                    Suspendisse potenti. Etiam vel est tellus. Cras augue dolor,
                    aliquet facilisis tellus mattis, placerat pharetra magna.
                    Integer sit amet sem a ipsum vestibulum egestas eu vitae
                    eros. Curabitur semper, elit eu venenatis egestas, justo
                    elit placerat massa, porta semper eros lectus sit amet
                    justo. Etiam at elit nec velit euismod feugiat quis id ex.
                    Aliquam sit amet varius magna, non viverra purus.
                    Suspendisse viverra in risus at pretium. Phasellus quam leo,
                    tincidunt non enim vel, sodales interdum velit. Nam nec mi
                    eget libero pretium pellentesque sed ac libero. Vivamus a
                    leo et justo efficitur pellentesque sit amet eu sem. Aliquam
                    eu velit orci. Maecenas varius cursus risus, et consectetur
                    metus bibendum nec. Donec porttitor euismod odio, eu
                    ullamcorper purus pulvinar sit amet. Proin magna sapien,
                    cursus et interdum id, rhoncus et diam. Sed suscipit vitae
                    urna at auctor. Nullam et dui non augue semper hendrerit a
                    at velit. Curabitur ut nisl neque. Nulla mollis ornare
                    maximus. Nam faucibus enim id mauris rhoncus, non facilisis
                    ex dictum. Vivamus hendrerit nisi eu pellentesque lobortis.
                    Donec vitae lectus ligula. Nulla ut malesuada felis. Nulla
                    interdum orci eget consequat iaculis. Ut non quam dui.
                    Mauris a viverra eros. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus. Vestibulum eget justo non velit
                    blandit sagittis at vitae risus. Suspendisse sagittis dolor
                    ut arcu fermentum ultricies. Praesent eget ipsum molestie,
                    aliquet augue non, vestibulum ex. Praesent eu blandit orci,
                    at sagittis enim. Nam sollicitudin feugiat sagittis. Morbi
                    suscipit, neque gravida lobortis pellentesque, augue leo
                    viverra quam, vitae suscipit orci lacus nec mi. Donec
                    tincidunt ullamcorper leo ut venenatis. Aliquam tincidunt,
                    justo et sodales vehicula, libero augue auctor ligula, sed
                    venenatis orci elit id mi. Praesent semper sagittis
                    sollicitudin. Morbi rhoncus dolor at orci viverra, vel
                    congue nulla commodo. Aliquam eleifend lobortis scelerisque.
                    Duis commodo tincidunt accumsan. Nulla convallis diam sed
                    sagittis ultricies. Aenean sit amet dolor et libero
                    dignissim scelerisque. Nullam vehicula condimentum mauris,
                    ac cursus turpis viverra id. Pellentesque eu justo libero.
                    Suspendisse blandit tortor ut orci aliquet mollis. Curabitur
                    imperdiet lectus quis risus aliquet sagittis. Aenean et
                    tortor nibh. Sed scelerisque molestie enim, et iaculis purus
                    finibus vitae. Pellentesque habitant morbi tristique
                    senectus et netus et malesuada fames ac turpis egestas.
                    Vestibulum tincidunt elit eget nisi semper, luctus mattis
                    elit imperdiet. Sed iaculis vulputate vulputate. Donec a
                    vulputate est. Suspendisse pretium urna ac leo interdum, at
                    interdum sem posuere. Morbi eget aliquam lorem. Mauris sit
                    amet justo elit. Quisque porta lacinia nunc, at porta risus.
                    Integer condimentum nisl vel eleifend volutpat. Vivamus
                    lobortis mollis lorem, vel commodo massa facilisis ultrices.
                    Praesent et eros leo. Aliquam quis odio purus. Aliquam erat
                    volutpat. Phasellus sagittis vel urna non feugiat. Praesent
                    aliquet vitae quam tincidunt ornare. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Nam ornare auctor nibh, a vulputate turpis
                    blandit eget. Suspendisse id ipsum ut lorem dignissim
                    pharetra et maximus magna. Donec vel tellus sit amet libero
                    porta luctus et sit amet augue. Ut in vulputate nibh,
                    convallis aliquet eros. Morbi fringilla ligula eu ligula
                    dictum, molestie luctus est fringilla. In dignissim neque et
                    egestas tristique. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos.
                    Vestibulum nec nunc lorem. Quisque suscipit, magna interdum
                    sagittis dapibus, nisl felis lobortis mauris, nec tristique
                    nisi magna non lorem. Vivamus non est sit amet lectus
                    sodales consequat non non ante. Integer vulputate urna quis
                    varius lobortis. Nulla ullamcorper erat vitae ante commodo
                    vehicula. Vivamus vitae dignissim ligula. Morbi id porta
                    diam. Phasellus id est sollicitudin, auctor nisi a,
                    fringilla tellus. Vestibulum gravida nibh quam, sit amet
                    lobortis sem elementum at. Curabitur convallis tellus massa,
                    eget consequat ligula semper eget. Nulla rutrum eros ut dui
                    facilisis tincidunt et quis massa. Nam mollis risus ut magna
                    tempus, nec convallis magna porttitor. Duis placerat congue
                    mollis. Fusce dignissim nisi lectus, ut sagittis nisi
                    feugiat sed. Morbi velit urna, dapibus ut tortor sit amet,
                    vulputate euismod nunc. Curabitur vestibulum volutpat
                    blandit. Sed fermentum eget ex placerat efficitur.
                    Vestibulum tincidunt mollis turpis a congue. Donec non ante
                    dui. Mauris a vulputate magna.
                </p>
            </section>
        </>
    );
};

Home.propTypes = {
    style: PropTypes.string,
};

export default Home;
