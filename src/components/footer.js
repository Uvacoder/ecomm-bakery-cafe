import * as React from "react"
import { Icon, VisuallyHidden } from "reflexjs"

export function Footer({ name, copyright, links, iconLinks, children, ...props }) {
  return (
    <section py={[8, 10, 12]} bg="heading" color="offWhite" pt="108px" pb="80px" {...props}>
      <div variant="container">
        <div
          display="flex"
          alignItems="center"
          flexDirection="column|row"
          justifyContent="center|space-between"
        >
          <div>
            <img src="/images/logo.png" alt="Emili's Café" width="120px" mb="8" />
            <div display="grid" col="2|4" gap="16|8" py="4">
              <div>
                <h3 variant="heading.h2" letterSpacing="1" fontFamily="headingLight" color="background" pb="1">Location</h3>
                <address>
                  <a href="https://goo.gl/maps/ySwtX1o3YSff2gHx8" fontStyle="normal" fontSize="lg|xl" color="muted">
                    11551 Santa Monica Blvd. #3<br />
                    Los Angeles, CA 90025
                  </a>
                </address>
              </div>
              <div>
                <h3 variant="heading.h2" letterSpacing="1" fontFamily="headingLight" color="background" pb="1">Contact</h3>
                <address fontSize="lg|xl" color="muted">
                  <a href="tel:+13104736999" fontStyle="normal">(310) 473-6999</a><br />
                  <a href="mailto:info@emiliscafe.com" fontStyle="normal">info@emiliscafe.com</a>
                </address>
              </div>
              <div>
                <h3 variant="heading.h2" letterSpacing="1" fontFamily="headingLight" color="background" pb="1">Hours</h3>
                <p fontSize="lg|xl" color="muted">
                  Mon: 9am-5pm <br />
                  Tue-Sat: 8am-7pm <br />
                  Sun: 9am-7pm <br />
                </p>
              </div>
              <div>
                <h3 variant="heading.h2" letterSpacing="1" fontFamily="headingLight" color="background" pb="1">Social</h3>
                <p fontSize="lg|xl" color="muted">
                  <a href="https://www.yelp.com/biz/emilis-pastry-and-cafe-west-los-angeles">Yelp</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {copyright && (
          <div
            display="flex"
            alignItems="center"
            justifyContent="center|space-between"
            borderTopWidth={1}
            textAlign="center"
            pt="4|5|6"
            mt="4|5|6"
          >
            <p variant="text.sm" my="0" color="muted">
              {copyright}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
