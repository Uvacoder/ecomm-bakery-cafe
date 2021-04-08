import * as React from "react"
import { Layout } from "../components"
import InnerHero from "../blocks/innerhero"
import Gallery from "react-photo-gallery";
// import SimpleReactLightbox from 'simple-react-lightbox'
// import { SRLWrapper } from "simple-react-lightbox";

const photos = [
    {
        src: '/images/pastries.jpg',
        width: 1,
        height: 1
    },
    {
        src: '/images/IMG_4343.jpg',
        width: 1800,
        height: 1200
    },
    {
        src: '/images/IMG_7929.jpeg',
        width: 3,
        height: 4
    },
    {
        src: '/images/about-3.jpg',
        width: 1,
        height: 1
    },
    {
        src: '/images/IMG_4364.jpg',
        width: 1800,
        height: 1200
    },
    {
        src: '/images/IMG_4344.jpg',
        width: 1800,
        height: 1200
    },
    {
        src: '/images/IMG_4370.jpg',
        width: 1800,
        height: 1200
    },
    {
        src: '/images/IMG_4362.jpg',
        width: 1800,
        height: 1200
    },
    {
        src: '/images/IMG_4359.jpg',
        width: 1800,
        height: 1200
    },
    {
        src: '/images/19RXL0CD.png',
        width: 1400,
        height: 1110
    },
    {
        src: '/images/9.jpg',
        width: 1052,
        height: 1129
    },
    {
        src: '/images/27.jpg',
        width: 900,
        height: 1200
    },
    {
        src: '/images/35.jpg',
        width: 869,
        height: 600
    },
    {
        src: '/images/7QnCUGFT.png',
        width: 945,
        height: 1200
    },
    {
        src: '/images/HsocGn4W.png',
        width: 1500,
        height: 1110
    },
    {
        src: '/images/IMG_4566.jpg',
        width: 1000,
        height: 1500
    },
    {
        src: '/images/IMG_4574.jpg',
        width: 1500,
        height: 1000
    },
    {
        src: '/images/IMG_4612.jpg',
        width: 1200,
        height: 800
    },

    {
        src: '/images/holidayitems2.jpg',
        width: 1200,
        height: 1800,
    },
    {
        src: '/images/holidayitems.jpg',
        width: 1800,
        height: 1200
    },
    {
        src: '/images/halloweenstorefront.jpg',
        width: 1800,
        height: 1350
    },
    {
        src: '/images/IMG_8573.jpg',
        width: 1500,
        height: 2000
    },
    {
        src: '/images/IMG_8565.jpg',
        width: 3,
        height: 4
    },
    {
        src: '/images/IMG_8546.jpg',
        width: 3,
        height: 4
    },
    {
        src: '/images/IMG_8589.jpg',
        width: 1350,
        height: 1800
    },
    {
        src: '/images/IMG_8593.jpg',
        width: 1800,
        height: 1350
    },
    {
        src: '/images/IMG_8568.jpg',
        width: 2000,
        height: 1500
    },
    {
        src: '/images/lunch.jpg',
        width: 1,
        height: 1
    },
];

const options = {
    settings: {
        overlayColor: "rgba(30,30,36,0.9)",
        autoplaySpeed: 1500,
        transitionSpeed: 900,
    },
    buttons: {
        showAutoplayButton: false,
        showCloseButton: true,
        showDownloadButton: false,
        showFullscreenButton: false,
        showNextButton: true,
        showPrevButton: true,
        showThumbnailsButton: false,
    },
    caption: {
        showCaption: false,
    },
    thumbnails: {
        showThumbnails: false,
    },
}

export default function GalleryPage() {
    return (
        <Layout>
            <InnerHero
                image="url('/images/gallery-bg.png')"
                subheading="Gallery"
                heading=""
            />
            {/* <SimpleReactLightbox> */}
            <section>
                <div variant="container">
                    {/* <SRLWrapper options={options}> */}
                    <Gallery photos={photos} direction={"column"} />
                    {/* </SRLWrapper> */}
                </div>
            </section>
            {/* </SimpleReactLightbox> */}
        </Layout>
    )
}