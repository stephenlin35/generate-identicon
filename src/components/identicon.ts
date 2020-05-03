import React from 'react';
const randomColor = require("randomcolor");
import generateString from '../util/randomize';
import defaultPattern from "../util/pattern";

export const Identicon = ({
  color = randomColor(),
  string = generateString(),
  pattern = defaultPattern(string)
}) => {

  const _renderTiles = (tiles: boolean[]) => {
    const color = randomColor();
    let index = 0;

    _clearTiles();

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 3; j++) {
        if (tiles[index]) {
          const tile = $.querySelector<SVGRectElement>(`.\\3${i}-${j}`);
          if (tile === null) throw new Error("Tile not found");
          tile.setAttribute("fill", `${color}`);

          if (j < 2) {
            const mirror_tile = $.querySelector<SVGRectElement>(
              `.\\3${i}-${j === 0 ? j + 4 : j + 2}`
            );
            if (mirror_tile === null) throw new Error("Mirror Tile not found");
            mirror_tile.setAttribute("fill", `${color}`);
          }
        }
        index++;
      }
    }


    return (
      <svg id= "mySvg" width = "150" height = "150" >
        <!--Full SVG Background-- >
          <rect x="0" y = "0" width = "150" height = "150" fill = "#efeded" />

            <!--First Row-- >
              <rect class="point 0-0" x = "0" y = "0" width = "30" height = "30" fill = "#efeded" />
                <rect class="point 0-1" x = "30" y = "0" width = "30" height = "30" fill = "#efeded" />
                  <rect class="point 0-2" x = "60" y = "0" width = "30" height = "30" fill = "#efeded" />
                    <rect class="point 0-3" x = "90" y = "0" width = "30" height = "30" fill = "#efeded" />
                      <rect class="point 0-4" x = "120" y = "0" width = "30" height = "30" fill = "#efeded" />

                        <!--Second Row-- >
                          <rect class="point 1-0" x = "0" y = "30" width = "30" height = "30" fill = "#efeded" />
                            <rect class="point 1-1" x = "30" y = "30" width = "30" height = "30" fill = "#efeded" />
                              <rect class="point 1-2" x = "60" y = "30" width = "30" height = "30" fill = "#efeded" />
                                <rect class="point 1-3" x = "90" y = "30" width = "30" height = "30" fill = "#efeded" />
                                  <rect class="point 1-4" x = "120" y = "30" width = "30" height = "30" fill = "#efeded" />

                                    <!--Third Row-- >
                                      <rect class="point 2-0" x = "0" y = "60" width = "30" height = "30" fill = "#efeded" />
                                        <rect class="point 2-1" x = "30" y = "60" width = "30" height = "30" fill = "#efeded" />
                                          <rect class="point 2-2" x = "60" y = "60" width = "30" height = "30" fill = "#efeded" />
                                            <rect class="point 2-3" x = "90" y = "60" width = "30" height = "30" fill = "#efeded" />
                                              <rect class="point 2-4" x = "120" y = "60" width = "30" height = "30" fill = "#efeded" />

                                                <!--Fourth Row-- >
                                                  <rect class="point 3-0" x = "0" y = "90" width = "30" height = "30" fill = "#efeded" />
                                                    <rect class="point 3-1" x = "30" y = "90" width = "30" height = "30" fill = "#efeded" />
                                                      <rect class="point 3-2" x = "60" y = "90" width = "30" height = "30" fill = "#efeded" />
                                                        <rect class="point 3-3" x = "90" y = "90" width = "30" height = "30" fill = "#efeded" />
                                                          <rect class="point 3-4" x = "120" y = "90" width = "30" height = "30" fill = "#efeded" />

                                                            <!--Fifth Row-- >
                                                              <rect class="point 4-0" x = "0" y = "120" width = "30" height = "30" fill = "#efeded" />
                                                                <rect class="point 4-1" x = "30" y = "120" width = "30" height = "30" fill = "#efeded" />
                                                                  <rect class="point 4-2" x = "60" y = "120" width = "30" height = "30" fill = "#efeded" />
                                                                    <rect class="point 4-3" x = "90" y = "120" width = "30" height = "30" fill = "#efeded" />
                                                                      <rect id="myRect" class="point 4-4" x = "120" y = "120" width = "30" height = "30" fill = "#efeded" />
                                                                        </svg>
  );
};
