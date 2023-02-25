import { Route } from "react-router-dom";
import SiteRoutes from "_routes/Site.routes";
import { PUBLIC_URL } from "_settings/path.routes";
import { ROOT_DOM_ID } from "_settings/constants";

const underConstructionCode = `
    const workerBody = [{ x: 30, z: 30 }, { x: 18, z: 30 }, { x: 17.8971, z: 29.1592 }, { x: 17.3814, z: 28.9083 }, { x: 16.8786, z: 29.0309 }, { bezier: [{ x: 17, z: 29 }, { x: 7, z: 29 }, { x: 6, z: 37 }, { x: 6, z: 44 },] }, { x: 6, z: 44 }, { x: 15.5, z: 44 }, { x: 15.5, z: 34 }, { x: 15.5, z: 33.5 }, { x: 15.9, z: 33 }, { x: 17, z: 33 }, { x: 17.5, z: 33 }, { x: 18, z: 33.5 }, { x: 18, z: 34 }, { x: 18, z: 44 }, { x: 30, z: 44 }, { x: 30, z: 34 }, { x: 30.5, z: 33 }, { x: 31, z: 33 }, { x: 32, z: 33 }, { x: 32.5, z: 33.5 }, { x: 32.5, z: 34 }, { x: 32.5, z: 44 }, { x: 42, z: 44 }, { x: 42, z: 37 }, { bezier: [{ x: 42, z: 37 }, { x: 40, z: 30 }, { x: 31.1214, z: 29.0309 },] }, { x: 31.1214, z: 29.0309 }, { x: 30.6186, z: 28.9083 }, { x: 30.1029, z: 29.1592 }, { x: 29.8746, z: 29.6236 }, { x: 29.8746, z: 29.6236 },], workerCap = [{ x: 25, z: 4.91406 }, { x: 26.0674, z: 5.05142 }, { x: 27.0785, z: 5.40145 }, { x: 28, z: 5.8952 }, { x: 28, z: 5.8952 }, { x: 28, z: 8.99958 }, { x: 28, z: 8.99958 }, { x: 28, z: 9.55187 }, { x: 28.4477, z: 9.99958 }, { x: 29, z: 9.99958 }, { x: 29.5523, z: 9.99958 }, { x: 30, z: 9.55187 }, { x: 30, z: 8.99958 }, { x: 30, z: 8.99958 }, { x: 30, z: 7.30074 }, { x: 30, z: 7.30074 }, { x: 31.2334, z: 8.4022 }, { x: 32.1606, z: 9.73931 }, { x: 32.6383, z: 11.0162 }, { x: 32.6565, z: 11.4852 }, { x: 32.6057, z: 11.9698 }, { x: 32.5138, z: 12.4412 }, { x: 32.3972, z: 13.0396 }, { x: 32.2213, z: 13.5777 }, { x: 32.0735, z: 13.9675 }, { x: 31.9999, z: 14.1617 }, { x: 31.934, z: 14.3173 }, { x: 31.8871, z: 14.423 }, { x: 31.8636, z: 14.4758 }, { x: 31.845, z: 14.5161 }, { x: 31.8326, z: 14.5424 }, { x: 31.8326, z: 14.5424 }, { x: 31.8189, z: 14.5712 }, { x: 31.8189, z: 14.5712 }, { x: 31.8189, z: 14.5712 }, { x: 31.8154, z: 14.5783 }, { x: 31.8154, z: 14.5783 }, { x: 31.6807, z: 14.8503 }, { x: 31.7918, z: 15.18 }, { x: 32.0637, z: 15.315 }, { x: 32.3358, z: 15.4501 }, { x: 32.6658, z: 15.339 }, { x: 32.8009, z: 15.0669 }, { x: 32.8009, z: 15.0669 }, { x: 32.3158, z: 14.8261 }, { x: 32.3158, z: 14.8261 }, { x: 32.8009, z: 15.0669 }, { x: 32.8012, z: 15.0663 }, { x: 32.8013, z: 15.0662 }, { x: 32.8013, z: 15.0662 }, { x: 32.8019, z: 15.065 }, { x: 32.8019, z: 15.065 }, { x: 32.8019, z: 15.065 }, { x: 32.8035, z: 15.0616 }, { x: 32.8035, z: 15.0616 }, { x: 32.8035, z: 15.0616 }, { x: 32.8089, z: 15.0505 }, { x: 32.8089, z: 15.0505 }, { x: 32.8089, z: 15.0505 }, { x: 32.8276, z: 15.0113 }, { x: 32.8276, z: 15.0113 }, { x: 32.8434, z: 14.9779 }, { x: 32.8655, z: 14.93 }, { x: 32.8926, z: 14.8691 }, { x: 32.9466, z: 14.7473 }, { x: 33.0204, z: 14.5729 }, { x: 33.1021, z: 14.3575 }, { x: 33.2649, z: 13.928 }, { x: 33.4617, z: 13.3281 }, { x: 33.5935, z: 12.6516 }, { x: 33.6163, z: 12.5346 }, { x: 33.6374, z: 12.414 }, { x: 33.6561, z: 12.2904 }, { x: 34.5129, z: 13.4107 }, { x: 35, z: 14.5716 }, { x: 35, z: 15.5747 }, { x: 35, z: 18.7641 }, { x: 30.0751, z: 19.1497 }, { x: 24, z: 19.1497 }, { x: 17.9249, z: 19.1497 }, { x: 13, z: 18.7641 }, { x: 13, z: 15.5747 }, { x: 13, z: 14.6346 }, { x: 13.4278, z: 13.556 }, { x: 14.1868, z: 12.502 }, { x: 14.1542, z: 13.3989 }, { x: 14.333, z: 14.3435 }, { x: 14.9369, z: 15.1757 }, { x: 15.1172, z: 15.4241 }, { x: 15.4608, z: 15.4827 }, { x: 15.7044, z: 15.3067 }, { x: 15.9481, z: 15.1306 }, { x: 15.9994, z: 14.7865 }, { x: 15.8191, z: 14.5381 }, { x: 15.1018, z: 13.5497 }, { x: 15.1944, z: 12.2339 }, { x: 15.5559, z: 11.0415 }, { x: 15.7318, z: 10.461 }, { x: 15.9606, z: 9.94772 }, { x: 16.1466, z: 9.57826 }, { x: 16.2393, z: 9.39423 }, { x: 16.3204, z: 9.24764 }, { x: 16.3776, z: 9.14826 }, { x: 16.4062, z: 9.09861 }, { x: 16.4288, z: 9.06086 }, { x: 16.4437, z: 9.03624 }, { x: 16.4437, z: 9.03624 }, { x: 16.4603, z: 9.00933 }, { x: 16.4603, z: 9.00933 }, { x: 16.4603, z: 9.00933 }, { x: 16.4644, z: 9.00269 }, { x: 16.4644, z: 9.00269 }, { x: 16.4691, z: 8.99535 }, { x: 16.4735, z: 8.98793 }, { x: 16.4778, z: 8.98044 }, { x: 16.9075, z: 8.38893 }, { x: 17.4199, z: 7.81877 }, { x: 18, z: 7.30073 }, { x: 18, z: 7.30073 }, { x: 18, z: 8.99958 }, { x: 18, z: 8.99958 }, { x: 18, z: 9.55187 }, { x: 18.4477, z: 9.99958 }, { x: 19, z: 9.99958 }, { x: 19.5523, z: 9.99958 }, { x: 20, z: 9.55187 }, { x: 20, z: 8.99958 }, { x: 20, z: 8.99958 }, { x: 20, z: 5.89519 }, { x: 20, z: 5.89519 }, { x: 20.9215, z: 5.40145 }, { x: 21.9326, z: 5.05142 }, { x: 23, z: 4.91406 }, { x: 23, z: 4.91406 }, { x: 23, z: 6.99958 }, { x: 23, z: 6.99958 }, { x: 23, z: 7.55187 }, { x: 23.4477, z: 7.99958 }, { x: 24, z: 7.99958 }, { x: 24.5523, z: 7.99958 }, { x: 25, z: 7.55187 }, { x: 25, z: 6.99958 }, { x: 25, z: 6.99958 }, { x: 25, z: 4.91406 }, { x: 25, z: 4.91406 }, { x: 25, z: 4.91406 }, { x: 25, z: 4.91406 }, { x: 25, z: 4.91406 },]; function makeWall(_) { var x = new Zdog.Anchor({ addTo: _.frame, rotate: _.rotate }), z = new Zdog.Anchor({ addTo: x, translate: { z: 4 } }), $ = new Zdog.Anchor({ addTo: z, translate: { x: -4, y: -4 } }), e = new Zdog.Rect({ addTo: $, width: 1, height: 1, stroke: 0, translate: { z: 1 }, color: _.outside }); e.copy({ translate: { x: -1 }, rotate: { y: _.TAU / 4 }, color: _.left }), e.copy({ translate: { x: 1 }, rotate: { y: -_.TAU / 4 }, color: _.right }), e.copy({ translate: { z: -1 }, rotate: { y: _.TAU / 2 }, color: _.inside }), e.copy({ translate: { y: -1 }, rotate: { x: _.TAU / 4 }, color: _.primary }), $.copyGraph({ translate: { x: 0, y: -4 } }), new Zdog.Rect({ addTo: z, width: 1, height: 1, color: _.primary, stroke: 0, rotate: { x: _.TAU / 4 }, translate: { x: -2, y: -3 } }).copy({ translate: { x: 2, y: -3 } }); let t = new Zdog.Shape({ addTo: _.frame, fill: !0, backface: !0, scale: .1, translate: { x: 2.3, z: -2.3 }, rotate: { y: _.TAU / 4 }, color: "#000", stroke: 0, path: workerBody }); new Zdog.Shape({ addTo: t, fill: !0, front: !0, stroke: 0, color: "#f2a417", backface: !0, path: workerCap }), new Zdog.Shape({ addTo: z, path: [{ x: 0, y: 0 }, { bezier: [{ x: 1.1, y: 0 }, { x: 1.1, y: .2 }, { x: 1.1, y: .5 },] }, { bezier: [{ x: 1.1, y: 1.1 }, { x: .2, y: 1.8 }, { x: 0, y: 1.8 },] }, { bezier: [{ x: -.2, y: 1.8 }, { x: -1.1, y: 1.1 }, { x: -1.1, y: .5 },] }, { bezier: [{ x: -1.1, y: .2 }, { x: -1.1, y: 0 }, { x: 0, y: 0 },] },], translate: { y: 2, z: -.5 }, stroke: 0, backface: !0, color: _.left }).copyGraph({ scale: { x: -1 }, color: _.right }) } var illoElem = document.querySelector(".illo"), illoSize = 20, minWindowSize = Math.min(window.innerWidth - 20, window.innerHeight - 40), zoom = Math.floor(minWindowSize / illoSize); illoElem.setAttribute("width", illoSize * zoom), illoElem.setAttribute("height", illoSize * zoom), [Zdog.Shape, Zdog.Rect].forEach(function (_) { _.defaults.fill = !0, _.defaults.backface = !1, _.defaults.stroke = 1 / zoom }); var white = "#f2a417", black = "black", TAU = Zdog.TAU, illo = new Zdog.Illustration({ element: illoElem, zoom: zoom }); makeWall({ rotate: {}, outside: white, inside: black, left: white, right: black, frame: illo, primary: black, secondary: white, TAU }), makeWall({ rotate: { y: -TAU / 4 }, outside: black, inside: white, left: white, right: black, frame: illo, primary: black, secondary: white, TAU }), makeWall({ rotate: { y: -TAU / 2 }, outside: black, inside: white, left: black, right: white, frame: illo, primary: black, secondary: white, TAU }), makeWall({ rotate: { y: -3 * TAU / 4 }, outside: white, inside: black, left: black, right: white, frame: illo, primary: black, secondary: white, TAU }); var ticker = 0, cycleCount = 105, keyframes = [{ x: 0 * TAU, y: 1 * TAU / 4 }, { x: -35 * TAU / 360, y: 5 * TAU / 8 }, { x: -1 * TAU / 4, y: 3 * TAU / 4 }, { x: -35 * TAU / 360, y: 9 * TAU / 8 }, { x: 0 * TAU, y: 5 * TAU / 4 },]; function animate() { var _ = ticker / cycleCount, x = Zdog.easeInOut(_ % 1, 4), z = Math.floor(_ % (keyframes.length - 1)), $ = keyframes[z], e = keyframes[z + 1]; illo.rotate.x = Zdog.lerp($.x, e.x, x), illo.rotate.y = Zdog.lerp($.y, e.y, x), ticker++, illo.updateRenderGraph(), requestAnimationFrame(animate) } animate();
`;

const Body = () => (
    <body>
        <div id={ROOT_DOM_ID}>
            <Route
                path={PUBLIC_URL}
                render={props => (
                    <SiteRoutes
                        {...props}
                        // eslint-disable-next-line @typescript-eslint/no-require-imports
                        importContent={path => require(`../../content/${path}`)}
                    />
                )}
            />
        </div>
        <div className="under-construction" style={{ "zIndex": 5 }}>
            <div className="canvas-container">
                <canvas className="illo"></canvas>
            </div>

            <div className="tape">
                <div className="clearance-tape ">
                    <div className="content-block">
                        <div className="ticker-wrap">
                            <div className="ticker ticker-1">
                                <div className="ticker__item warn-text">
                                    Under Construction
                                </div>
                                <div className="ticker__item warn-text">
                                    Under Construction
                                </div>
                                <div className="ticker__item warn-text">
                                    Under Construction
                                </div>
                                <div className="ticker__item warn-text">
                                    Under Construction
                                </div>
                                <div className="ticker__item warn-text">
                                    Under Construction
                                </div>
                                <div className="ticker__item warn-text">
                                    Under Construction
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script dangerouslySetInnerHTML={{ "__html": underConstructionCode }} />
    </body>
);

export default Body;
