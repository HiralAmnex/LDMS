// Author : Purvesh Dave

window.onload = function() {
    let fetchCount = 0; // Counter to track setInterval executions
    async function fetchBackendData() {
        try {
            let data = pythonData.SLD_data;
           
            console.log("Data:", data);  // Debugging log
            // console.log("Data type:", typeof data);  // Debugging log
            const response = await fetch('/fetch_data/');  // Call Django API
            const recieved_data = await response.json();  // Convert response to JSON (dictionary)

            // console.clear();  
            d3.select("#mySvg").selectAll("*").remove();

            data = recieved_data.final_data
            console.log("Data:::::::::::", data);
            console.log('************************')

            // Get the screen dimensions
            const screenWidth = 0;
            const screenHeight = window.innerHeight - 50;
            let mathmaxh = Math.max(600, screenHeight);
            // console.log("mathmaxh ::: ", mathmaxh)

            // Get the SVG container
            const svgContainer = document.getElementById('mySvg');
            // Set the SVG container size based on screen size (optional)

            svgContainer.setAttribute('height', mathmaxh);
            // svgContainer.style.border = "2px solid black";
            // svgContainer.style.paddingLeft = "100px";
            // svgContainer.style.marginLeft = "100px";


            // Create a group top element
            const grouptop = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            grouptop.setAttribute('id', 'top-part-circuit');

            const groupmiddle = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            groupmiddle.setAttribute('id', 'middle-part-circuit');

            const svgNamespace = "http://www.w3.org/2000/svg";

            // Function to create a text element
            function createTextElement(x, y, text, fontSize, fontFamily, fontWeight, fillColor) {
                const textElement = document.createElementNS(svgNamespace, "text");
                textElement.setAttribute("x", x);
                textElement.setAttribute("y", y);
                textElement.setAttribute("fill", fillColor || "#333");
                textElement.setAttribute("font-size", fontSize);
                textElement.setAttribute("font-family", fontFamily);
                if (fontWeight) textElement.setAttribute("font-weight", fontWeight);
                textElement.textContent = text;
                return textElement;
            }

            // Function to create a rectangle element
            function createRectElement(x, y, width, height, fill, stroke) {
                const rectElement = document.createElementNS(svgNamespace, "rect");
                rectElement.setAttribute("x", x);
                rectElement.setAttribute("y", y);
                rectElement.setAttribute("width", width);
                rectElement.setAttribute("height", height);
                rectElement.setAttribute("fill", fill);
                rectElement.setAttribute("stroke", stroke);
                return rectElement;
            }

            // Function to create a line element
            function createLineElement(x1, y1, x2, y2, stroke, strokeWidth) {
                const lineElement = document.createElementNS(svgNamespace, "line");
                lineElement.setAttribute("x1", x1);
                lineElement.setAttribute("y1", y1);
                lineElement.setAttribute("x2", x2);
                lineElement.setAttribute("y2", y2);
                lineElement.setAttribute("stroke", stroke);
                lineElement.setAttribute("stroke-width", strokeWidth);
                return lineElement;
            }

            // Function to create a circle element
            function createCircleElement(cx, cy, r, fill, stroke) {
                const circleElement = document.createElementNS(svgNamespace, "circle");
                circleElement.setAttribute("cx", cx);
                circleElement.setAttribute("cy", cy);
                circleElement.setAttribute("r", r);
                circleElement.setAttribute("fill", fill);
                circleElement.setAttribute("stroke", stroke);
                return circleElement;
            }

            function createCircle(cx, cy, r, fill = "none", stroke = "none") {
                const circle = document.createElementNS(svgNamespace, "circle");
                circle.setAttribute("cx", cx);
                circle.setAttribute("cy", cy);
                circle.setAttribute("r", r);
                circle.setAttribute("fill", fill);
                circle.setAttribute("stroke", stroke);
                return circle;
            }
            // +++++++++++ Dynamic icon create ++++++++++++++++

            // Function to create a circle element
            function createCircle(cx, cy, r, fill = "none", stroke = "none") {
                const circle = document.createElementNS(svgNamespace, "circle");
                circle.setAttribute("cx", cx);
                circle.setAttribute("cy", cy);
                circle.setAttribute("r", r);
                circle.setAttribute("fill", fill);
                circle.setAttribute("stroke", stroke);
                return circle;
            }
            // Function to create a group element
            function createGroup(id, transform, attributes = {}) {
                const group = document.createElementNS(svgNamespace, "g");
                group.setAttribute("id", id);
                group.setAttribute("transform", transform);
                Object.keys(attributes).forEach(key => {
                    group.setAttribute(key, attributes[key]);
                });
                return group;
            }

            // Function to create a path element
            function createPath(d, fill = "none", stroke = "none", strokeLineCap = null, strokeLineJoin = null) {
                const path = document.createElementNS(svgNamespace, "path");
                path.setAttribute("d", d);
                path.setAttribute("fill", fill);
                if (stroke) path.setAttribute("stroke", stroke);
                if (strokeLineCap) path.setAttribute("stroke-linecap", strokeLineCap);
                if (strokeLineJoin) path.setAttribute("stroke-linejoin", strokeLineJoin);
                return path;
            }

            // Function to create a line element
            function createLine(y2, transform, stroke, strokeWidth, strokeLineCap = "round") {
                const line = document.createElementNS(svgNamespace, "line");
                line.setAttribute("y2", y2);
                line.setAttribute("transform", transform);
                line.setAttribute("stroke", stroke);
                line.setAttribute("stroke-width", strokeWidth);
                line.setAttribute("stroke-linecap", strokeLineCap);
                return line;
            }

            // ---------------------------------------------------

            function appendDataToSVG(svg, config) {
                const {
                    incomingLineCount,
                    incLineStatus,
                    incCBStatus,
                    mainBusLineCouplerStatus,
                    transformerVoltageLineStatus,
                    transformerCount,
                    transformerFeederCounts,
                    feederNames,
                    feederCBStatus,
                    solarCount,
                    solarPosition,
                    solarNames,
                    solarCBStatus,
                    solarIncomingLineStatus,
                    incomingLineAssignments,
                    trfTopCBStatus,
                    trfBottomCBStatus,
                    subBusLineCouplerStatus
                } = config;

                // Check and update transformerVoltageLineStatus based on incoming line and CB status
                for (let i = 0; i < transformerCount; i++) {

                    if (
                        (config.incLineStatus[i] === "on" && config.incCBStatus[i] === "off") ||
                        (config.incLineStatus[i] === "off" && config.incCBStatus[i] === "on") ||
                        (config.incLineStatus[i] === "off" && config.incCBStatus[i] === "off") ||
                        (config.trfTopCBStatus[i] === "off" && config.incCBStatus[i] === "off") ||
                        config.incCBStatus[i] === "error"
                    ) {
                        config.transformerVoltageLineStatus[i] = "off";
                    } else {
                        config.transformerVoltageLineStatus[i] = "on";
                    }
                }
                // ############################ DATA DICTIONARY ############################
                // ############################ DATA DICTIONARY ############################
                const margin = 100; // Margin between feeders
                const feederWidth = 20; // Width of each feeder
                const transformerMargin = 60; // Margin from connecting circle
                let xOffset = 150; // Initial horizontal offset
                let yOffset = 50; // Vertical offset
                const svgNamespace = "http://www.w3.org/2000/svg";
               
                // Helper functions to create SVG elements
                function createLineElement(x1, y1, x2, y2, color, strokeWidth, strokeDasharray) {
                    const line = document.createElementNS(svgNamespace, "line");
                    line.setAttribute("x1", x1);
                    line.setAttribute("y1", y1);
                    line.setAttribute("x2", x2);
                    line.setAttribute("y2", y2);
                    line.setAttribute("stroke", color);
                    line.setAttribute("stroke-width", strokeWidth);
                    if (strokeDasharray) {
                        line.setAttribute("stroke-dasharray", strokeDasharray);
                    }
                    return line;
                }

                function createCircleElement(cx, cy, r, fill, stroke, strokeWidth) {
                    const circle = document.createElementNS(svgNamespace, "circle");
                    circle.setAttribute("cx", cx);
                    circle.setAttribute("cy", cy);
                    circle.setAttribute("r", r);
                    circle.setAttribute("fill", fill);
                    circle.setAttribute("stroke", stroke);
                    circle.setAttribute("stroke-width", strokeWidth);
                    return circle;
                }

                function createTextElement(x, y, textContent, fontSize, fill) {
                    const text = document.createElementNS(svgNamespace, "text");
                    text.setAttribute("x", x);
                    text.setAttribute("y", y);
                    text.setAttribute("font-size", fontSize);
                    text.setAttribute("fill", fill);
                    text.textContent = textContent;
                    return text;
                }
                // Helper function to create a rectangle element
                function createRectangleElement(x, y, width, height, color) {
                    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                    rect.setAttribute("x", x);
                    rect.setAttribute("y", y);
                    rect.setAttribute("width", width);
                    rect.setAttribute("height", height);
                    rect.setAttribute("fill", color);
                    rect.setAttribute("stroke", "black");
                    rect.setAttribute("stroke-width", "2");
                    return rect;
                }


                // Calculate dynamic spacing for the main bus line
                const totalWidth = transformerFeederCounts.reduce(
                    (sum, feederCount) => sum + feederCount * feederWidth + (feederCount - 1) * margin + 100,
                    (transformerCount - 1) * margin+ 100
                );
                const centerX = xOffset + totalWidth / 2;
                const busLineY = yOffset + 110; // 33kV main bus line Y position
                const busLineStartX = centerX - totalWidth / 2;
                const busLineEndX = centerX + totalWidth / 2;
                // Draw the main bus line with sections based on incoming CB colors
                const segmentWidth = totalWidth / incomingLineCount;

                // ---------------SOLAR PLOTTING START----------------

                // console.log('solarCount :::; 000000',solarCount)
                // console.log('solarPosition :::; 000000',solarPosition[i])

                let solar = solarCount
                let position = solarPosition[i]
                let solarCBData1 = {};  // Define globally
                let solarCBData2 = {};  // Define globally
                const solarCBDataHeaders = ["V", "I", "MW", "MVAR", "PF"];

                if (data && typeof data === "object" && "solarincomer" in data) {
                    // console.log("data.solarincomer == ||||||||||||||||| ", data.solarincomer);
                    // console.log("11111111111111111111");

                    if (data.solarincomer.length === 1) {

                        for (let i = 0; i < data.solarincomer.length; i++) {
                            const solarLineDefaultData = data.solarincomer[i];
                            // console.log("solarLineDefaultData 1 -- >",solarLineDefaultData)

                            if (position === "left") {
                                // console.log("SOLAR UPDATED by this 111")
                                // console.log("solarLineDefaultData 2 -- >",solarLineDefaultData)
                                // console.log("solarLineDefaultData?.['R_VOLT'] -- >",solarLineDefaultData?.['R_VOLT'])
                                if (solarLineDefaultData?.['R_VOLT'] !== '' || solarLineDefaultData?.['R_VOLT'] !== null) {
                                    solarCBData1[i] = {
                                        V: data.solarincomer[i]?.['R_VOLT'],
                                        I: data.solarincomer[i]?.['R_CURR'],
                                        MW: data.solarincomer[i]?.['Y_CURR'],
                                        MVAR: data.solarincomer[i]?.['ACTIVE_IMPORT_ENERGY'],
                                        PF: data.solarincomer[i]?.['AVG_PF'],
                                    };
                                }
                                else{
                                    solarCBData1[i] = {
                                        V: "N/A",
                                        I: "N/A",
                                        MW: "N/A",
                                        MVAR: "N/A",
                                        PF: "N/A",
                                    };
                                }
                            } else if (position === "right") {
                                // console.log("SOLAR UPDATED by this 222")
                                if (solarLineDefaultData?.['R_VOLT'] !== '' || solarLineDefaultData?.['R_VOLT'] !== null) {
                                    console.log("####### 7 #######")
                                    solarCBData2[i] = {
                                        V: data.solarincomer[i]?.['R_VOLT'],
                                        I: data.solarincomer[i]?.['R_CURR'],
                                        MW: data.solarincomer[i]?.['Y_CURR'],
                                        MVAR: data.solarincomer[i]?.['ACTIVE_IMPORT_ENERGY'],
                                        PF: data.solarincomer[i]?.['AVG_PF'],
                                    };
                                }
                                else{
                                    solarCBData2[i] = {
                                        V: "N/A",
                                        I: "N/A",
                                        MW: "N/A",
                                        MVAR: "N/A",
                                        PF: "N/A",
                                    };
                                }
                            }
                        }
                        // console.log("solarCBData1: ", solarCBData1);
                        // console.log("solarCBData2: ", solarCBData2);
                    } else if (data.solarincomer.length === 2) {
                        for (let i = 0; i < 2; i++) {
                            const solarLineDefaultData = data.solarincomer[i];

                            if (i === 0) {
                                // console.log("SOLAR UPDATED by this 333")
                                if (solarLineDefaultData?.['R_VOLT'] !== '' || solarLineDefaultData?.['R_VOLT'] !== null) {
                                    console.log("####### 7 #######")
                                    solarCBData1[i] = {
                                        V: data.solarincomer[i]?.['R_VOLT'],
                                        I: data.solarincomer[i]?.['R_CURR'],
                                        MW: data.solarincomer[i]?.['Y_CURR'],
                                        MVAR: data.solarincomer[i]?.['ACTIVE_IMPORT_ENERGY'],
                                        PF: data.solarincomer[i]?.['AVG_PF'],
                                    };
                                }
                                else{
                                    solarCBData1[i] = {
                                        V: "N/A",
                                        I: "N/A",
                                        MW: "N/A",
                                        MVAR: "N/A",
                                        PF: "N/A",
                                    };
                                }
                            } else {
                                // console.log("SOLAR UPDATED by this 444")
                                if (solarLineDefaultData?.['R_VOLT'] !== '' || solarLineDefaultData?.['R_VOLT'] !== null) {
                                    console.log("####### 7 #######")
                                    solarCBData2[i] = {
                                        V: data.solarincomer[i]?.['R_VOLT'],
                                        I: data.solarincomer[i]?.['R_CURR'],
                                        MW: data.solarincomer[i]?.['Y_CURR'],
                                        MVAR: data.solarincomer[i]?.['ACTIVE_IMPORT_ENERGY'],
                                        PF: data.solarincomer[i]?.['AVG_PF'],
                                    };
                                }
                                else{
                                    solarCBData2[i] = {
                                        V: "N/A",
                                        I: "N/A",
                                        MW: "N/A",
                                        MVAR: "N/A",
                                        PF: "N/A",
                                    };
                                }
                            }
                        }
                    }
                } else {
                    // console.log("Key does not exist");
                    for (let i = 0; i < solar; i++) {
                        if (position === "left") {
                            // console.log("SOLAR UPDATED by this 555")
                            solarCBData1[i] = {
                                V: "N/A",
                                I: "N/A",
                                MW: "N/A",
                                MVAR: "N/A",
                                PF: "N/A",
                            };
                        } else if (position === "right") {
                            // console.log("SOLAR UPDATED by this 666")
                            solarCBData2[i] = {
                                V: "N/A",
                                I: "N/A",
                                MW: "N/A",
                                MVAR: "N/A",
                                PF: "N/A",
                            };
                        }
                    }
                }
                // // // DATA DICTIONARY GIVEN ON TOP ^^^

                function drawBatteryWithLogic() {
                    const svg = document.getElementById("batteryCanvas");

                    // Draw the main battery
                    const batteryBody = createRectangleElement(200, 150, 100, 60, "white");
                    svg.appendChild(batteryBody);

                    // Draw terminals
                    const positiveTerminal = createRectangleElement(210, 130, 20, 20, "white");
                    svg.appendChild(positiveTerminal);
                    const positiveLabel = createTextElement(220, 140, "+", "16px", "black");
                    svg.appendChild(positiveLabel);

                    const negativeTerminal = createRectangleElement(270, 130, 20, 20, "white");
                    svg.appendChild(negativeTerminal);
                    const negativeLabel = createTextElement(280, 140, "-", "16px", "black");
                    svg.appendChild(negativeLabel);
                }

                // Check the solar value and append elements accordingly
                if (solar === 0) {
                    // No Solar CB Lines should appear
                    // console.log("No Solar CB Lines are displayed.");
                } else if (solar === 1) {
                    // Display Solar CB Lines based on position
                    if (position === "left") {

                        const solarIncomingLineStyle_1 = (solarIncomingLineStatus[0] === "on" ? "" : "5,5"); // Linear if on, dashed if off
                        const solarCBtobusStyle_1 = (solarCBStatus[0] === "on" ? "" : "5,5"); // Linear if on, dashed if off

                        const SolarCBLine1 = createLineElement(busLineStartX + 5 , busLineY + 170, busLineStartX + 5 , busLineY + 220, "green", 3, solarIncomingLineStyle_1);
                        const SolarCBtoBusLine1 = createLineElement(busLineStartX + 5 , busLineY + 237, busLineStartX + 5 , busLineY + 300, "green", 3, solarCBtobusStyle_1);

                        const solarCBDataHeaders = ["V", "I", "MW", "MVAR", "PF"];
                        const CB_iconSize = 15;
                        const solarCBiconGroup1 = document.createElementNS(svgNamespace, "g"); // Group to hold the icon and additional elements
                        if (solarCBStatus[0] === "error") {
                            // Create two triangles for the error state
                            const triangle1 = document.createElementNS(svgNamespace, "polygon");
                        triangle1.setAttribute(
                            "points",
                            `${155 - CB_iconSize / 2},${busLineStartX + 246 - CB_iconSize}
                         ${155 + CB_iconSize / 2},${busLineStartX + 246 - CB_iconSize}
                         ${155 - CB_iconSize / 2},${busLineStartX + 246}`
                        );
                        triangle1.setAttribute("fill", "white"); // Top-left color

                        const triangle2 = document.createElementNS(svgNamespace, "polygon");
                        triangle2.setAttribute(
                            "points",
                            `${155 + CB_iconSize / 2},${busLineStartX + 246 - CB_iconSize}
                         ${155 + CB_iconSize / 2},${busLineStartX + 246}
                         ${155 - CB_iconSize / 2},${busLineStartX + 246}`
                        );
                        triangle2.setAttribute("fill", "black"); // Bottom-right color

                            // Create a border rectangle for the icon
                            const border = document.createElementNS(svgNamespace, "rect");
                            border.setAttribute("x", busLineStartX - 3);
                            border.setAttribute("y", busLineY + 220.5);
                            border.setAttribute("width", CB_iconSize + 1);
                            border.setAttribute("height", CB_iconSize + 1);
                            border.setAttribute("stroke", "black");
                            border.setAttribute("fill", "none");

                            // Append triangles and border to the group
                            solarCBiconGroup1.appendChild(triangle1);
                            solarCBiconGroup1.appendChild(triangle2);
                            solarCBiconGroup1.appendChild(border);
                        } else {
                            // // Handle non-error states with a single rectangle
                            const iconColor = solarCBStatus[0] === "on" ? "red" : (solarCBStatus[0] === "off" ? "white" : "blue"); // Default colors for on/off
                            const icon = document.createElementNS(svgNamespace, "rect");
                            icon.setAttribute("x", busLineStartX - 3 );
                            icon.setAttribute("y", busLineY + 220.5);
                            icon.setAttribute("width", CB_iconSize + 1);
                            icon.setAttribute("height", CB_iconSize + 1);
                            icon.setAttribute("fill", iconColor);
                            icon.setAttribute("stroke", "red");

                            // Append the icon to the group
                            solarCBiconGroup1.appendChild(icon);
                        }
                        svg.appendChild(SolarCBLine1);
                        svg.appendChild(SolarCBtoBusLine1);
                        svg.appendChild(solarCBiconGroup1);
                        const solarLabel1 = createTextElement(busLineStartX - 20, busLineY + 160, solarNames[0], "12px", "black");
                        svg.appendChild(solarLabel1);
                        // console.log("solarCBData1[i] ))))))))))))))))))",solarCBData1[i])
                        solarCBDataHeaders.forEach((header, index) => {
                            const rowY = 360 + index * 20;

                            // Unique IDs
                            const headerTextId = `solar-header-${i}-${header}`;
                            const valueTextId = `solar-value1-${i}-${header}`;
                            const bgRectId = `solar-bg1-${i}-${header}`;

                            // Add header text if not exists
                            if (!svg.querySelector(`#${headerTextId}`)) {
                                const headerText = createTextElement(busLineStartX - 90, rowY, header, "13px", "black");
                                headerText.setAttribute("id", headerTextId);
                                svg.appendChild(headerText);
                            }

                            // Get value from data
                            let value = solarCBData1[i][header];

                            // Determine background and text colors
                            let bgColor = "transparent";
                            let textColor = "black";
                            let applyFadeEffect = false; // Flag for fade-in animation

                            if (value === "N/A") {
                                bgColor = "pink"; // 🌸 Pink for "N/A"
                            } else {
                                let numericValue = parseFloat(value);
                                if (!isNaN(numericValue)) {
                                    if (numericValue < 2.0) {
                                        bgColor = "red";  
                                        textColor = "white";
                                        applyFadeEffect = true; // 🔴 Apply fade-in effect
                                    } else if (numericValue > 400) {
                                        bgColor = "blue";
                                        textColor = "white";
                                        applyFadeEffect = true; // 🔵 Apply fade-in effect
                                    }
                                }
                            }

                            // Background rectangle dimensions & positions
                            const bgWidth = 40;
                            const bgHeight = 16;
                            const bgX = busLineStartX - 50;
                            const bgY = rowY - 12;

                            let bgRect = svg.querySelector(`#${bgRectId}`);
                            let valueText = svg.querySelector(`#${valueTextId}`);

                            // Create or update background rectangle
                            if (!bgRect) {
                                bgRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                                bgRect.setAttribute("id", bgRectId);
                                bgRect.setAttribute("x", bgX);
                                bgRect.setAttribute("y", bgY);
                                bgRect.setAttribute("width", bgWidth);
                                bgRect.setAttribute("height", bgHeight);
                                bgRect.setAttribute("rx", "4");
                                bgRect.setAttribute("ry", "4");
                                bgRect.setAttribute("fill", bgColor);
                                svg.appendChild(bgRect);
                            } else {
                                bgRect.setAttribute("fill", bgColor);
                            }

                            // Create or update value text
                            if (!valueText) {
                                valueText = createTextElement(busLineStartX - 45, rowY, value, "13px", textColor);
                                valueText.setAttribute("id", valueTextId);
                                svg.appendChild(valueText);
                            } else {
                                valueText.textContent = value;
                                valueText.setAttribute("fill", textColor);
                            }

                            // Apply fade-in effect if required
                            // comment this IF condition if fade in effect is not needed.
                            if (applyFadeEffect) {
                                valueText.style.opacity = "0";
                                valueText.style.transition = "opacity 0.5s ease-in";
                                setTimeout(() => (valueText.style.opacity = "1"), 10);
                            }

                            // Ensure correct layering (text above rectangle)
                            svg.appendChild(bgRect);
                            svg.appendChild(valueText);
                        });


                    } else if (position === "right") {

                        const solarIncomingLineStyle_2 = (solarIncomingLineStatus[0] === "on" ? "" : "5,5"); // Linear if on, dashed if off
                        const solarCBtobusStyle_2 = (solarCBStatus[1] === "on" ? "" : "5,5"); // Linear if on, dashed if off

                        const SolarCBLine2 = createLineElement(busLineEndX - 40, busLineY + 170, busLineEndX - 40, busLineY + 220, "green", 3, solarIncomingLineStyle_2);
                        const SolarCBtoBusLine2 = createLineElement(busLineEndX - 40, busLineY + 237, busLineEndX - 40, busLineY + 300, "green", 3, solarCBtobusStyle_2);

                        const CB_iconSize = 15;
                        const solarCBDataHeaders = ["V", "I", "MW", "MVAR", "PF"];
                        const solarCBiconGroup2 = document.createElementNS(svgNamespace, "g"); // Group to hold the icon and additional elements
                        if (solarCBStatus[1] === "error") {
                            // Create two triangles for the error state
                            const triangle1 = document.createElementNS(svgNamespace, "polygon");
                            // console.log("busLineEndX ===== ",busLineEndX)
                            triangle1.setAttribute(
                                "points",
                                `${busLineEndX - 40 - CB_iconSize / 2},${busLineEndX - 765 - CB_iconSize}
                                 ${busLineEndX - 40 + CB_iconSize / 2},${busLineEndX - 765 - CB_iconSize}
                                 ${busLineEndX - 40 - CB_iconSize / 2},${busLineEndX - 765}`
                            );
                            triangle1.setAttribute("fill", "white"); // Top-left color

                            const triangle2 = document.createElementNS(svgNamespace, "polygon");
                            triangle2.setAttribute(
                                "points",
                                `${busLineEndX - 40 + CB_iconSize / 2},${busLineEndX - 765 - CB_iconSize}
                                 ${busLineEndX - 40 + CB_iconSize / 2},${busLineEndX - 765}
                                 ${busLineEndX - 40 - CB_iconSize / 2},${busLineEndX - 765}`
                            );
                            triangle2.setAttribute("fill", "black"); // Bottom-right color

                            // Create a border rectangle for the icon
                            const border = document.createElementNS(svgNamespace, "rect");
                            border.setAttribute("x", busLineEndX - 47.5);
                            border.setAttribute("y", busLineY + 220);
                            border.setAttribute("width", CB_iconSize );
                            border.setAttribute("height", CB_iconSize );
                            border.setAttribute("stroke", "black");
                            border.setAttribute("fill", "none");

                            // Append triangles and border to the group
                            solarCBiconGroup2.appendChild(triangle1);
                            solarCBiconGroup2.appendChild(triangle2);
                            solarCBiconGroup2.appendChild(border);
                        } else {
                            // Handle non-error states with a single rectangle
                            // console.log("------ reached 2nd solar icon = ", solarCBStatus[1])
                            const iconColor = solarCBStatus[1] === "on" ? "red" : (solarCBStatus[1] === "off" ? "white" : "blue"); // Default colors for on/off
                            const icon = document.createElementNS(svgNamespace, "rect");
                            icon.setAttribute("x", busLineEndX - 48);
                            icon.setAttribute("y", busLineY + 220.5);
                            icon.setAttribute("width", CB_iconSize + 1);
                            icon.setAttribute("height", CB_iconSize + 1);
                            icon.setAttribute("fill", iconColor);
                            icon.setAttribute("stroke", "red");

                            // Append the icon to the group
                            solarCBiconGroup2.appendChild(icon);
                        }

                        svg.appendChild(SolarCBLine2);
                        svg.appendChild(SolarCBtoBusLine2);
                        svg.appendChild(solarCBiconGroup2);
                        const solarLabel2 = createTextElement(busLineEndX - 20, busLineY + 160, solarNames[1], "12px", "black");
                        svg.appendChild(solarLabel2);
                        solarCBDataHeaders.forEach((header, index) => {
                            const rowY = 360 + index * 20;

                            // Unique IDs
                            const headerTextId = `solar-header2-${i}-${header}`;
                            const valueTextId = `solar-value2-${i}-${header}`;
                            const bgRectId = `solar-bg2-${i}-${header}`;

                            // Add header text if not exists
                            if (!svg.querySelector(`#${headerTextId}`)) {
                                const headerText = createTextElement(busLineEndX + 5, rowY, header, "14px", "black");
                                headerText.setAttribute("id", headerTextId);
                                svg.appendChild(headerText);
                            }

                            // Get value from data
                            let value = solarCBData2[i][header];

                            // Determine background and text colors
                            let bgColor = "transparent";
                            let textColor = "black";
                            let applyFadeEffect = false; // Flag for fade-in animation

                            if (value === "N/A") {
                                bgColor = "pink"; // 🌸 Pink for "N/A"
                            } else {
                                let numericValue = parseFloat(value);
                                if (!isNaN(numericValue)) {
                                    if (numericValue < 2.0) {
                                        bgColor = "red";  
                                        textColor = "white";
                                        applyFadeEffect = true; // 🔴 Apply fade-in effect
                                    } else if (numericValue > 400) {
                                        bgColor = "blue";
                                        textColor = "white";
                                        applyFadeEffect = true; // 🔵 Apply fade-in effect
                                    }
                                }
                            }

                            // Background rectangle dimensions & positions
                            const bgWidth = 40;
                            const bgHeight = 16;
                            const bgX = busLineEndX + 55;
                            const bgY = rowY - 12;

                            let bgRect = svg.querySelector(`#${bgRectId}`);
                            let valueText = svg.querySelector(`#${valueTextId}`);

                            // Create or update background rectangle
                            if (!bgRect) {
                                bgRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                                bgRect.setAttribute("id", bgRectId);
                                bgRect.setAttribute("x", bgX);
                                bgRect.setAttribute("y", bgY);
                                bgRect.setAttribute("width", bgWidth);
                                bgRect.setAttribute("height", bgHeight);
                                bgRect.setAttribute("rx", "4");
                                bgRect.setAttribute("ry", "4");
                                bgRect.setAttribute("fill", bgColor);
                                svg.appendChild(bgRect);
                            } else {
                                bgRect.setAttribute("fill", bgColor);
                            }

                            // Create or update value text
                            if (!valueText) {
                                valueText = createTextElement(busLineEndX + 60, rowY, value, "14px", textColor);
                                valueText.setAttribute("id", valueTextId);
                                svg.appendChild(valueText);
                            } else {
                                valueText.textContent = value;
                                valueText.setAttribute("fill", textColor);
                            }

                            // Apply fade-in effect if required
                            // comment this IF condition if fade in effect is not needed.
                            if (applyFadeEffect) {
                                valueText.style.opacity = "0";
                                valueText.style.transition = "opacity 0.5s ease-in";
                                setTimeout(() => (valueText.style.opacity = "1"), 10);
                            }

                            // Ensure correct layering (text above rectangle)
                            svg.appendChild(bgRect);
                            svg.appendChild(valueText);
                        });


                    } else {
                        console.error("Invalid position. Must be 'left' or 'right'.");
                    }
                } else if (solar === 2) {
                    solarCBData1[i] = {
                                V: "N/A",
                                I: "N/A",
                                MW: "N/A",
                                MVAR: "N/A",
                                PF: "N/A",
                            };
                    solarCBData2[i] = {
                                V: "N/A",
                                I: "N/A",
                                MW: "N/A",
                                MVAR: "N/A",
                                PF: "N/A",
                            };

                    const solarIncomingLineStyle_1 = (solarIncomingLineStatus[0] === "on" ? "" : "5,5"); // Linear if on, dashed if off
                    const solarCBtobusStyle_1 = (solarCBStatus[0] === "on" ? "" : "5,5"); // Linear if on, dashed if off

                    const solarIncomingLineStyle_2 = (solarIncomingLineStatus[1] === "on" ? "" : "5,5"); // Linear if on, dashed if off
                    const solarCBtobusStyle_2 = (solarCBStatus[1] === "on" ? "" : "5,5"); // Linear if on, dashed if off

                    const SolarCBLine1 = createLineElement(busLineStartX + 5 , busLineY + 170, busLineStartX + 5 , busLineY + 220, "green", 3, solarIncomingLineStyle_1);
                    const SolarCBtoBusLine1 = createLineElement(busLineStartX + 5 , busLineY + 237, busLineStartX + 5 , busLineY + 300, "green", 3, solarCBtobusStyle_1);

                    const SolarCBLine2 = createLineElement(busLineEndX - 40, busLineY + 170, busLineEndX - 40, busLineY + 220, "green", 3, solarIncomingLineStyle_2);
                    const SolarCBtoBusLine2 = createLineElement(busLineEndX - 40, busLineY + 237, busLineEndX - 40, busLineY + 300, "green", 3, solarCBtobusStyle_2);

                    const CB_iconSize = 15;
                    const solarCBDataHeaders = ["V", "I", "MW", "MVAR", "PF"];
                    const solarCBiconGroup1 = document.createElementNS(svgNamespace, "g"); // Group to hold the icon and additional elements
                    if (solarCBStatus[0] === "error") {
                        // Create two triangles for the error state
                        const triangle1 = document.createElementNS(svgNamespace, "polygon");
                        triangle1.setAttribute(
                            "points",
                            `${155 - CB_iconSize / 2},${busLineStartX + 246 - CB_iconSize}
                         ${155 + CB_iconSize / 2},${busLineStartX + 246 - CB_iconSize}
                         ${155 - CB_iconSize / 2},${busLineStartX + 246}`
                        );
                        triangle1.setAttribute("fill", "white"); // Top-left color

                        const triangle2 = document.createElementNS(svgNamespace, "polygon");
                        triangle2.setAttribute(
                            "points",
                            `${155 + CB_iconSize / 2},${busLineStartX + 246 - CB_iconSize}
                         ${155 + CB_iconSize / 2},${busLineStartX + 246}
                         ${155 - CB_iconSize / 2},${busLineStartX + 246}`
                        );
                        triangle2.setAttribute("fill", "black"); // Bottom-right color

                        // Create a border rectangle for the icon
                        const border = document.createElementNS(svgNamespace, "rect");
                        border.setAttribute("x", busLineStartX - 3 );
                        border.setAttribute("y", busLineY + 220.5);
                        border.setAttribute("width", CB_iconSize + 1);
                        border.setAttribute("height", CB_iconSize + 1);
                        border.setAttribute("stroke", "black");
                        border.setAttribute("fill", "none");

                        // Append triangles and border to the group
                        solarCBiconGroup1.appendChild(triangle1);
                        solarCBiconGroup1.appendChild(triangle2);
                        solarCBiconGroup1.appendChild(border);
                    } else {
                        // Handle non-error states with a single rectangle
                        const iconColor = solarCBStatus[0] === "on" ? "red" : (solarCBStatus[0] === "off" ? "white" : "blue"); // Default colors for on/off
                        const icon = document.createElementNS(svgNamespace, "rect");
                        icon.setAttribute("x", busLineStartX - 3);
                        icon.setAttribute("y", busLineY + 220.5);
                        icon.setAttribute("width", CB_iconSize + 1);
                        icon.setAttribute("height", CB_iconSize + 1);
                        icon.setAttribute("fill", iconColor);
                        icon.setAttribute("stroke", "red");

                        // Append the icon to the group
                        solarCBiconGroup1.appendChild(icon);
                    }

                    const solarCBiconGroup2 = document.createElementNS(svgNamespace, "g"); // Group to hold the icon and additional elements
                    if (solarCBStatus[1] === "error") {
                        // Create two triangles for the error state
                        const triangle1 = document.createElementNS(svgNamespace, "polygon");
                        // console.log("busLineEndX ===== ",busLineEndX)
                        triangle1.setAttribute(
                            "points",
                            `${busLineEndX - 40 - CB_iconSize / 2},${busLineEndX - 765 - CB_iconSize}
                             ${busLineEndX - 40 + CB_iconSize / 2},${busLineEndX - 765 - CB_iconSize}
                             ${busLineEndX - 40 - CB_iconSize / 2},${busLineEndX - 765}`
                        );
                        triangle1.setAttribute("fill", "white"); // Top-left color

                        const triangle2 = document.createElementNS(svgNamespace, "polygon");
                        triangle2.setAttribute(
                            "points",
                            `${busLineEndX - 40 + CB_iconSize / 2},${busLineEndX - 765 - CB_iconSize}
                             ${busLineEndX - 40 + CB_iconSize / 2},${busLineEndX - 765}
                             ${busLineEndX - 40 - CB_iconSize / 2},${busLineEndX - 765}`
                        );
                        triangle2.setAttribute("fill", "black"); // Bottom-right color

                        // Create a border rectangle for the icon
                        const border = document.createElementNS(svgNamespace, "rect");
                        border.setAttribute("x", busLineEndX - 47.5);
                        border.setAttribute("y", busLineY + 220);
                        border.setAttribute("width", CB_iconSize );
                        border.setAttribute("height", CB_iconSize );
                        border.setAttribute("stroke", "black");
                        border.setAttribute("fill", "none");

                        // Append triangles and border to the group
                        solarCBiconGroup2.appendChild(triangle1);
                        solarCBiconGroup2.appendChild(triangle2);
                        solarCBiconGroup2.appendChild(border);
                    } else {
                        // Handle non-error states with a single rectangle
                        // console.log("------ reached 2nd solar icon = ", solarCBStatus[1])
                        const iconColor = solarCBStatus[1] === "on" ? "red" : (solarCBStatus[1] === "off" ? "white" : "blue"); // Default colors for on/off
                        const icon = document.createElementNS(svgNamespace, "rect");
                        icon.setAttribute("x", busLineEndX - 48);
                        icon.setAttribute("y", busLineY + 220.5);
                        icon.setAttribute("width", CB_iconSize + 1);
                        icon.setAttribute("height", CB_iconSize + 1);
                        icon.setAttribute("fill", iconColor);
                        icon.setAttribute("stroke", "red");

                        // Append the icon to the group
                        solarCBiconGroup2.appendChild(icon);
                    }

                    // Display both Solar CB Lines
                    svg.appendChild(SolarCBLine1);
                    svg.appendChild(SolarCBtoBusLine1);
                    svg.appendChild(SolarCBLine2);
                    svg.appendChild(SolarCBtoBusLine2);
                    svg.appendChild(solarCBiconGroup1);
                    svg.appendChild(solarCBiconGroup2);
                    const solarLabel1 = createTextElement(busLineStartX + 10, busLineY + 160, solarNames[0], "12px", "black");
                    const solarLabel2 = createTextElement(busLineEndX - 40, busLineY + 160, solarNames[1], "12px", "black");
                    svg.appendChild(solarLabel1);
                    svg.appendChild(solarLabel2);

                    solarCBDataHeaders.forEach((header, index) => {
                        const rowY = 360 + index * 20;

                        // Unique IDs
                        const headerTextId = `solar-header1-${i}-${header}`;
                        const valueTextId = `solar-value1-${i}-${header}`;
                        const bgRectId = `solar-bg1-${i}-${header}`;

                        // Add header text if not exists
                        if (!svg.querySelector(`#${headerTextId}`)) {
                            const headerText = createTextElement(busLineStartX - 90, rowY, header, "13px", "black");
                            headerText.setAttribute("id", headerTextId);
                            svg.appendChild(headerText);
                        }

                        // Get value from data
                        let value = solarCBData1[i][header];

                        // Determine background and text colors
                        let bgColor = "transparent";
                        let textColor = "black";
                        let applyFadeEffect = false; // Flag for fade-in animation

                        if (value === "N/A") {
                            bgColor = "pink"; // 🌸 Pink for "N/A"
                        } else {
                            let numericValue = parseFloat(value);
                            if (!isNaN(numericValue)) {
                                if (numericValue < 2.0) {
                                    bgColor = "red";  
                                    textColor = "white";
                                    applyFadeEffect = true; // 🔴 Apply fade-in effect
                                } else if (numericValue > 400) {
                                    bgColor = "blue";
                                    textColor = "white";
                                    applyFadeEffect = true; // 🔵 Apply fade-in effect
                                }
                            }
                        }

                        // Background rectangle dimensions & positions
                        const bgWidth = 40;
                        const bgHeight = 16;
                        const bgX = busLineStartX - 50;
                        const bgY = rowY - 12;

                        let bgRect = svg.querySelector(`#${bgRectId}`);
                        let valueText = svg.querySelector(`#${valueTextId}`);

                        // Create or update background rectangle
                        if (!bgRect) {
                            bgRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                            bgRect.setAttribute("id", bgRectId);
                            bgRect.setAttribute("x", bgX);
                            bgRect.setAttribute("y", bgY);
                            bgRect.setAttribute("width", bgWidth);
                            bgRect.setAttribute("height", bgHeight);
                            bgRect.setAttribute("rx", "4");
                            bgRect.setAttribute("ry", "4");
                            bgRect.setAttribute("fill", bgColor);
                            svg.appendChild(bgRect);
                        } else {
                            bgRect.setAttribute("fill", bgColor);
                        }

                        // Create or update value text
                        if (!valueText) {
                            valueText = createTextElement(busLineStartX - 45, rowY, value, "13px", textColor);
                            valueText.setAttribute("id", valueTextId);
                            svg.appendChild(valueText);
                        } else {
                            valueText.textContent = value;
                            valueText.setAttribute("fill", textColor);
                        }

                        // Apply fade-in effect if required
                        // comment this IF condition if fade in effect is not needed.
                        if (applyFadeEffect) {
                            valueText.style.opacity = "0";
                            valueText.style.transition = "opacity 0.5s ease-in";
                            setTimeout(() => (valueText.style.opacity = "1"), 10);
                        }

                        // Ensure correct layering (text above rectangle)
                        svg.appendChild(bgRect);
                        svg.appendChild(valueText);
                    });


                    solarCBDataHeaders.forEach((header, index) => {
                        const rowY = 360 + index * 20;

                        // Unique IDs
                        const headerTextId = `solar-header2-${i}-${header}`;
                        const valueTextId = `solar-value2-${i}-${header}`;
                        const bgRectId = `solar-bg2-${i}-${header}`;

                        // Add header text if not exists
                        if (!svg.querySelector(`#${headerTextId}`)) {
                            const headerText = createTextElement(busLineEndX - 135, rowY, header, "13px", "black");
                            headerText.setAttribute("id", headerTextId);
                            svg.appendChild(headerText);
                        }

                        // Get value from data
                        let value = solarCBData2[i][header];

                        // Determine background and text colors
                        let bgColor = "transparent";
                        let textColor = "black";
                        let applyFadeEffect = false; // Flag for fade-in animation

                        if (value === "N/A") {
                            bgColor = "pink"; // 🌸 Pink for "N/A"
                        } else {
                            let numericValue = parseFloat(value);
                            if (!isNaN(numericValue)) {
                                if (numericValue < 2.0) {
                                    bgColor = "red";  
                                    textColor = "white";
                                    applyFadeEffect = true; // 🔴 Apply fade-in effect
                                } else if (numericValue > 400) {
                                    bgColor = "blue";
                                    textColor = "white";
                                    applyFadeEffect = true; // 🔵 Apply fade-in effect
                                }
                            }
                        }

                        // Background rectangle dimensions & positions
                        const bgWidth = 40;
                        const bgHeight = 16;
                        const bgX = busLineEndX - 90;
                        const bgY = rowY - 12;

                        let bgRect = svg.querySelector(`#${bgRectId}`);
                        let valueText = svg.querySelector(`#${valueTextId}`);

                        // Create or update background rectangle
                        if (!bgRect) {
                            bgRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                            bgRect.setAttribute("id", bgRectId);
                            bgRect.setAttribute("x", bgX);
                            bgRect.setAttribute("y", bgY);
                            bgRect.setAttribute("width", bgWidth);
                            bgRect.setAttribute("height", bgHeight);
                            bgRect.setAttribute("rx", "4");
                            bgRect.setAttribute("ry", "4");
                            bgRect.setAttribute("fill", bgColor);
                            svg.appendChild(bgRect);
                        } else {
                            bgRect.setAttribute("fill", bgColor);
                        }

                        // Create or update value text
                        if (!valueText) {
                            valueText = createTextElement(busLineEndX - 85, rowY, value, "13px", textColor);
                            valueText.setAttribute("id", valueTextId);
                            svg.appendChild(valueText);
                        } else {
                            valueText.textContent = value;
                            valueText.setAttribute("fill", textColor);
                        }

                        // Apply fade-in effect if required
                        // comment this IF condition if fade in effect is not needed.
                        if (applyFadeEffect) {
                            valueText.style.opacity = "0";
                            valueText.style.transition = "opacity 0.5s ease-in";
                            setTimeout(() => (valueText.style.opacity = "1"), 10);
                        }

                        // Ensure correct layering (text above rectangle)
                        svg.appendChild(bgRect);
                        svg.appendChild(valueText);
                    });


                } else {
                    console.error("Invalid solar value. Must be 0, 1, or 2.");
                }
                // ---------------SOLAR PLOTTING END----------------

                // ---------------BUS LINE PLOTTING START----------------
                let busLineSegments = [];
                for (let i = 0; i < incomingLineCount; i++) {
                    const segmentStartX = busLineStartX + i * segmentWidth;
                    const segmentEndX = busLineStartX + (i + 1) * segmentWidth;
                    const color = "red";
                    // const segmentCenterX = (segmentStartX + segmentEndX) / 2;
                    // const segmentCenterY = busLineY; // Since it's a horizontal line
                    // const centerCircle = document.createElementNS(svgNamespace, "circle");
                    //     centerCircle.setAttribute("cx", segmentCenterX);
                    //     centerCircle.setAttribute("cy", segmentCenterY);
                    //     centerCircle.setAttribute("r", 5);  // Radius of the circle
                    //     centerCircle.setAttribute("fill", "blue");  // Color of center marker
                    //     svg.appendChild(centerCircle);

               

                    const dashStyle = transformerVoltageLineStatus[i] === "on" ? null : "5,5";
                    // console.log("dashStyle --- ", dashStyle)
                    const busSegment = createLineElement(segmentStartX, busLineY, segmentEndX, busLineY, color, 3, dashStyle);
                    svg.appendChild(busSegment);
                    busLineSegments.push({
                        startX: segmentStartX,
                        endX: segmentEndX,
                        dashStyle: dashStyle
                    });

                    console.log("mainBusLineCouplerStatus :: 11",mainBusLineCouplerStatus)
                    // console.log("mainBusLineCouplerStatus[i] :: 11",mainBusLineCouplerStatus[i])
                    // console.log(" :: 11",i)

                    // Adding deviation circles and lines as before
                    if (i > 0) {
                        const circleX = segmentStartX;
                        const mainBusLineCouplerStatus_count = mainBusLineCouplerStatus[i]; // Use the status for the (i-1)th coupler
                        console.log("mainBusLineCouplerStatus ::  22",mainBusLineCouplerStatus_count)

                        if (mainBusLineCouplerStatus_count === "on" || mainBusLineCouplerStatus_count === "off") {
                            // Create and append deviation circle
                            const deviationCircle = createCircleElement(circleX, busLineY, 9, "black", 2);
                            svg.appendChild(deviationCircle);

                            // Small line initially vertical
                            const smallLine = createLineElement(circleX, busLineY - 25, circleX, busLineY + 25, "black", 4);

                            // Adjust rotation based on mainBusLineCouplerStatus
                            if (mainBusLineCouplerStatus_count === "on") {
                                // Rotate to horizontal
                                const rotationCenterX = circleX; // Horizontal center of the line
                                const rotationCenterY = busLineY; // Vertical center of the line
                                smallLine.setAttribute(
                                    "transform",
                                    `rotate(90, ${rotationCenterX}, ${rotationCenterY})`
                                );
                            }
                            svg.appendChild(smallLine);
                        } else if (!mainBusLineCouplerStatus_count || mainBusLineCouplerStatus_count === "") {
                            // Do not plot anything if status is null, empty, or undefined
                        }
                    }
                }

                // Add bus line label
                const busLabel = createTextElement(centerX + 50, busLineY -5, "33kV BUS line", "12px", "black");
                svg.appendChild(busLabel);
                // ---------------BUS LINE PLOTTING ENDS----------------

                // // ---------------INCOMING LINE PLOTTING STARTS----------------
                // Position incoming lines
                const actualSpacing = totalWidth / (incomingLineCount + 1);
                for (let i = 0; i < incomingLineCount; i++) {

                    const xPosition = busLineStartX + actualSpacing * (i + 1);
                    const incominglinestype = incLineStatus[i] === "on" ? null : "5,5";
                    const incomingLine = createLineElement(xPosition, yOffset - 20, xPosition, busLineY - 50, "red", 3, incominglinestype); // before CB
                    const incominglines_CB = incCBStatus[i] === "on" && incLineStatus[i] === "on" ? null : "5,5";
                    const lineToBus = createLineElement(xPosition, busLineY - 50, xPosition, busLineY, "red", 3, incominglines_CB); // after CB
                    const lineLabel = createTextElement(xPosition - 45, yOffset - 30, `33KV INCOMER - ${i + 1}`, "12px", "black");
                    svg.appendChild(incomingLine);
                    svg.appendChild(lineToBus);
                    svg.appendChild(lineLabel);
                    const CB_iconSize = 15;
                    const iconGroup = document.createElementNS(svgNamespace, "g"); // Group to hold the icon and additional elements

                    if (incCBStatus[i] === "error") {
                        // Create two triangles for the error state
                        const triangle1 = document.createElementNS(svgNamespace, "polygon");
                        triangle1.setAttribute(
                            "points",
                            `${xPosition - CB_iconSize / 2},${busLineY - 50 - CB_iconSize}
                         ${xPosition + CB_iconSize / 2},${busLineY - 50 - CB_iconSize}
                         ${xPosition - CB_iconSize / 2},${busLineY - 50}`
                        );
                        triangle1.setAttribute("fill", "white"); // Top-left color

                        const triangle2 = document.createElementNS(svgNamespace, "polygon");
                        triangle2.setAttribute(
                            "points",
                            `${xPosition + CB_iconSize / 2},${busLineY - 50 - CB_iconSize}
                         ${xPosition + CB_iconSize / 2},${busLineY - 50}
                         ${xPosition - CB_iconSize / 2},${busLineY - 50}`
                        );
                        triangle2.setAttribute("fill", "black"); // Bottom-right color

                        // Create a border rectangle for the icon
                        const border = document.createElementNS(svgNamespace, "rect");
                        border.setAttribute("x", xPosition - CB_iconSize / 2);
                        border.setAttribute("y", busLineY - 50 - CB_iconSize);
                        border.setAttribute("width", CB_iconSize);
                        border.setAttribute("height", CB_iconSize);
                        border.setAttribute("stroke", "black");
                        border.setAttribute("fill", "none");

                        // Append triangles and border to the group
                        iconGroup.appendChild(triangle1);
                        iconGroup.appendChild(triangle2);
                        iconGroup.appendChild(border);
                    } else {
                        // Handle non-error states with a single rectangle
                        const iconColor = incCBStatus[i] === "on" ? "red" : incCBStatus[i] === "off" ? "white" : "blue";
                        const icon = document.createElementNS(svgNamespace, "rect");
                        icon.setAttribute("x", xPosition - CB_iconSize / 2);
                        icon.setAttribute("y", busLineY - 50 - CB_iconSize);
                        icon.setAttribute("width", CB_iconSize);
                        icon.setAttribute("height", CB_iconSize);
                        icon.setAttribute("fill", iconColor);
                        icon.setAttribute("stroke", "red");

                        // Append the icon to the group
                        iconGroup.appendChild(icon);
                    }
                    // Append the group to the SVG
                    svg.appendChild(iconGroup);

                    // Data table for each incoming line
                    const tableX = xPosition - 100; // X position for the data table (left side of incoming line)
                    const tableY = busLineY - 120; // Y position for the table
                    const tableWidth = 100;
                    const tableHeight = 150;

                    // Dictionary to store data for each incoming line
                    const headers = ["V", "I", "MW", "MVAR", "PF"];
                    const incomingLineData = {}
                    // console.log("data.transformer_data == ",data.transformer_data)
                    // console.log("data.incomer33kv == ",data.incomer33kv)
                    if (data && typeof data === "object" && "incomer33kv" in data) {
                   
                        // console.log("if == ************ ")
                        console.log("incomer33kv available :::: ", data.incomer33kv)
                        for (let i = 0; i < incomingLineCount; i++) {
                            const incomingLineDefaultData = data.incomer33kv[i]; // Use provided transformer data
                            incomingLineData[i] = {
                                V: incomingLineDefaultData?.['R_VOLT'] || "0.0",
                                I: incomingLineDefaultData?.['R_CURR'] || "0.0",
                                MW: incomingLineDefaultData?.['Y_CURR'] || "0.0",
                                MVAR: incomingLineDefaultData?.['ACTIVE_IMPORT_ENERGY'] || "0.0",
                                PF: incomingLineDefaultData?.['R_PF'] || "0.0",
                            };
                        }
                    } else{
                        // console.log("incomer33kv not available :::: ")
                        // console.log("incomingLineData[i] :: ",incomingLineData[i])
                        for (let i = 0; i < incomingLineCount; i++) {
                            // const incomingLineDefaultData = data.incomer33kv[i]; // Use provided transformer data
                            incomingLineData[i] = {
                                V: "N/A",
                                I: "N/A",
                                MW: "N/A",
                                MVAR: "N/A",
                                PF: "N/A",
                            };
                        }
                        // console.log("$$$$$$$$$$$$$$$$$$$$$$$$")
                    }
                    // Create a table inside the SVG
                    headers.forEach((header, index) => {
                        const rowY = tableY + 20 + index * 20;

                        // Unique IDs
                        const headerTextId = `incoming-line-header-${i}-${header}`;
                        const valueTextId = `incoming-line-value-${i}-${header}`;
                        const bgRectId = `incoming-line-bg-${i}-${header}`;

                        // Add header text if not exists
                        if (!svg.querySelector(`#${headerTextId}`)) {
                            const headerText = createTextElement(tableX + 5, rowY, header, "14px", "black");
                            headerText.setAttribute("id", headerTextId);
                            svg.appendChild(headerText);
                        }

                        // Get value from data
                        let value = incomingLineData[i][header];

                        // Determine background and text colors
                        let bgColor = "transparent";
                        let textColor = "black";
                        let applyFadeEffect = false; // Flag for fade-in animation

                        if (value === "N/A") {
                            bgColor = "pink"; // 🌸 Pink for "N/A"
                        } else {
                            let numericValue = parseFloat(value);
                            if (!isNaN(numericValue)) {
                                if (numericValue < 2.0) {
                                    bgColor = "red";  
                                    textColor = "white";
                                    applyFadeEffect = true; // 🔴 Apply fade-in effect
                                } else if (numericValue > 400) {
                                    bgColor = "blue";
                                    textColor = "white";
                                    applyFadeEffect = true; // 🔵 Apply fade-in effect
                                }
                            }
                        }

                        // Background rectangle dimensions & positions
                        const bgWidth = 40;
                        const bgHeight = 16;
                        const bgX = tableX + 45;
                        const bgY = rowY - 12;

                        let bgRect = svg.querySelector(`#${bgRectId}`);
                        let valueText = svg.querySelector(`#${valueTextId}`);

                        // Create or update background rectangle
                        if (!bgRect) {
                            bgRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                            bgRect.setAttribute("id", bgRectId);
                            bgRect.setAttribute("x", bgX);
                            bgRect.setAttribute("y", bgY);
                            bgRect.setAttribute("width", bgWidth);
                            bgRect.setAttribute("height", bgHeight);
                            bgRect.setAttribute("rx", "4");
                            bgRect.setAttribute("ry", "4");
                            bgRect.setAttribute("fill", bgColor);
                            svg.appendChild(bgRect);
                        } else {
                            bgRect.setAttribute("fill", bgColor);
                        }

                        // Create or update value text
                        if (!valueText) {
                            valueText = createTextElement(tableX + 50, rowY, value, "14px", textColor);
                            valueText.setAttribute("id", valueTextId);
                            svg.appendChild(valueText);
                        } else {
                            valueText.textContent = value;
                            valueText.setAttribute("fill", textColor);
                        }

                        // Apply fade-in effect if required
                        // comment this IF condition if fade in effect is not needed.
                        if (applyFadeEffect) {
                            valueText.style.opacity = "0";
                            valueText.style.transition = "opacity 0.5s ease-in";
                            setTimeout(() => (valueText.style.opacity = "1"), 10);
                        }

                        // Ensure correct layering (text above rectangle)
                        svg.appendChild(bgRect);
                        svg.appendChild(valueText);
                    });

                }
                // // ---------------INCOMING LINE PLOTTING ENDS----------------

                // // ---------------TRANSFORMER ICON/HEADER/4 LINES/TOP_BOTTOM CB DATA || SMALLER BUS LINES/SMALLER BUS LINES COUPLERS/OUTGOING FEEDER DATA  PLOTTING STARTS----------------
                const trfTopCBStatus_e_1 = trfTopCBStatus
                const trfBottomCBStatus_e_1 = trfBottomCBStatus
                const smallBuslineCouplerStatus_e_1 = subBusLineCouplerStatus
                const transformerVoltageLineStatus_e_1 = transformerVoltageLineStatus
                const incLineStatus_e_1 = incLineStatus
                const battery_x = busLineEndX + 50
                let currentX = busLineStartX + transformerMargin;
                let bottomCBlineDashArrayList = []
                for (let i = 0; i < transformerCount; i++) {

                    const feederCount = transformerFeederCounts[i];
                    const transformerWidth = 40;
                    const transformerHeight = 40;
                    const CB_iconSize = 15;
                    // const transformerRadius = 15; // Radius of each circle
                    const totalFeederWidth = feederCount * feederWidth + (feederCount - 1) * margin+50;
                    const transformerX = currentX + totalFeederWidth / 2;
                    const xx = "";

                    // Position the circles to overlap like "8"
                    const circle1Y = busLineY + 133; // Y position of the top circle
                    const circle2Y = busLineY + 149; // Y position of the bottom circle

                    // Draw the top circle
                    const transformerCircle1 = document.createElementNS(svgNamespace, "circle");
                    const transformerRadius1 = 13; // Radius of each circle
                    transformerCircle1.setAttribute("cx", transformerX);
                    transformerCircle1.setAttribute("cy", circle1Y);
                    transformerCircle1.setAttribute("r", transformerRadius1);
                    transformerCircle1.setAttribute("fill", "none");
                    transformerCircle1.setAttribute("stroke", "red");
                    transformerCircle1.setAttribute("stroke-width", "2");
                    // Add click event to the top circle
                    transformerCircle1.addEventListener("click", () => {
                        alert(`Top Circle of Transformer ${i + 1} clicked!`);
                    });
                    svg.appendChild(transformerCircle1);

                    // Draw the bottom circle
                    const transformerCircle2 = document.createElementNS(svgNamespace, "circle");
                    const transformerRadius2 = 11; // Radius of each circle
                    transformerCircle2.setAttribute("cx", transformerX);
                    transformerCircle2.setAttribute("cy", circle2Y);
                    transformerCircle2.setAttribute("r", transformerRadius2);
                    transformerCircle2.setAttribute("fill", "none");
                    transformerCircle2.setAttribute("stroke", "green");
                    transformerCircle2.setAttribute("stroke-width", "2");
                    // Add click event to the bottom circle
                    svg.appendChild(transformerCircle2);
                    transformerCircle2.addEventListener("click", () => {
                        alert(`Bottom Circle of Transformer ${i + 1} clicked!`);
                    });

                    // Add transformer label
                    const transformerLabel = createTextElement(transformerX + 25, busLineY + 150, `Transformer ${i + 1}`, "12px", "black");
                    svg.appendChild(transformerLabel);

                    // Find which bus line segment the transformer is connected to
                    const segmentIndex = incomingLineAssignments[i]; // Get the assigned incoming line for this transformer
                    const dashStyle = busLineSegments[segmentIndex].dashStyle;
                    // Draw line from transformer to the bus line

                    const topCBlineDashArray = (incLineStatus[i] === "off" ? "5,5" : (trfTopCBStatus_e_1[i] === "off" || trfTopCBStatus_e_1[i] === "error") ?
                     "5,5" : (trfTopCBStatus_e_1[i] === "on" ? "" : "5,5"));
                    const bottomCBlineDashArray = (incLineStatus[i] === "off" ? "5,5" : (trfBottomCBStatus_e_1[i] === "off" || trfBottomCBStatus_e_1[i] === "error" || trfTopCBStatus_e_1[i] === "off" || trfTopCBStatus_e_1[i] === "error") ?
                     "5,5" : (trfBottomCBStatus_e_1[i] === "on" || trfTopCBStatus_e_1[i] === "on" ? "" : "5,5"));


                    const transformerTopCBtoMainBusLine = createLineElement(transformerX, busLineY, transformerX, busLineY + 60, "red", 3);
                    const transformerTopCBtoTrf = createLineElement(transformerX, busLineY + 60, transformerX, busLineY + 120, "red", 3, topCBlineDashArray); // blue
                    const transformerBottomCBtoTrf = createLineElement(transformerX, busLineY + 220, transformerX, busLineY + 160, "green", 3, topCBlineDashArray); // orange
                    const transformerBottomCBtoSmallBusLine = createLineElement(transformerX, busLineY + 300, transformerX, busLineY + 220, "green", 3, bottomCBlineDashArray);

                    // console.log("!--currentFlow_e_1 == ",transformerVoltageLineStatus_e_1[i] )
                    // console.log("!--bottomCBlineDashArray == ",bottomCBlineDashArray )
                    let value = `${bottomCBlineDashArray}`;
                    bottomCBlineDashArrayList.push(value);
                    // console.log("!--bottomCBlineDashArrayList == ",bottomCBlineDashArrayList )
                    // console.log("!--bottomCBlineDashArrayList[i] == ",bottomCBlineDashArrayList[i] )
                    // console.log("!--incLineStatus == ",incLineStatus_e_1 )


                    // console.log("trfTopCBStatus_e_1[i] ::::",trfTopCBStatus_e_1[i])
                    // console.log("trfBottomCBStatus_e_1[i] ::::",trfBottomCBStatus_e_1[i])
                    // console.log("smallBuslineCouplerStatus_e_1[i] ::::",smallBuslineCouplerStatus_e_1[i])
                    // console.log("transformerVoltageLineStatus_e_1[i] ::::",transformerVoltageLineStatus_e_1[i])

                 
                    let combinedDashArray;
                    // if (bottomCBlineDashArrayList[i] === "") {
                    //     combinedDashArray = ""
                    //     console.log("IN IF CONDITION", combinedDashArray)
                    // }
                   
                    // else{
                    //     combinedDashArray = "5,5"
                    //     console.log("IN ELSE CONDITION", combinedDashArray)
                    // }
                    // console.log("BBBBBB && transformerVoltageLineStatus_e_1[i] ::" ,transformerVoltageLineStatus_e_1[i])
                    // console.log("BBBBBB && incomingLineAssignments[i] ::" ,incomingLineAssignments[i])
                    // console.log("BBBBBB bottomCBlineDashArrayList :: ",bottomCBlineDashArrayList)
                    // console.log("BBBBBB i :: ",i)
                    if (bottomCBlineDashArrayList[i] === "" && transformerVoltageLineStatus_e_1[i] === "on" && incomingLineAssignments[i] === i) {
                        combinedDashArray = ""
                        // console.log("IN IF CONDITION", combinedDashArray)
                    }
                   
                    else if(bottomCBlineDashArrayList.includes("") && transformerVoltageLineStatus_e_1[i] === "on" && incomingLineAssignments[i] === i){
                        combinedDashArray = ""
                        // console.log("IN ELSE IF - IF CONDITION", combinedDashArray)
                    }

                    else{
                        combinedDashArray = "5,5"
                        // console.log("IN ELSE CONDITION", combinedDashArray)
                    }

                    // if (
                    //      (trfTopCBStatus_e_1[i] === "on" && trfBottomCBStatus_e_1[i] === "off" && bottomCBlineDashArray === "5,5" && transformerVoltageLineStatus_e_1[i] === "off") ||
                    //      (trfTopCBStatus_e_1[i] === "off" && trfBottomCBStatus_e_1[i] === "on" && bottomCBlineDashArray === "5,5" && transformerVoltageLineStatus_e_1[i] === "off") ||
                    //      (transformerVoltageLineStatus_e_1[i] === "on" && trfTopCBStatus_e_1[i] === "off" && trfBottomCBStatus_e_1[i] === "on" && bottomCBlineDashArrayList[i] === "5,5" )
                    //  ) {
                    //     combinedDashArray = "5,5"
                    //     console.log("IN IF CONDITION", combinedDashArray)
                    // }
                    // else if(
                    //      (transformerVoltageLineStatus_e_1[i] === "on" && trfTopCBStatus_e_1[i] === "on" && trfBottomCBStatus_e_1[i] === "on"  && bottomCBlineDashArrayList[i] === "") ||
                    //      (transformerVoltageLineStatus_e_1[i] === "on" && trfTopCBStatus_e_1[i] === "on" && trfBottomCBStatus_e_1[i] === "off" && bottomCBlineDashArrayList[i] === "") ||
                    //      (transformerVoltageLineStatus_e_1[i] === "on" && trfTopCBStatus_e_1[i] === "off" && trfBottomCBStatus_e_1[i] === "on" && bottomCBlineDashArrayList[i] === "") ||
                    //      (transformerVoltageLineStatus_e_1[i] === "on" && trfTopCBStatus_e_1[i] === "off" && trfBottomCBStatus_e_1[i] === "off" && bottomCBlineDashArrayList[i] === "")
                    //     ){

                    //     combinedDashArray = ""
                    //     console.log("IN ELSE IF CONDITION", combinedDashArray)
                    // }
                    // else{
                    //     combinedDashArray = "5,5"
                    //     console.log("IN ELSE CONDITION", combinedDashArray)

                    // }

                    // console.log("|||| combinedDashArray ",combinedDashArray)

                    // Draw smaller bus line for feeders (same as before)
                    const smallerBusLineY = busLineY + 300;
                    const smallerBusLineStartX = currentX - 70;
                    const smallerBusLineEndX = currentX + totalFeederWidth;
                    const smallerBusLine = createLineElement(smallerBusLineStartX + 10, smallerBusLineY, smallerBusLineEndX + 30, smallerBusLineY, "green", 3, combinedDashArray);
                    // console.log("+++++ smallerBusLine ",combinedDashArray)
                    // If the bus line segment is dashed, make the transformer line dashed too
                    if (dashStyle) {
                        transformerTopCBtoMainBusLine.setAttribute("stroke-dasharray", dashStyle);
                        transformerBottomCBtoSmallBusLine.setAttribute("stroke-dasharray", dashStyle);
                        transformerTopCBtoTrf.setAttribute("stroke-dasharray", dashStyle);
                        transformerBottomCBtoTrf.setAttribute("stroke-dasharray", dashStyle);
                        smallerBusLine.setAttribute("stroke-dasharray", dashStyle);
                    }

                    svg.appendChild(transformerTopCBtoMainBusLine);
                    svg.appendChild(transformerBottomCBtoSmallBusLine);
                    svg.appendChild(transformerTopCBtoTrf);
                    svg.appendChild(transformerBottomCBtoTrf);
                    svg.appendChild(smallerBusLine);

                    // TRF TOP CB--------------------------------- START
                    // +++++++++++++++++++++++++++++++++++++++ TRF top CB Data Table
                    const trfTopCBHeaders = ["V", "I", "MW", "MVAR", "PF"]; // Headers for display
                    // console.log("data :: ",data)
                    // console.log("data inc :: ",data.transformer_data[i])
                   
                    // if (true) {}
                    const trfTopCBData = {};

                    if (data && typeof data === "object" &&  "transformer_data" in data) {

                        // console.log("transformer_data available, TRF TOP :: ")
                        const trfTopCBDefaultData = data.transformer_data[i]
                        // ✅ Step 1: Set Initial Values (Runs Once)
                        for (let i = 0; i < transformerCount; i++) {
                            // console.log("Initial trfTopCBData:", trfTopCBDefaultData); // Initial log
                            trfTopCBData[i] = {
                                V: trfTopCBDefaultData?.['R_VOLT'] || "0.0",
                                I: trfTopCBDefaultData?.['R_CURR'] || "0.0",
                                MW: trfTopCBDefaultData?.['Y_CURR'] || "0.0",
                                MVAR: trfTopCBDefaultData?.['ACTIVE_IMPORT_ENERGY'] || "0.0",
                                PF: trfTopCBDefaultData?.['R_PF'] || "0.0",
                            };
                        }
                    }
                    else{
                        console.log("transformer_data Not available, TRF TOP :: ")
                        for (let i = 0; i < transformerCount; i++) {
                            trfTopCBData[i] = {
                                V: "N/A",
                                I: "N/A",
                                MW: "N/A",
                                MVAR: "N/A",
                                PF: "N/A",
                            };
                        }
                    }

                    // Data table for each incoming line
                    const tableX = 330; // X position for the data table (left side of incoming line)
                    const tableY = 170; // Y position for the table
                    const tableWidth = 100;
                    const tableHeight = 150;

                    trfTopCBHeaders.forEach((header, index) => {
                        const rowY = tableY + 20 + index * 20;

                        // Create header text
                        const headerText = createTextElement(transformerX - 115, rowY, header, "14px", "black");
                        svg.appendChild(headerText);

                        // Get value
                        const value = trfTopCBData[i][header];
                        const numericValue = parseFloat(value);
                        const isNumber = !isNaN(numericValue);

                        // Default styles
                        let bgColor = "none";
                        let textColor = "black";
                        let applyFadeEffect = false; // Flag for fade effect

                        if (value === "N/A") {
                            bgColor = "pink";  
                            textColor = "black";
                        } else if (isNumber) {
                            if (numericValue < 2.0) {
                                bgColor = "red";  
                                textColor = "white";
                                applyFadeEffect = true;  // 🔴 Apply fade-in for values < 2.00
                            } else if (numericValue > 400) {
                                bgColor = "blue";
                                textColor = "white";
                                applyFadeEffect = true;  // 🔵 Apply fade-in for values > 400
                            }
                        }

                        const valueTextId = `trf-top-value-${i}-${header}`;
                        const bgRectId = `trf-top-bg-${i}-${header}`;

                        let bgRect = svg.querySelector(`#${bgRectId}`);
                        let valueText = svg.querySelector(`#${valueTextId}`);

                        // Background rectangle properties
                        const bgWidth = 40;
                        const bgHeight = 16;
                        const bgX = transformerX - 70;
                        const bgY = rowY - 12;

                        // Create or update background rectangle
                        if (!bgRect) {
                            bgRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                            bgRect.setAttribute("id", bgRectId);
                            bgRect.setAttribute("x", bgX);
                            bgRect.setAttribute("y", bgY);
                            bgRect.setAttribute("width", bgWidth);
                            bgRect.setAttribute("height", bgHeight);
                            bgRect.setAttribute("rx", "4");
                            bgRect.setAttribute("ry", "4");
                            bgRect.setAttribute("fill", bgColor);
                            svg.appendChild(bgRect);
                        } else {
                            bgRect.setAttribute("fill", bgColor);
                        }

                        // Create or update value text
                        if (!valueText) {
                            valueText = createTextElement(transformerX - 65, rowY, value, "14px", textColor);
                            valueText.setAttribute("id", valueTextId);
                            valueText.setAttribute("fill", textColor);
                            svg.appendChild(valueText);
                        } else {
                            valueText.textContent = value;
                            valueText.setAttribute("fill", textColor);
                        }

                        // Apply fade-in effect only if the condition is met
                        // comment this IF condition if fade in effect is not needed.
                        if (applyFadeEffect) {
                            valueText.style.opacity = "0"; // Start hidden
                            valueText.style.transition = "opacity 0.5s ease-in"; // Fade-in effect
                            setTimeout(() => (valueText.style.opacity = "1"), 10);
                        }
                    });

                    // +++++++++++++++++++++++++++++++++++++++
                    const trfTopCBStatus = config.trfTopCBStatus || []; // Status array for TRF TOP CBs
                    const trfTopiconGroup = document.createElementNS(svgNamespace, "g"); // Group to hold the icon and additional elements

                    if (trfTopCBStatus[i] === "error") {
                        // Create two triangles for the error state
                        const triangle1 = document.createElementNS(svgNamespace, "polygon");
                        triangle1.setAttribute(
                            "points",
                            `${transformerX - CB_iconSize / 2},${busLineY + 70 - CB_iconSize}
                         ${transformerX + CB_iconSize / 2},${busLineY + 70 - CB_iconSize}
                         ${transformerX - CB_iconSize / 2},${busLineY + 70}`
                        );
                        triangle1.setAttribute("fill", "white"); // Top-left color

                        const triangle2 = document.createElementNS(svgNamespace, "polygon");
                        triangle2.setAttribute(
                            "points",
                            `${transformerX + CB_iconSize / 2},${busLineY + 70 - CB_iconSize}
                         ${transformerX + CB_iconSize / 2},${busLineY + 70}
                         ${transformerX - CB_iconSize / 2},${busLineY + 70}`
                        );
                        triangle2.setAttribute("fill", "black"); // Bottom-right color

                        // Create a border rectangle for the icon
                        const border = document.createElementNS(svgNamespace, "rect");
                        border.setAttribute("x", transformerX - CB_iconSize / 2);
                        border.setAttribute("y", busLineY + 70 - CB_iconSize);
                        border.setAttribute("width", CB_iconSize);
                        border.setAttribute("height", CB_iconSize);
                        border.setAttribute("stroke", "black");
                        border.setAttribute("fill", "none");

                        // Append triangles and border to the group
                        trfTopiconGroup.appendChild(triangle1);
                        trfTopiconGroup.appendChild(triangle2);
                        trfTopiconGroup.appendChild(border);
                    } else {
                        // Handle non-error states with a single rectangle
                        const trfTopColor = trfTopCBStatus[i] === "on" ? "red" : trfTopCBStatus[i] === "off" ? "white" : "blue";
                        const trfTopCB = document.createElementNS(svgNamespace, "rect");
                        trfTopCB.setAttribute("x", transformerX - CB_iconSize / 2);
                        trfTopCB.setAttribute("y", busLineY + 70 - CB_iconSize);
                        trfTopCB.setAttribute("width", CB_iconSize);
                        trfTopCB.setAttribute("height", CB_iconSize);
                        trfTopCB.setAttribute("fill", trfTopColor);
                        trfTopCB.setAttribute("stroke", "red");

                        // Append the rectangle to the group
                        trfTopiconGroup.appendChild(trfTopCB);
                    }

                    // Append the group to the SVG
                    svg.appendChild(trfTopiconGroup);
                    // TRF TOP CB--------------------------------- END

                    // TRF BOTTOM CB--------------------------------- START
                    const trfBottomCBHeaders = ["V", "I", "MW", "MVAR", "PF"]; // Headers for display
                    const trfBottomCBData = {};
                    if (data && typeof data === "object" &&  "incomer11_data" in data) {

                        const trfBottomCBDefaultData = data.incomer11_data[i]
                        // console.log("transformer_data available, TRF TOP :: ")
                        // const trfTopCBDefaultData = data.transformer_data[i]
                        // ✅ Step 1: Set Initial Values (Runs Once)
                        for (let i = 0; i < transformerCount; i++) {
                            // console.log("Initial trfTopCBData:", trfTopCBDefaultData); // Initial log
                            trfBottomCBData[i] = {
                                V: trfBottomCBDefaultData?.['RY_VOLT'] || "0.0",
                                I: trfBottomCBDefaultData?.['R_CURR'] || "0.0",
                                MW: trfBottomCBDefaultData?.['ACTIVE_POWER_TOTAL'] || "0.0",
                                MVAR: trfBottomCBDefaultData?.['REACTIVE_POWER'] || "0.0",
                                PF: trfBottomCBDefaultData?.['PF_AVG'] || "0.0",
                            };
                        }
                    }
                    else{
                        console.log("transformer_data Not available, TRF TOP :: ")
                        for (let i = 0; i < transformerCount; i++) {
                            trfBottomCBData[i] = {
                                V: "N/A",
                                I: "N/A",
                                MW: "N/A",
                                MVAR: "N/A",
                                PF: "N/A",
                            };
                        }

                    }

                    trfBottomCBHeaders.forEach((header, index) => {
                        const rowY = 360 + index * 20;

                        // Create header text
                        const headerText = createTextElement(transformerX - 100, rowY, header, "13px", "black");
                        svg.appendChild(headerText);

                        // Get value
                        const value = trfBottomCBData[i][header];
                        const numericValue = parseFloat(value);
                        const isNumber = !isNaN(numericValue);

                        // Default styles
                        let bgColor = "none";
                        let textColor = "black";
                        let applyFadeEffect = false; // Flag for fade effect

                        if (value === "N/A") {
                            bgColor = "pink";  
                            textColor = "black";
                        } else if (isNumber) {
                            if (numericValue < 2.0) {
                                bgColor = "red";  
                                textColor = "white";
                                applyFadeEffect = true;  // 🔴 Apply fade-in for values < 2.00
                            } else if (numericValue > 400) {
                                bgColor = "blue";
                                textColor = "white";
                                applyFadeEffect = true;  // 🔵 Apply fade-in for values > 400
                            }
                        }

                        const valueTextId = `trf-bottom-value-${i}-${header}`;
                        const bgRectId = `trf-bottom-bg-${i}-${header}`;

                        let bgRect = svg.querySelector(`#${bgRectId}`);
                        let valueText = svg.querySelector(`#${valueTextId}`);

                        // Background rectangle properties
                        const bgWidth = 40;
                        const bgHeight = 16;
                        const bgX = transformerX - 60;
                        const bgY = rowY - 12;

                        // Create or update background rectangle
                        if (!bgRect) {
                            bgRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                            bgRect.setAttribute("id", bgRectId);
                            bgRect.setAttribute("x", bgX);
                            bgRect.setAttribute("y", bgY);
                            bgRect.setAttribute("width", bgWidth);
                            bgRect.setAttribute("height", bgHeight);
                            bgRect.setAttribute("rx", "4");
                            bgRect.setAttribute("ry", "4");
                            bgRect.setAttribute("fill", bgColor);
                            svg.appendChild(bgRect);
                        } else {
                            bgRect.setAttribute("fill", bgColor);
                        }

                        // Create or update value text
                        if (!valueText) {
                            valueText = createTextElement(transformerX - 55, rowY, value, "13px", textColor);
                            valueText.setAttribute("id", valueTextId);
                            valueText.setAttribute("fill", textColor);
                            svg.appendChild(valueText);
                        } else {
                            valueText.textContent = value;
                            valueText.setAttribute("fill", textColor);
                        }

                        // Apply fade-in effect only if the condition is met
                        // comment this IF condition if fade in effect is not needed.
                        if (applyFadeEffect) {
                            valueText.style.opacity = "0"; // Start hidden
                            valueText.style.transition = "opacity 0.5s ease-in"; // Fade-in effect
                            setTimeout(() => (valueText.style.opacity = "1"), 10);
                        }
                    });



                    // +++++++++++++++++++++++++++++++++++++++
                    const trfBottomCBStatus = config.trfBottomCBStatus || []; // Status array for TRF TOP CBs
                    const trfBottomiconGroup = document.createElementNS(svgNamespace, "g"); // Group to hold the icon and additional elements

                    if (trfBottomCBStatus[i] === "error") {
                        // Create two triangles for the error state
                        const triangle1 = document.createElementNS(svgNamespace, "polygon");
                        triangle1.setAttribute(
                            "points",
                            `${transformerX - CB_iconSize / 2},${busLineY + 235 - CB_iconSize}
                         ${transformerX + CB_iconSize / 2},${busLineY + 235 - CB_iconSize}
                         ${transformerX - CB_iconSize / 2},${busLineY + 235}`
                        );
                        triangle1.setAttribute("fill", "white"); // Top-left color

                        const triangle2 = document.createElementNS(svgNamespace, "polygon");
                        triangle2.setAttribute(
                            "points",
                            `${transformerX + CB_iconSize / 2},${busLineY + 235 - CB_iconSize}
                         ${transformerX + CB_iconSize / 2},${busLineY + 235}
                         ${transformerX - CB_iconSize / 2},${busLineY + 235}`
                        );
                        triangle2.setAttribute("fill", "black"); // Bottom-right color

                        // Create a border rectangle for the icon
                        const border = document.createElementNS(svgNamespace, "rect");
                        border.setAttribute("x", transformerX - CB_iconSize / 2);
                        border.setAttribute("y", busLineY + 235 - CB_iconSize);
                        border.setAttribute("width", CB_iconSize);
                        border.setAttribute("height", CB_iconSize);
                        border.setAttribute("stroke", "black");
                        border.setAttribute("fill", "none");

                        // Append triangles and border to the group
                        trfBottomiconGroup.appendChild(triangle1);
                        trfBottomiconGroup.appendChild(triangle2);
                        trfBottomiconGroup.appendChild(border);
                    } else {
                        // Handle non-error states with a single rectangle
                        const trfBottomColor = trfBottomCBStatus[i] === "on" ? "red" : trfBottomCBStatus[i] === "off" ? "white" : "blue"; // Default colors for on/off/other states
                        const bottomCB = document.createElementNS(svgNamespace, "rect");
                        bottomCB.setAttribute("x", transformerX - CB_iconSize / 2);
                        bottomCB.setAttribute("y", busLineY + 220);
                        bottomCB.setAttribute("width", CB_iconSize);
                        bottomCB.setAttribute("height", CB_iconSize);
                        bottomCB.setAttribute("fill", trfBottomColor);
                        bottomCB.setAttribute("stroke", "red");

                        // Append the rectangle to the group
                        trfBottomiconGroup.appendChild(bottomCB);
                    }

                    // Append the group to the SVG
                    svg.appendChild(trfBottomiconGroup);
                    // TRF BOTTOM CB--------------------------------- END

                    // Object to store data for all feeders (dynamically updated)
                    const feedersData = {};
                    // console.log("###### feederNames",feederNames)
                    // Check if busline is dashed
                    const isBuslineDashed = combinedDashArray && combinedDashArray.includes("5,5");

               
                    // console.log('******** data.feeder >>>>>> ', data.feeder);
                    const outGoingFeederCBDataHeaders = ["V", "I", "MW", "MVAR", "PF"];
                    const ogfeederData = {};

                    // Loop through each feeder in `data.feeder`
                    // console.log("Actual Feeder Count (from data.feeder):", data.feeder.length);
                    // console.log("feederCount --",feederCount)
                    // console.log("data.feeder",data.feeder)

                    // =====================================
                    const assignFeedersToTransformers = (config, data) => {
                        let feederIndex = 0; // Initialize feeder index
                        const transformers = transformerFeederCounts.map((feederCount, transformerIndex) => {
                            // Slice the correct range of feeders for this transformer
                            // console.log("feederIndex :::::: ",feederIndex)
                            // console.log("feederCount :::::: ",feederCount)
                            if (data && typeof data === "object" && "feeder" in data) {
                                // console.log("data.feeder :::::: ",data.feeder)
                                const feedersForThisTransformer = data.feeder.slice(feederIndex, feederIndex + feederCount);
                                feederIndex += feederCount; // Update the feederIndex for the next transformer
                                // Return the feeders assigned to this transformer
                                return {
                                    transformerIndex,
                                    feederCount,
                                    feeders: feedersForThisTransformer,
                                };
                            }
                        });
                        return transformers;
                    };
                    const transformersWithFeeders = assignFeedersToTransformers(transformerFeederCounts, data);
                    // Log the result to see the output
                    // console.log("tt transformersWithFeeders = ",transformersWithFeeders);
                    // console.log("tt transformerIndex = ",transformersWithFeeders[i].transformerIndex);
                    // console.log("tt feederCount = ",transformersWithFeeders[i].feederCount);
                    // console.log("tt feeders = ",transformersWithFeeders[i].feeders);
                    // console.log("tt feeders = ",transformersWithFeeders[i].feeders[i].titlename);
                    let new_feederCount;
                    if (data && typeof data === "object" && "feeder" in data) {
                        new_feederCount = transformersWithFeeders[i].feederCount
                    }
                    else
                    {
                        // console.log("Error feederCount = transforme")
                    }
                    // console.log("tt new_feederCount ",new_feederCount);
                    // console.log("tt transformerFeederCounts ",transformerFeederCounts[i]);
                    // =====================================
                    // console.log("tt feederNames ",feederNames);

                    if (new_feederCount !== null && new_feederCount !==  undefined ) {
                        // console.log("if new_feederCount && typeof new_feederCount ============")

                        for (let j = 0; j < new_feederCount; j++) {
                            // console.log("###### titlename",transformersWithFeeders[i].feeders[j].titlename)

                            if (data && typeof data === "object" && "feeder" in data) {

                                // console.log("tt feederNames ",feederNames[i]);
                                const outgoingFeederData = transformersWithFeeders[i].feeders[j]; // Use `j` as the index to access each feeder
                                // console.log("#########################################");

                                const getMatchingFeeders = (feederGroups, feederData) => {
                                    const result = [];
                                    for (let groupIndex = 0; groupIndex < feederGroups.length; groupIndex++) {
                                        const group = feederGroups[groupIndex];
                                        const matchingFeeders = [];
                                       
                                        for (let i = 0; i < group.length; i++) {
                                            const { feederName } = group[i];
                                            const matchingFeeder = feederData.find(feeder => feeder.titlename === feederName);
                                            if (matchingFeeder) {
                                                matchingFeeders.push(matchingFeeder);
                                            }
                                        }
                                        result.push(matchingFeeders);
                                    }
                                    return result;
                                };
                                // Get the matching feeder data
                                const matchingFeeders = getMatchingFeeders(feederNames, data.feeder);

                                // Print the results
                                for (let groupIndex = 0; groupIndex < matchingFeeders.length; groupIndex++) {
                                    const group = matchingFeeders[groupIndex];

                                    for (let i = 0; i < group.length; i++) {
                                     
                                       
                                        let ogfeederData = {
                                            V: group[i]?.R_VOLT || "0.0",
                                            I: group[i]?.R_CURR || "0.0",
                                            MW: group[i]?.Y_CURR || "0.0",
                                            MVAR: group[i]?.ACTIVE_IMPORT_ENERGY || "0.0",
                                            PF: group[i]?.titlename || "0.0",
                                        };
                                    }
                                }
                                // console.log("#########################################");

                            } else{
                                // console.log("incomer33kv not available :::: ")
                                for (let i = 0; i < new_feederCount; i++) {
                                    ogfeederData[i] = {
                                        V: "X-N/A",
                                        I: "X-N/A",
                                        MW: "X-N/A",
                                        MVAR: "X-N/A",
                                        PF: "X-N/A",
                                    };
                                }
                             
                            }
                            // console.log(`Transformer ${i + 1} Feeders Data: `, ogfeederData[i]);
                            // console.log("Final ogfeederData >>>>>> ", ogfeederData)
                            // console.log("feederCount 2-- ", feederCount);
                            const feederX = currentX + j * (feederWidth + margin);

                            // Handle dashStyle for feeder lines based on busline style and feeder CB status
                            const feederCBStatusArray = feederCBStatus[i]; // Array of statuses for each feeder
                            const currentFeederStatus = feederCBStatusArray[j]; // Current feeder's status
                            const dashStyleOGFLine =
                                isBuslineDashed
                                    ? "5,5" // Keep feeder line dashed if the busline is dashed
                                    : currentFeederStatus === "off" || currentFeederStatus === "error"
                                        ? "5,5"
                                        : currentFeederStatus === "on"
                                            ? ""
                                            : "5,5";

                            // Determine the feeder line color based on the busline style
                            const feederLineColor = "green";

                            // Create the feeder lines with the dashStyle applied
                            const feederLine1 = createLineElement(feederX,smallerBusLineY,feederX,smallerBusLineY + 80,feederLineColor,3,combinedDashArray);
                            const feederLine2 = createLineElement(feederX,smallerBusLineY + 150,feederX,smallerBusLineY + 80,feederLineColor,3,dashStyleOGFLine);

                            // Append the feeder lines to the SVG
                            // console.log("@@@@ 1",feederLine1[i])
                            svg.appendChild(feederLine1);
                            svg.appendChild(feederLine2);

                            // Add a square in the center of the feeder
                            const feederCBSize = 15;
                            const feederCenterY = smallerBusLineY + 75;
                            const trfBottomIconGroupId = `feeder-cb-group-${i}-${j}`;
                            // console.log("@@@@ 1",trfBottomIconGroupId, "+", dashStyle)

                            let trfBottomIconGroup = svg.querySelector(`#${trfBottomIconGroupId}`);
                            if (!trfBottomIconGroup) {
                                trfBottomIconGroup = document.createElementNS(svgNamespace, "g");
                                trfBottomIconGroup.setAttribute("id", trfBottomIconGroupId);

                                if (currentFeederStatus === "error") {
                                    // Create error-state CB using two triangles
                                    const triangle1 = document.createElementNS(svgNamespace, "polygon");
                                    triangle1.setAttribute(
                                        "points",
                                        `${feederX - feederCBSize / 2},${feederCenterY - feederCBSize / 2}
                                         ${feederX + feederCBSize / 2},${feederCenterY - feederCBSize / 2}
                                         ${feederX - feederCBSize / 2},${feederCenterY + feederCBSize / 2}`
                                    );
                                    triangle1.setAttribute("fill", "white");

                                    const triangle2 = document.createElementNS(svgNamespace, "polygon");
                                    triangle2.setAttribute(
                                        "points",
                                        `${feederX + feederCBSize / 2},${feederCenterY - feederCBSize / 2}
                                         ${feederX + feederCBSize / 2},${feederCenterY + feederCBSize / 2}
                                         ${feederX - feederCBSize / 2},${feederCenterY + feederCBSize / 2}`
                                    );
                                    triangle2.setAttribute("fill", "black");

                                    const border = document.createElementNS(svgNamespace, "rect");
                                    border.setAttribute("x", feederX - feederCBSize / 2);
                                    border.setAttribute("y", feederCenterY - feederCBSize + 7.5);
                                    border.setAttribute("width", 15);
                                    border.setAttribute("height", 15);
                                    border.setAttribute("stroke", "black");
                                    border.setAttribute("fill", "none");

                                    trfBottomIconGroup.appendChild(triangle1);
                                    trfBottomIconGroup.appendChild(triangle2);
                                    trfBottomIconGroup.appendChild(border);
                                } else {
                                    const feederColor =
                                        currentFeederStatus === "on"
                                            ? "red"
                                            : currentFeederStatus === "off"
                                            ? "white"
                                            : "blue";
                                    const feederCB = document.createElementNS(svgNamespace, "rect");
                                    feederCB.setAttribute("x", feederX - feederCBSize / 2);
                                    feederCB.setAttribute("y", feederCenterY - feederCBSize / 2);
                                    feederCB.setAttribute("width", feederCBSize);
                                    feederCB.setAttribute("height", feederCBSize);
                                    feederCB.setAttribute("fill", feederColor);
                                    feederCB.setAttribute("stroke", "red");
                                    trfBottomIconGroup.appendChild(feederCB);
                                }
                                svg.appendChild(trfBottomIconGroup);
                            }
                            // // ============================= New logic              
                            // // ============================= New logic

                            const outGoingFeederCBDataHeaders = ["V", "I", "MW", "MVAR", "PF"]; // Headers to plot
                            const ogfeederData = [];

                            let startX = 160; // Initial X position
                            let startY = 500; // Fixed Y position
                            const feederSpacing = feederWidth + margin; // Horizontal spacing for feeders
                            const groupMargin = 70; // Added margin between groups

                            let current_feederX = startX;

                            // Track if headers were already added at each column X position
                            const addedHeaderPositions = new Set();

                            for (let i = 0; i < feederNames.length; i++) {
                                const group = feederNames[i];

                                for (let j = 0; j < group.length; j++) {
                                    const feederName = group[j].feederName;
                                    const matchedFeeder = data.feeder.find(feeder => feeder.titlename === feederName);

                                    let feederData = {
                                        V: matchedFeeder ? matchedFeeder["R_VOLT"] ?? "0.0" : "N/A",
                                        I: matchedFeeder ? matchedFeeder["R_CURR"] ?? "0.0" : "N/A",
                                        MW: matchedFeeder ? matchedFeeder["Y_CURR"] ?? "0.0" : "N/A",
                                        MVAR: matchedFeeder ? matchedFeeder["ACTIVE_IMPORT_ENERGY"] ?? "0.0" : "N/A",
                                        PF: matchedFeeder ? matchedFeeder["PF_R"] ?? "0.0" : "N/A"
                                    };
                                    ogfeederData.push(feederData);
                                    if (!addedHeaderPositions.has(current_feederX)) {
                                        outGoingFeederCBDataHeaders.forEach((header, index) => {
                                            const rowY = startY + index * 20;
                                            const headerTextId = `header-${header}-${current_feederX}`;
                                            if (!svg.querySelector(`#${headerTextId}`)) {
                                                const headerText = createTextElement(
                                                    current_feederX - 45,
                                                    rowY,
                                                    header,
                                                    "13px",
                                                    "black"
                                                );
                                                headerText.setAttribute("id", headerTextId);
                                                svg.appendChild(headerText);
                                            }
                                        });
                                        addedHeaderPositions.add(current_feederX);
                                    }
                                    outGoingFeederCBDataHeaders.forEach((header, index) => {
                                        const rowY = startY + index * 20;

                                        // Create unique IDs
                                        const valueTextId = `feeder-value-${i}-${j}-${header}`;
                                        const bgRectId = `feeder-bg-${i}-${j}-${header}`;

                                        let valueText = svg.querySelector(`#${valueTextId}`);
                                        let bgRect = svg.querySelector(`#${bgRectId}`);

                                        let value = feederData[header]; // Get the data value

                                        // Check if value is numeric
                                        let numericValue = parseFloat(value);
                                        let isNumber = !isNaN(numericValue);

                                        // Default styles
                                        let bgColor = "transparent";
                                        let textColor = "black";
                                        let applyFadeEffect = false; // Flag for fade effect

                                        if (value === "N/A") {
                                            bgColor = "pink";  // 🌸 Pink for "N/A"
                                            textColor = "black";
                                        } else if (isNumber) {
                                            if (numericValue < 2.0) {
                                                bgColor = "red";  
                                                textColor = "white";
                                                applyFadeEffect = true;  // 🔴 Apply fade-in for values < 2.00
                                            } else if (numericValue > 400) {
                                                bgColor = "blue";
                                                textColor = "white";
                                                applyFadeEffect = true;  // 🔵 Apply fade-in for values > 400
                                            }
                                        }

                                        // Define dimensions for background
                                        const bgWidth = 40;
                                        const bgHeight = 16;
                                        const bgX = current_feederX - 5;
                                        const bgY = rowY - 12;

                                        // Create or update background rectangle
                                        if (!bgRect) {
                                            bgRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                                            bgRect.setAttribute("id", bgRectId);
                                            bgRect.setAttribute("x", bgX);
                                            bgRect.setAttribute("y", bgY);
                                            bgRect.setAttribute("width", bgWidth);
                                            bgRect.setAttribute("height", bgHeight);
                                            bgRect.setAttribute("rx", "4");
                                            bgRect.setAttribute("ry", "4");
                                            bgRect.setAttribute("fill", bgColor);
                                            svg.appendChild(bgRect);
                                        } else {
                                            bgRect.setAttribute("fill", bgColor);
                                        }

                                        // Create or update value text
                                        if (!valueText) {
                                            valueText = createTextElement(current_feederX, rowY, value, "13px", textColor);
                                            valueText.setAttribute("id", valueTextId);
                                            valueText.setAttribute("fill", textColor);
                                            svg.appendChild(valueText);
                                        } else {
                                            valueText.textContent = value;
                                            valueText.setAttribute("fill", textColor);
                                        }

                                        // Apply fade-in effect only if the condition is met
                                        // comment this IF condition if fade in effect is not needed.
                                        if (applyFadeEffect) {
                                            valueText.style.opacity = "0"; // Start hidden
                                            valueText.style.transition = "opacity 0.5s ease-in"; // Fade-in effect
                                            setTimeout(() => (valueText.style.opacity = "1"), 10);
                                        }
                                    });

                                    current_feederX += feederSpacing;
                                }
                                // ✅ Add margin after completing each group
                                current_feederX += groupMargin;
                            }

                            // Feeder Label
                            const feederLabelId = `feeder-label-${i}-${j}`;

                            function formatString(inputString) {
                                let maxLength = 12; // Max characters per line if no space is found
                                let minLength = 8; // If within 8-12 characters, keep as it is

                                // Check if there's a space in the input
                                if (inputString.includes(" ")) {
                                    return inputString.split(" "); // Break from spaces
                                }
                                // If length is between 8 and 12, return as is
                                if (inputString.length >= minLength && inputString.length <= maxLength) {
                                    return [inputString]; // Keep it as a single line
                                }
                                // If longer than 12, break using maxLength logic
                                let words = [];
                                let start = 0;
                                while (start < inputString.length) {
                                    let end = start + maxLength;
                                    if (end >= inputString.length) {
                                        words.push(inputString.slice(start)); // Push the remaining text
                                        break;
                                    }
                                    words.push(inputString.slice(start, end) + (end < inputString.length ? "-" : "")); // Break at maxLength
                                    start = end;
                                }
                                return words;
                            }
                            // Example usage:
                            let inputString = feederNames[i][j]['feederName'];
                            let updatedFeederName = formatString(inputString); // Now returns an array of broken words

                            if (!svg.querySelector(`#${feederLabelId}`)) {
                                const feederLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
                                feederLabel.setAttribute("x", feederX - 20);
                                feederLabel.setAttribute("y", smallerBusLineY + 160);
                                feederLabel.setAttribute("font-size", "12px");
                                feederLabel.setAttribute("fill", "black");
                                feederLabel.setAttribute("id", feederLabelId);

                                // Add each broken word as a <tspan>
                                updatedFeederName.forEach((line, index) => {
                                    let tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                                    tspan.setAttribute("x", feederX - 20); // Align with the main text
                                    tspan.setAttribute("dy", index === 0 ? "0" : "1.2em"); // Shift down for each line
                                    tspan.textContent = line;
                                    feederLabel.appendChild(tspan);
                                });
                                svg.appendChild(feederLabel);
                            }
                        }
                    }
                    else{
                        console.log("22 else new_feederCount && typeof new_feederCount ============")
                        for (let j = 0; j < transformerFeederCounts[i]; j++) {
                     
                            // console.log("incomer33kv not available :::: ")
                            // console.log("ogfeederData[i] :: ",ogfeederData[i])
                            for (let i = 0; i < new_feederCount; i++) {
                                ogfeederData[i] = {
                                    V: "N/A",
                                    I: "N/A",
                                    MW: "N/A",
                                    MVAR: "N/A",
                                    PF: "N/A",
                                };
                            }
                            // console.log("ogfeederData[i] :: ",ogfeederData[i])
                            // console.log("$$$$$$$$$$$$$$$$$$$$$$$$")
                            // console.log("feederCount 2-- ", feederCount);
                            const feederX = currentX + j * (feederWidth + margin);

                            // Handle dashStyle for feeder lines based on busline style and feeder CB status
                            const feederCBStatusArray = feederCBStatus[i]; // Array of statuses for each feeder
                            const currentFeederStatus = feederCBStatusArray[j]; // Current feeder's status
                            const dashStyleOGFLine =
                                isBuslineDashed
                                    ? "5,5" // Keep feeder line dashed if the busline is dashed
                                    : currentFeederStatus === "off" || currentFeederStatus === "error"
                                        ? "5,5"
                                        : currentFeederStatus === "on"
                                            ? ""
                                            : "5,5";

                            // Determine the feeder line color based on the busline style
                            const feederLineColor = "green";

                            // Create the feeder lines with the dashStyle applied
                            const feederLine1 = createLineElement(feederX,smallerBusLineY,feederX,smallerBusLineY + 80,feederLineColor,3,combinedDashArray);
                            const feederLine2 = createLineElement(feederX,smallerBusLineY + 150,feederX,smallerBusLineY + 80,feederLineColor,3,dashStyleOGFLine);

                            // Append the feeder lines to the SVG

                            // console.log("@@@@ 1",feederLine1[i])
                            svg.appendChild(feederLine1);
                            svg.appendChild(feederLine2);

                            // Add a square in the center of the feeder
                            const feederCBSize = 15;
                            const feederCenterY = smallerBusLineY + 75;
                            const trfBottomIconGroupId = `feeder-cb-group-${i}-${j}`;
                            // console.log("@@@@ 1",trfBottomIconGroupId, "+", dashStyle)

                            let trfBottomIconGroup = svg.querySelector(`#${trfBottomIconGroupId}`);
                            if (!trfBottomIconGroup) {
                                trfBottomIconGroup = document.createElementNS(svgNamespace, "g");
                                trfBottomIconGroup.setAttribute("id", trfBottomIconGroupId);

                                if (currentFeederStatus === "error") {
                                    // Create error-state CB using two triangles
                                    const triangle1 = document.createElementNS(svgNamespace, "polygon");
                                    triangle1.setAttribute(
                                        "points",
                                        `${feederX - feederCBSize / 2},${feederCenterY - feederCBSize / 2}
                                         ${feederX + feederCBSize / 2},${feederCenterY - feederCBSize / 2}
                                         ${feederX - feederCBSize / 2},${feederCenterY + feederCBSize / 2}`
                                    );
                                    triangle1.setAttribute("fill", "white");

                                    const triangle2 = document.createElementNS(svgNamespace, "polygon");
                                    triangle2.setAttribute(
                                        "points",
                                        `${feederX + feederCBSize / 2},${feederCenterY - feederCBSize / 2}
                                         ${feederX + feederCBSize / 2},${feederCenterY + feederCBSize / 2}
                                         ${feederX - feederCBSize / 2},${feederCenterY + feederCBSize / 2}`
                                    );
                                    triangle2.setAttribute("fill", "black");

                                    const border = document.createElementNS(svgNamespace, "rect");
                                    border.setAttribute("x", feederX - feederCBSize / 2);
                                    border.setAttribute("y", feederCenterY - feederCBSize + 7.5);
                                    border.setAttribute("width", 15);
                                    border.setAttribute("height", 15);
                                    border.setAttribute("stroke", "black");
                                    border.setAttribute("fill", "none");

                                    trfBottomIconGroup.appendChild(triangle1);
                                    trfBottomIconGroup.appendChild(triangle2);
                                    trfBottomIconGroup.appendChild(border);
                                } else {
                                    const feederColor =
                                        currentFeederStatus === "on"
                                            ? "red"
                                            : currentFeederStatus === "off"
                                            ? "white"
                                            : "blue";
                                    const feederCB = document.createElementNS(svgNamespace, "rect");
                                    feederCB.setAttribute("x", feederX - feederCBSize / 2);
                                    feederCB.setAttribute("y", feederCenterY - feederCBSize / 2);
                                    feederCB.setAttribute("width", feederCBSize);
                                    feederCB.setAttribute("height", feederCBSize);
                                    feederCB.setAttribute("fill", feederColor);
                                    feederCB.setAttribute("stroke", "red");
                                    trfBottomIconGroup.appendChild(feederCB);
                                }
                                svg.appendChild(trfBottomIconGroup);
                            }
                            // // ============================= New logic              
                            // // ============================= New logic

                            outGoingFeederCBDataHeaders.forEach((header, index) => {
                                const rowY = 490 + index * 20;

                                // Unique IDs
                                const headerTextId = `header-${i}-${j}-${header}`;
                                const valueTextId = `feeder-value-${i}-${j}-${header}`;
                                const bgRectId = `feeder-bg-${i}-${j}-${header}`;

                                // Add header text if not exists
                                if (!svg.querySelector(`#${headerTextId}`)) {
                                    const headerText = createTextElement(feederX - 100, rowY, header, "13px", "black");
                                    headerText.setAttribute("id", headerTextId);
                                    svg.appendChild(headerText);
                                }

                                // Get feeder data
                                let value = ogfeederData[i] ? ogfeederData[i][header] : "N/A";

                                // Determine background and text colors
                                let bgColor = "transparent";
                                let textColor = "black";
                                let applyFadeEffect = false; // Flag for fade-in animation

                                if (value === "N/A") {
                                    bgColor = "pink";  // 🌸 Pink for "N/A"
                                } else {
                                    let numericValue = parseFloat(value);
                                    if (!isNaN(numericValue)) {
                                        if (numericValue < 2.0) {
                                            bgColor = "red";  
                                            textColor = "white";
                                            applyFadeEffect = true; // 🔴 Apply fade-in effect
                                        } else if (numericValue > 400) {
                                            bgColor = "blue";
                                            textColor = "white";
                                            applyFadeEffect = true; // 🔵 Apply fade-in effect
                                        }
                                    }
                                }

                                // Background rectangle dimensions & positions
                                const bgWidth = 40;
                                const bgHeight = 16;
                                const bgX = feederX - 60;
                                const bgY = rowY - 12;

                                let bgRect = svg.querySelector(`#${bgRectId}`);
                                let valueText = svg.querySelector(`#${valueTextId}`);

                                // Create or update background rectangle
                                if (!bgRect) {
                                    bgRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                                    bgRect.setAttribute("id", bgRectId);
                                    bgRect.setAttribute("x", bgX);
                                    bgRect.setAttribute("y", bgY);
                                    bgRect.setAttribute("width", bgWidth);
                                    bgRect.setAttribute("height", bgHeight);
                                    bgRect.setAttribute("rx", "4");
                                    bgRect.setAttribute("ry", "4");
                                    bgRect.setAttribute("fill", bgColor);
                                    svg.appendChild(bgRect);
                                } else {
                                    bgRect.setAttribute("fill", bgColor);
                                }

                                // Create or update value text
                                if (!valueText) {
                                    valueText = createTextElement(feederX - 55, rowY, value, "13px", textColor);
                                    valueText.setAttribute("id", valueTextId);
                                    svg.appendChild(valueText);
                                } else {
                                    valueText.textContent = value;
                                    valueText.setAttribute("fill", textColor);
                                }

                                // Apply fade-in effect if required
                                // comment this IF condition if fade in effect is not needed.
                                if (applyFadeEffect) {
                                    valueText.style.opacity = "0";
                                    valueText.style.transition = "opacity 0.5s ease-in";
                                    setTimeout(() => (valueText.style.opacity = "1"), 10);
                                }

                                // Ensure correct layering (text above rectangle)
                                svg.appendChild(bgRect);
                                svg.appendChild(valueText);
                            });


                            // Feeder Label
                            const feederLabelId = `feeder-label-${i}-${j}`;
                            function formatString(inputString) {
                                let maxLength = 12; // Max characters per line if no space is found
                                let minLength = 8; // If within 8-12 characters, keep as it is

                                // Check if there's a space in the input
                                if (inputString.includes(" ")) {
                                    return inputString.split(" "); // Break from spaces
                                }
                                // If length is between 8 and 12, return as is
                                if (inputString.length >= minLength && inputString.length <= maxLength) {
                                    return [inputString]; // Keep it as a single line
                                }
                                // If longer than 12, break using maxLength logic
                                let words = [];
                                let start = 0;
                                while (start < inputString.length) {
                                    let end = start + maxLength;
                                    if (end >= inputString.length) {
                                        words.push(inputString.slice(start)); // Push the remaining text
                                        break;
                                    }
                                    words.push(inputString.slice(start, end) + (end < inputString.length ? "-" : "")); // Break at maxLength
                                    start = end;
                                }
                                return words;
                            }
                            // Example usage:
                            let inputString = feederNames[i][j]['feederName'];
                            let updatedFeederName = formatString(inputString); // Now returns an array of broken words

                            if (!svg.querySelector(`#${feederLabelId}`)) {
                                const feederLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
                                feederLabel.setAttribute("x", feederX - 20);
                                feederLabel.setAttribute("y", smallerBusLineY + 160);
                                feederLabel.setAttribute("font-size", "12px");
                                feederLabel.setAttribute("fill", "black");
                                feederLabel.setAttribute("id", feederLabelId);

                                // Add each broken word as a <tspan>
                                updatedFeederName.forEach((line, index) => {
                                    let tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                                    tspan.setAttribute("x", feederX - 20); // Align with the main text
                                    tspan.setAttribute("dy", index === 0 ? "0" : "1.2em"); // Shift down for each line
                                    tspan.textContent = line;
                                    feederLabel.appendChild(tspan);
                                });
                                svg.appendChild(feederLabel);
                            }
                        }
                    }

                    // Helper function to create elements
                    function createTextElement(x, y, text, fontSize, fill) {
                        const textElement = document.createElementNS(svgNamespace, "text");
                        textElement.setAttribute("x", x);
                        textElement.setAttribute("y", y);
                        textElement.setAttribute("font-size", fontSize);
                        textElement.setAttribute("fill", fill);
                        textElement.textContent = text;
                        return textElement;
                    }
                    // ********************************************

                    function createBatteryTextElement(x, y, text, fontSize = "14px", color = "black", fontWeight = "normal") {
                        const textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
                        textElement.setAttribute("x", x);
                        textElement.setAttribute("y", y);
                        textElement.setAttribute("font-size", fontSize);
                        textElement.setAttribute("fill", color);
                        textElement.setAttribute("font-weight", fontWeight); // Ensure this is included
                        textElement.textContent = text;
                        return textElement;
                    }
                    for (let i = 0; i < 1; i++) {
                        let battery_current = ''
                        let battery_voltage = ''

                        if (data.dcmeter && Array.isArray(data.dcmeter) && data.dcmeter.length > 0) {
                            // console.log("********** data.dcmeter :::: ", data.dcmeter);
                            // console.log("********** data.dcmeter[i] :::: ", data.dcmeter[i]);

                            if (data.dcmeter[i] && "DC_CURRENT" in data.dcmeter[i] && "DC_VOLTAGE" in data.dcmeter[i]) {
                                battery_current = data.dcmeter[i].DC_CURRENT + ' V';
                                battery_voltage = data.dcmeter[i].DC_VOLTAGE + ' A';

                                // console.log("********** battery_current :::: ", battery_current);
                                // console.log("********** battery_voltage :::: ", battery_voltage);
                            } else {
                                console.error("********** Missing DC_CURRENT or DC_VOLTAGE in data.dcmeter[i]");
                            }
                        } else {
                            battery_current = 'N/A' + ' V' ;
                            battery_voltage = 'N/A' + ' A';

                            // console.log("********** Using default values");
                            // console.log("********** Voltage :::: ", battery_current);
                            // console.log("********** Ampere :::: ", battery_voltage);
                        }

                        const move_X = 200
                        const batteryBody = createRectangleElement(battery_x - move_X +40, 500, 130, 80, "transparent");
                        const positiveTerminal = createRectangleElement(battery_x - move_X +50, 480, 25, 20, "transparent");
                        const positiveLabel = createBatteryTextElement(battery_x - move_X +58, 495, "+", "16px", "black");
                        const negativeTerminal = createRectangleElement(battery_x - move_X  +140, 480, 25, 20, "transparent");
                        const negativeLabel = createBatteryTextElement(battery_x - move_X  +150, 495, "-", "16px", "black");
                        const batteryTitle = createBatteryTextElement(battery_x - move_X  +65, 515, "DC Battery", "16px", "black");
                        const batteryTitle_V = createBatteryTextElement(battery_x - move_X  +55, 540, "V", "16px", "black");
                        const batteryTitle_I = createBatteryTextElement(battery_x - move_X  +55, 565, "I", "16px", "black");
                        const batteryVoltage = createBatteryTextElement(battery_x - move_X  +105, 540, `${battery_current}`, "16px", "black", "");
                        const batteryAmpere = createBatteryTextElement(battery_x - move_X  +105, 565, `${battery_voltage}`, "16px", "black", "");
                        svg.appendChild(batteryBody);
                        svg.appendChild(positiveTerminal);
                        svg.appendChild(positiveLabel);
                        svg.appendChild(negativeTerminal);
                        svg.appendChild(negativeLabel);
                        svg.appendChild(batteryTitle);
                        svg.appendChild(batteryTitle_V);
                        svg.appendChild(batteryTitle_I);
                        svg.appendChild(batteryVoltage);
                        svg.appendChild(batteryAmpere);
                    }
                    // couplers logic between transformers
                    if (subBusLineCouplerStatus[i]) {
                        // Midpoint between the two lines
                        const circleX = smallerBusLineEndX + 45;
                        const circleRadius = 8;

                        // Create the black circle
                        const circle = createCircleElement(circleX, smallerBusLineY, circleRadius, "black", "black", 2);
                        svg.appendChild(circle);

                        // Define vertical line positions
                        const verticalLineStartY = smallerBusLineY - 25;
                        const verticalLineEndY = smallerBusLineY + 25;

                        // Create the vertical line
                        const verticalLine = createLineElement(circleX, verticalLineStartY, circleX, verticalLineEndY, "black", 4);

                        // Get coupler status
                        const couplerStatus = config.subBusLineCouplerStatus[i];

                        // **Apply rotation only if "on", else keep vertical**
                        if (couplerStatus === "on") {
                            verticalLine.setAttribute(
                                "transform",
                                `rotate(90, ${circleX}, ${smallerBusLineY})` // Rotate 90 degrees (horizontal)
                            );
                        }
                        // Append the vertical line
                        svg.appendChild(verticalLine);
                    }
                    // Update the current X position for the next transformer
                    currentX += totalFeederWidth + transformerMargin * 2;
                }
                // // ---------------TRANSFORMER ICON/HEADER/4 LINES/TOP_BOTTOM CB DATA || SMALLER BUS LINES/SMALLER BUS LINES COUPLERS/OUTGOING FEEDER DATA  PLOTTING ENDS----------------
            }
            const config = pythonData2.SLD_data2
            // const config = {
            //     incomingLineCount: 1, // One incoming line
            //     incLineStatus: ["on"], // Status of the incoming line
            //     incCBStatus: ["on"], // CB status for the incoming line
            //     mainBusLineCouplerStatus: ["off"], // Bus Coupler status
            //     transformerVoltageLineStatus: ["on", "on", "on"], // Status for each transformer voltage line
            //     transformerCount: 3, // Three transformers
            //     transformerFeederCounts: [3, 3, 4], // Feeder count for each transformer
            //     feederNames: [
            //         [
            //             { feederName: "11GAONTHAN" }, { feederName: "11SAMYAKGARDEN" }, { feederName: "11WALADGAONAG" }
            //         ],
            //         [
            //             { feederName: "11SPARE1" }, { feederName: "11PATODAAG" }, { feederName: "11SUBSTATIONTRANSFORMER" }
            //         ],
            //         [
            //             { feederName: "11SPARE2" }, { feederName: "11DUMMY" }, { feederName: "11MARKET" }, { feederName: "11CITYCENTER" }
            //         ]
            //     ],
            //     solarCount: 1, // One solar unit
            //     solarPosition: ["left"],
            //     solarNames: [["Solar A"]], // Name of the solar unit
            //     feederCBStatus: [
            //         ["on", "off", "on"], // CB status for Transformer 1 feeders
            //         ["error", "error", "on"], // CB status for Transformer 2 feeders
            //         ["off", "on", "on", "error"] // CB status for Transformer 3 feeders
            //     ],
            //     incomingLineAssignments: [0, 0, 0], // All transformers assigned to the same incoming line
            //     trfTopCBStatus: ["on", "on", "on"], // Top CB status for all transformers
            //     trfBottomCBStatus: ["on", "off", "on"], // Bottom CB status for all transformers
            //     solarIncomingLineStatus: ["off"], // Solar incoming line status
            //     solarCBStatus: ["error"], // Solar CB status
            //     subBusLineCouplerStatus: ["off", "on"] // Sub-bus coupler status
            // };
            const svg = document.querySelector("svg");
            appendDataToSVG(svg, config);
            // setInterval(appendDataToSVG, 1000);
        // ---------------------------------------------------
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        fetchCount++; // Increment counter each time function runs
        console.log(`Fetch Count ======  ${fetchCount}`);
    }
    // Fetch data when the page loads
    fetchBackendData();
    // ✅ Fetch updated data every 1 second
    setInterval(fetchBackendData, 1000);
};







let scale = 1;
let translateX = 0;
let translateY = 0;
let isDragging = false;
let startX, startY;

const svgElement = document.getElementById('mySvg');
const svgContainer = document.getElementById('sub_div');
const centerButton = document.getElementById('center-button');

svgContainer.addEventListener('wheel', function(event) {
    event.preventDefault();
    const zoomFactor = 1.1;
    const rect = svgElement.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    if (event.deltaY < 0) {
        zoomIn(offsetX, offsetY, zoomFactor);
    } else {
        zoomOut(offsetX, offsetY, zoomFactor);
    }
});

svgContainer.addEventListener('mousedown', function(event) {
    isDragging = true;
    startX = event.clientX - translateX;
    startY = event.clientY - translateY;
});

svgContainer.addEventListener('mousemove', function(event) {
    if (isDragging) {
        translateX = event.clientX - startX;
        translateY = event.clientY - startY;
        updateTransform();
    }
});

svgContainer.addEventListener('mouseup', function() {
    isDragging = false;
});

svgContainer.addEventListener('mouseleave', function() {
    isDragging = false;
});


function zoomIn(offsetX, offsetY, factor) {
    scale *= factor;
    translateX -= offsetX * (factor - 1);
    translateY -= offsetY * (factor - 1);
    updateTransform();
}

function zoomOut(offsetX, offsetY, factor) {
    scale /= factor;
    translateX += offsetX * (1 - 1 / factor);
    translateY += offsetY * (1 - 1 / factor);
    updateTransform();
}

function updateTransform() {
    svgElement.style.transformOrigin = '0 0';
    svgElement.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
}

function centerSvg() {
    const containerRect = svgContainer.getBoundingClientRect();
    const svgRect = svgElement.getBoundingClientRect();
    translateX = (containerRect.width - svgRect.width) / 2;
    translateY = (containerRect.height - svgRect.height) / 2;
    updateTransform();
}