// dataFetcher.js

// Function to fetch updated data every second
function fetchAndUpdateData() {
    setInterval(() => {
        fetch('/fetch_data/')
            .then(response => response.json())
            .then(data => {
                // Use the data from the backend
                var pythonData = {
                    // Store additional processed data if needed
                    // SLD_data: JSON.stringify(data.final_data, null, 2),
                    // SLD_middledata: JSON.stringify(data.final_data2, null, 2),
                };

                // Update the DOM with the new data
                document.getElementById('sld_data').textContent = JSON.stringify(data.final_data, null, 2);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, 1000); // Fetch every 1 second
}

// Call the function to start fetching data
fetchAndUpdateData();

window.onload = function() {
    console.log('************************')

    var data = pythonData.SLD_data; // Access the embedded Python data

    // -------------------
    const Table_Title_text_Size = 16
    // -------------------

    console.log("Data:", data);
    console.log('************************')

    // Get the screen dimensions
    const screenWidth = 0;
    const screenHeight = window.innerHeight + 20;
    let mathmaxh = Math.max(900, screenHeight);
    console.log("mathmaxh ::: ", mathmaxh)

    // Get the SVG container
    const svgContainer = document.getElementById('mySvg');

    // Set the SVG container size based on screen size (optional)

    svgContainer.setAttribute('height', mathmaxh);

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
        console.log("width ::: ", width)
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
            currentFlow,
            subBusLineCouplerStatus
        } = config;
        // console.log("config -- ",config)
        // console.log("trfTopCBStatus 1 -- ",trfTopCBStatus)

        // Check and update transformerVoltageLineStatus based on incoming line and CB status
        for (let i = 0; i < transformerCount; i++) {
            // console.log("trfTopCBStatus -- > ", trfTopCBStatus[i])
            // console.log("transformerCount -- > ", transformerCount)

            // console.log("1 -- incLineStatus -- > ", incLineStatus[i])
            // console.log("1 -- incCBStatus -- > ", incCBStatus[i])

            if (
                (config.incLineStatus[i] === "on" && config.incCBStatus[i] === "off") ||
                (config.incLineStatus[i] === "off" && config.incCBStatus[i] === "on") ||
                (config.incLineStatus[i] === "off" && config.incCBStatus[i] === "off") ||
                config.incCBStatus[i] === "error"
            ) {
                config.transformerVoltageLineStatus[i] = "off";
                // console.log(`Transformer ${i + 1} Voltage Line Status:`, config.transformerVoltageLineStatus[i]);
            } else {
                config.transformerVoltageLineStatus[i] = "on";
                // console.log(`Transformer ${i + 1} Voltage Line Status:`, config.transformerVoltageLineStatus[i]);
            }
           

            // console.log("2 -- transformerVoltageLineStatus",transformerVoltageLineStatus[i])
        }

        // ############################ DATA DICTIONARY ############################
       




        // ############################ DATA DICTIONARY ############################



        const margin = 100; // Margin between feeders
        const feederWidth = 20; // Width of each feeder
        const transformerMargin = 60; // Margin from connecting circle
        let xOffset = 50; // Initial horizontal offset
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
            (sum, feederCount) => sum + feederCount * feederWidth + (feederCount - 1) * margin + 50,
            (transformerCount - 1) * margin
        );
        const centerX = xOffset + totalWidth / 2;
        const busLineY = yOffset + 110; // 33kV main bus line Y position
        const busLineStartX = centerX - totalWidth / 2;
        const busLineEndX = centerX + totalWidth / 2;
        // Draw the main bus line with sections based on incoming CB colors
        const segmentWidth = totalWidth / incomingLineCount;

        // ---------------SOLAR PLOTTING START----------------

        let solar = 2
        let position = "right"
        const solarCBData1 = {};
        const solarCBData2 = {};

        solarCBData1[i] = { V: "0.0", I: "0.0", MW: "0.0", MVAR: "0.0", PF: "0.0" };
        solarCBData2[i] = { V: "0.0", I: "0.0", MW: "0.0", MVAR: "0.0", PF: "0.0" };

        const solarCBDataHeaders = ["V", "I", "MW", "MVAR", "PF"];
        console.log("data.solarincomer == ",data.solarincomer)
        console.log("data.solarincomer == ",data.solarincomer.length)

        if (data.solarincomer[1] !== null) {
            console.log("000000000000000000",data.solarincomer.length)
            console.log("000000000000000000", data.solarincomer[1])
            console.log("000000000000000000")
        }

        if (data.solarincomer && data.solarincomer.length === 1 && position === "left") {
            console.log("if Solar == ************ ")
            for (let i = 0; i < transformerCount; i++) {
                const solarLineDefaultData1 = data.solarincomer[i]; // Use provided transformer data
                solarCBData1[i] = {
                    V: solarLineDefaultData1?.['R_VOLT'] || "0.0",
                    I: solarLineDefaultData1?.['R_CURR'] || "0.0",
                    MW: solarLineDefaultData1?.['Y_CURR'] || "0.0",
                    MVAR: solarLineDefaultData1?.['ACTIVE_IMPORT_ENERGY'] || "0.0",
                    PF: solarLineDefaultData1?.['AVG_PF'] || "0.0",
                };
            }
        }

        else if (data.solarincomer && data.solarincomer.length === 1 && position === "right") {
            console.log("if Solar == ************ ")
            for (let i = 0; i < transformerCount; i++) {
                const solarLineDefaultData2 = data.solarincomer[i]; // Use provided transformer data
                solarCBData2[i] = {
                    V: solarLineDefaultData2?.['R_VOLT'] || "0.0",
                    I: solarLineDefaultData2?.['R_CURR'] || "0.0",
                    MW: solarLineDefaultData2?.['Y_CURR'] || "0.0",
                    MVAR: solarLineDefaultData2?.['ACTIVE_IMPORT_ENERGY'] || "0.0",
                    PF: solarLineDefaultData2?.['AVG_PF'] || "0.0",
                };
            }
        }

        else if (data.solarincomer && data.solarincomer.length === 2) {
            console.log("if Solar == ************ ")
            for (let i = 0; i < data.solarincomer.length; i++) {
                const solarLineDefaultData1 = data.solarincomer[0]; // Use provided transformer data
                solarCBData1[i] = {
                    V: solarLineDefaultData1?.['R_VOLT'] || "0.0",
                    I: solarLineDefaultData1?.['R_CURR'] || "0.0",
                    MW: solarLineDefaultData1?.['Y_CURR'] || "0.0",
                    MVAR: solarLineDefaultData1?.['ACTIVE_IMPORT_ENERGY'] || "0.0",
                    PF: solarLineDefaultData1?.['AVG_PF'] || "0.0",
                };
                const solarLineDefaultData2 = data.solarincomer[1]; // Use provided transformer data
                solarCBData2[i] = {
                    V: solarLineDefaultData2?.['R_VOLT'] || "0.0",
                    I: solarLineDefaultData2?.['R_CURR'] || "0.0",
                    MW: solarLineDefaultData2?.['Y_CURR'] || "0.0",
                    MVAR: solarLineDefaultData2?.['ACTIVE_IMPORT_ENERGY'] || "0.0",
                    PF: solarLineDefaultData2?.['AVG_PF'] || "0.0",
                };
            }
        }

        // // // DATA DICTIONARY GIVEN ON TOP ^^^

        // Check the solar value and append elements accordingly
        if (solar === 0) {
            // No Solar CB Lines should appear
            console.log("No Solar CB Lines are displayed.");
        } else if (solar === 1) {
            // Display Solar CB Lines based on position
            if (position === "left") {

                const solarIncomingLineStyle_1 = (solarIncomingLineStatus[0] === "on" ? "" : "5,5"); // Linear if on, dashed if off
                const solarCBtobusStyle_1 = (solarCBStatus[0] === "on" ? "" : "5,5"); // Linear if on, dashed if off

                const SolarCBLine1 = createLineElement(busLineStartX + 32, busLineY + 170, busLineStartX + 32, busLineY + 220, "green", 3, solarIncomingLineStyle_1);
                const SolarCBtoBusLine1 = createLineElement(busLineStartX + 32, busLineY + 237, busLineStartX + 32, busLineY + 300, "green", 3, solarCBtobusStyle_1);

                const solarCBDataHeaders = ["V", "I", "MW", "MVAR", "PF"];
                const CB_iconSize = 15;
                const solarCBiconGroup1 = document.createElementNS(svgNamespace, "g"); // Group to hold the icon and additional elements
                if (solarCBStatus[0] === "error") {
                    // Create two triangles for the error state
                    const triangle1 = document.createElementNS(svgNamespace, "polygon");
                    console.log("busLineStartX ===== ",busLineStartX)
                    console.log("busLineEndX ===== ",busLineEndX)
                    triangle1.setAttribute(
                        "points",
                        `${82 - CB_iconSize / 2},${busLineStartX + 346 - CB_iconSize}
                         ${82 + CB_iconSize / 2},${busLineStartX + 346 - CB_iconSize}
                         ${82 - CB_iconSize / 2},${busLineStartX + 346}`
                    );
                    triangle1.setAttribute("fill", "white"); // Top-left color

                    const triangle2 = document.createElementNS(svgNamespace, "polygon");
                    triangle2.setAttribute(
                        "points",
                        `${82 + CB_iconSize / 2},${busLineStartX + 346 - CB_iconSize}
                         ${82 + CB_iconSize / 2},${busLineStartX + 346}
                         ${82 - CB_iconSize / 2},${busLineStartX + 346}`
                    );
                    triangle2.setAttribute("fill", "black"); // Bottom-right color

                    // Create a border rectangle for the icon
                    const border = document.createElementNS(svgNamespace, "rect");
                    border.setAttribute("x", busLineStartX + CB_iconSize + 9);
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
                    console.log("------ reached 1st solar icon = ", solarCBStatus)
                    console.log("------ solarCBStatus[0] = ", solarCBStatus[0])
                    console.log("------ reached 1st solar icon = ", solarCBStatus[i])
                    const iconColor = solarCBStatus[0] === "on" ? "red" : (solarCBStatus[0] === "off" ? "white" : "blue"); // Default colors for on/off
                    const icon = document.createElementNS(svgNamespace, "rect");
                    icon.setAttribute("x", busLineStartX + CB_iconSize + 9);
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
                solarCBDataHeaders.forEach((header, index) => {
                    const rowY = 360 + index * 20;
                    const headerText = createTextElement(busLineStartX + 55, rowY, header, "14px", "black");
                    svg.appendChild(headerText);
                    const valueText = createTextElement(busLineStartX + 105, rowY, solarCBData1[i][header], "14px", "black");
                    svg.appendChild(valueText);
                });
            } else if (position === "right") {

                const solarIncomingLineStyle_2 = (solarIncomingLineStatus[0] === "on" ? "" : "5,5"); // Linear if on, dashed if off
                const solarCBtobusStyle_2 = (solarCBStatus[1] === "on" ? "" : "5,5"); // Linear if on, dashed if off

                const SolarCBLine2 = createLineElement(busLineEndX - 20, busLineY + 170, busLineEndX - 20, busLineY + 220, "green", 3, solarIncomingLineStyle_2);
                const SolarCBtoBusLine2 = createLineElement(busLineEndX - 20, busLineY + 237, busLineEndX - 20, busLineY + 300, "green", 3, solarCBtobusStyle_2);

                const CB_iconSize = 15;
                const solarCBDataHeaders = ["V", "I", "MW", "MVAR", "PF"];
                const solarCBiconGroup2 = document.createElementNS(svgNamespace, "g"); // Group to hold the icon and additional elements
                if (solarCBStatus[1] === "error") {
                    // Create two triangles for the error state
                    const triangle1 = document.createElementNS(svgNamespace, "polygon");
                    console.log("busLineEndX ===== ",busLineEndX)
                    triangle1.setAttribute(
                        "points",
                        `${busLineEndX - 20 - CB_iconSize / 2},${busLineEndX - 615 - CB_iconSize}
                         ${busLineEndX - 20 + CB_iconSize / 2},${busLineEndX - 615 - CB_iconSize}
                         ${busLineEndX - 20 - CB_iconSize / 2},${busLineEndX - 615}`
                    );
                    triangle1.setAttribute("fill", "white"); // Top-left color

                    const triangle2 = document.createElementNS(svgNamespace, "polygon");
                    triangle2.setAttribute(
                        "points",
                        `${busLineEndX - 20 + CB_iconSize / 2},${busLineEndX - 615 - CB_iconSize}
                         ${busLineEndX - 20 + CB_iconSize / 2},${busLineEndX - 615}
                         ${busLineEndX - 20 - CB_iconSize / 2},${busLineEndX - 615}`
                    );
                    triangle2.setAttribute("fill", "black"); // Bottom-right color

                    // Create a border rectangle for the icon
                    const border = document.createElementNS(svgNamespace, "rect");
                    border.setAttribute("x", busLineEndX - 27.5);
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
                    console.log("------ reached 2nd solar icon = ", solarCBStatus[1])
                    const iconColor = solarCBStatus[1] === "on" ? "red" : (solarCBStatus[1] === "off" ? "white" : "blue"); // Default colors for on/off
                    const icon = document.createElementNS(svgNamespace, "rect");
                    icon.setAttribute("x", busLineEndX - 27.5);
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
                    const headerText = createTextElement(busLineEndX + 5, rowY, header, "14px", "black");
                    svg.appendChild(headerText);
                    const valueText = createTextElement(busLineEndX + 60, rowY, solarCBData2[i][header], "14px", "black");
                    svg.appendChild(valueText);
                });
            } else {
                console.error("Invalid position. Must be 'left' or 'right'.");
            }
        } else if (solar === 2) {

            const solarIncomingLineStyle_1 = (solarIncomingLineStatus[0] === "on" ? "" : "5,5"); // Linear if on, dashed if off
            const solarCBtobusStyle_1 = (solarCBStatus[0] === "on" ? "" : "5,5"); // Linear if on, dashed if off

            const solarIncomingLineStyle_2 = (solarIncomingLineStatus[1] === "on" ? "" : "5,5"); // Linear if on, dashed if off
            const solarCBtobusStyle_2 = (solarCBStatus[1] === "on" ? "" : "5,5"); // Linear if on, dashed if off

            const SolarCBLine1 = createLineElement(busLineStartX + 32, busLineY + 170, busLineStartX + 32, busLineY + 220, "green", 3, solarIncomingLineStyle_1);
            const SolarCBtoBusLine1 = createLineElement(busLineStartX + 32, busLineY + 237, busLineStartX + 32, busLineY + 300, "green", 3, solarCBtobusStyle_1);

            const SolarCBLine2 = createLineElement(busLineEndX - 20, busLineY + 170, busLineEndX - 20, busLineY + 220, "green", 3, solarIncomingLineStyle_2);
            const SolarCBtoBusLine2 = createLineElement(busLineEndX - 20, busLineY + 237, busLineEndX - 20, busLineY + 300, "green", 3, solarCBtobusStyle_2);

            const CB_iconSize = 15;
            const solarCBDataHeaders = ["V", "I", "MW", "MVAR", "PF"];
            const solarCBiconGroup1 = document.createElementNS(svgNamespace, "g"); // Group to hold the icon and additional elements
            if (solarCBStatus[0] === "error") {
                // Create two triangles for the error state
                const triangle1 = document.createElementNS(svgNamespace, "polygon");
                triangle1.setAttribute(
                    "points",
                    `${82 - CB_iconSize / 2},${busLineStartX + 346 - CB_iconSize}
                 ${82 + CB_iconSize / 2},${busLineStartX + 346 - CB_iconSize}
                 ${82 - CB_iconSize / 2},${busLineStartX + 346}`
                );
                triangle1.setAttribute("fill", "white"); // Top-left color

                const triangle2 = document.createElementNS(svgNamespace, "polygon");
                triangle2.setAttribute(
                    "points",
                    `${82 + CB_iconSize / 2},${busLineStartX + 346 - CB_iconSize}
                 ${82 + CB_iconSize / 2},${busLineStartX + 346}
                 ${82 - CB_iconSize / 2},${busLineStartX + 346}`
                );
                triangle2.setAttribute("fill", "black"); // Bottom-right color

                // Create a border rectangle for the icon
                const border = document.createElementNS(svgNamespace, "rect");
                border.setAttribute("x", busLineStartX + CB_iconSize + 9);
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
                console.log("------ reached 1st solar icon = ", solarCBStatus)
                console.log("------ solarCBStatus[0] = ", solarCBStatus[0])
                console.log("------ reached 1st solar icon = ", solarCBStatus[i])
                const iconColor = solarCBStatus[0] === "on" ? "red" : (solarCBStatus[0] === "off" ? "white" : "blue"); // Default colors for on/off
                const icon = document.createElementNS(svgNamespace, "rect");
                icon.setAttribute("x", busLineStartX + CB_iconSize + 9);
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
                console.log("busLineEndX ===== ",busLineEndX)
                triangle1.setAttribute(
                    "points",
                    `${busLineEndX - 20 - CB_iconSize / 2},${busLineEndX - 615 - CB_iconSize}
                     ${busLineEndX - 20 + CB_iconSize / 2},${busLineEndX - 615 - CB_iconSize}
                     ${busLineEndX - 20 - CB_iconSize / 2},${busLineEndX - 615}`
                );
                triangle1.setAttribute("fill", "white"); // Top-left color

                const triangle2 = document.createElementNS(svgNamespace, "polygon");
                triangle2.setAttribute(
                    "points",
                    `${busLineEndX - 20 + CB_iconSize / 2},${busLineEndX - 615 - CB_iconSize}
                     ${busLineEndX - 20 + CB_iconSize / 2},${busLineEndX - 615}
                     ${busLineEndX - 20 - CB_iconSize / 2},${busLineEndX - 615}`
                );
                triangle2.setAttribute("fill", "black"); // Bottom-right color

                // Create a border rectangle for the icon
                const border = document.createElementNS(svgNamespace, "rect");
                border.setAttribute("x", busLineEndX - 27.5);
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
                console.log("------ reached 2nd solar icon = ", solarCBStatus[1])
                const iconColor = solarCBStatus[1] === "on" ? "red" : (solarCBStatus[1] === "off" ? "white" : "blue"); // Default colors for on/off
                const icon = document.createElementNS(svgNamespace, "rect");
                icon.setAttribute("x", busLineEndX - 27.5);
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
                const headerText = createTextElement(busLineStartX + 55, rowY, header, "14px", "black");
                svg.appendChild(headerText);
                const valueText = createTextElement(busLineStartX + 105, rowY, solarCBData1[i][header], "14px", "black");
                svg.appendChild(valueText);
            });

            solarCBDataHeaders.forEach((header, index) => {
                const rowY = 360 + index * 20;
                const headerText = createTextElement(busLineEndX + 5, rowY, header, "14px", "black");
                svg.appendChild(headerText);
                const valueText = createTextElement(busLineEndX + 60, rowY, solarCBData2[i][header], "14px", "black");
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
            const dashStyle = transformerVoltageLineStatus[i] === "on" ? null : "5,5";
            console.log("dashStyle --- ", dashStyle)
            const busSegment = createLineElement(segmentStartX, busLineY, segmentEndX, busLineY, color, 3, dashStyle);
            svg.appendChild(busSegment);
            busLineSegments.push({
                startX: segmentStartX,
                endX: segmentEndX,
                dashStyle: dashStyle
            });

            // Adding deviation circles and lines as before
            if (i > 0) {
                const circleX = segmentStartX;
                const mainBusLineCouplerStatus = config.mainBusLineCouplerStatus[i - 1]; // Use the status for the (i-1)th coupler

                if (mainBusLineCouplerStatus === "on" || mainBusLineCouplerStatus === "off") {
                    // Create and append deviation circle
                    const deviationCircle = createCircleElement(circleX, busLineY, 10, "black", 2);
                    svg.appendChild(deviationCircle);

                    // Small line initially vertical
                    const smallLine = createLineElement(circleX, busLineY - 30, circleX, busLineY + 30, "black", 3);

                    // Adjust rotation based on mainBusLineCouplerStatus
                    if (mainBusLineCouplerStatus === "on") {
                        // Rotate to horizontal
                        const rotationCenterX = circleX; // Horizontal center of the line
                        const rotationCenterY = busLineY; // Vertical center of the line
                        smallLine.setAttribute(
                            "transform",
                            `rotate(90, ${rotationCenterX}, ${rotationCenterY})`
                        );
                    }

                    svg.appendChild(smallLine);
                } else if (!mainBusLineCouplerStatus || mainBusLineCouplerStatus === "") {
                    // Do not plot anything if status is null, empty, or undefined
                }
            }
        }

        // Add bus line label
        const busLabel = createTextElement(centerX + 100, busLineY + 20, "33kV BUS line", "12px", "black");
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

            console.log("data.transformer_data == ",data.transformer_data)
            console.log("data.incomer33kv == ",data.incomer33kv)

            if (data.incomer33kv && data.incomer33kv.length) {
                console.log("if == ************ ")
                for (let i = 0; i < transformerCount; i++) {
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
                console.log("else  ************ ")
                const incomingLineDefaultData = {
                voltage_1: "11.0",
                current_1: "22.0",
                power_1: "44.0",
                reactive_power_1: "66.0",
                power_factor_1: "00.0",
                voltage_2: "52.0",
                current_2: "0.0",
                power_2: "90.0",
                reactive_power_2: "0.0",
                power_factor_2: "0.0",
                };
                for (let i = 0; i < incomingLineCount; i++) {
                    incomingLineData[i] = {
                        V: incomingLineDefaultData[`voltage_${i + 1}`] || "0.0",
                        I: incomingLineDefaultData[`current_${i + 1}`] || "0.0",
                        MW: incomingLineDefaultData[`power_${i + 1}`] || "0.0",
                        MVAR: incomingLineDefaultData[`reactive_power_${i + 1}`] || "0.0",
                        PF: incomingLineDefaultData[`power_factor_${i + 1}`] || "0.0",
                    };
                }
            }

            // Create a table inside the SVG

            headers.forEach((header, index) => {
                const rowY = tableY + 20 + index * 20;
                const headerText = createTextElement(tableX + 5, rowY, header, "14px", "black");
                svg.appendChild(headerText);
                const valueText = createTextElement(tableX + 50, rowY, incomingLineData[i][header], "14px", "black");
                svg.appendChild(valueText);
            });
        }
        // // ---------------INCOMING LINE PLOTTING ENDS----------------


        // // ---------------TRANSFORMER ICON/HEADER/4 LINES/TOP_BOTTOM CB DATA || SMALLER BUS LINES/SMALLER BUS LINES COUPLERS/OUTGOING FEEDER DATA  PLOTTING STARTS----------------
        const trfTopCBStatus_e_1 = trfTopCBStatus
        const trfBottomCBStatus_e_1 = trfBottomCBStatus
        const smallBuslineCouplerStatus_e_1 = subBusLineCouplerStatus
        const transformerVoltageLineStatus_e_1 = transformerVoltageLineStatus
        let currentX = busLineStartX + transformerMargin;
        for (let i = 0; i < transformerCount; i++) {

            const feederCount = transformerFeederCounts[i];
            const transformerWidth = 40;
            const transformerHeight = 40;
            const CB_iconSize = 15;
            // const transformerRadius = 15; // Radius of each circle
            const totalFeederWidth = feederCount * feederWidth + (feederCount - 1) * margin;
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
            const transformerLabel = createTextElement(transformerX - 85, busLineY + 90, `Transformer ${i + 1}`, "12px", "black");
            svg.appendChild(transformerLabel);

            // Find which bus line segment the transformer is connected to
            const segmentIndex = incomingLineAssignments[i]; // Get the assigned incoming line for this transformer
            const dashStyle = busLineSegments[segmentIndex].dashStyle;
            // Draw line from transformer to the bus line

            const topCBlineDashArray = (incLineStatus[i] === "off" ? "5,5" : (trfTopCBStatus_e_1[i] === "off" || trfTopCBStatus_e_1[i] === "error") ?
             "5,5" : (trfTopCBStatus_e_1[i] === "on" ? "" : "5,5"));
            const bottomCBlineDashArray = (incLineStatus[i] === "off" ? "5,5" : (trfBottomCBStatus_e_1[i] === "off" || trfBottomCBStatus_e_1[i] === "error" || trfTopCBStatus_e_1[i] === "off" || trfTopCBStatus_e_1[i] === "error") ?
             "5,5" : (trfBottomCBStatus_e_1[i] === "on" ? "" : "5,5"));
            const transformerTopCBtoMainBusLine = createLineElement(transformerX, busLineY, transformerX, busLineY + 60, "red", 3);
            const transformerTopCBtoTrf = createLineElement(transformerX, busLineY + 60, transformerX, busLineY + 120, "red", 3, topCBlineDashArray); // blue
            const transformerBottomCBtoTrf = createLineElement(transformerX, busLineY + 220, transformerX, busLineY + 160, "green", 3, topCBlineDashArray); // orange
            const transformerBottomCBtoSmallBusLine = createLineElement(transformerX, busLineY + 300, transformerX, busLineY + 220, "green", 3, bottomCBlineDashArray);

            console.log("!--currentFlow_e_1 == ",transformerVoltageLineStatus_e_1 )

            const combinedDashArray =
            (trfBottomCBStatus_e_1[i] === "off" && smallBuslineCouplerStatus_e_1[i] === "off" ||
             (trfBottomCBStatus_e_1[i] === "error" && smallBuslineCouplerStatus_e_1[i] === "off") ||
             (trfTopCBStatus_e_1[i] === "off" && smallBuslineCouplerStatus_e_1[i] === "off") ||
             (trfTopCBStatus_e_1[i] === "error" && smallBuslineCouplerStatus_e_1[i] === "off") ||
             (trfBottomCBStatus_e_1[i] === "off") ||
             (trfBottomCBStatus_e_1[i] === "error") ||
             (trfTopCBStatus_e_1[i] === "off") ||
             (trfTopCBStatus_e_1[i] === "error") ||
             (smallBuslineCouplerStatus_e_1[i] === "off" && transformerVoltageLineStatus_e_1[i] === "off") ||
             (smallBuslineCouplerStatus_e_1[i] === "on" && trfBottomCBStatus_e_1[i] === "off") ||
             (smallBuslineCouplerStatus_e_1[i] === "on" && trfBottomCBStatus_e_1[i] === "error") ||
             (smallBuslineCouplerStatus_e_1[i] === "on" && trfTopCBStatus_e_1[i] === "off") ||
             (smallBuslineCouplerStatus_e_1[i] === "on" && trfTopCBStatus_e_1[i] === "error") ||
             (smallBuslineCouplerStatus_e_1[i] === "off") ||
             (smallBuslineCouplerStatus_e_1[i] === "on" && transformerVoltageLineStatus_e_1[i] === "off"))
                ? "5,5"
                : "";

            console.log("|||| combinedDashArray ",combinedDashArray)

            // Draw smaller bus line for feeders (same as before)
            const smallerBusLineY = busLineY + 300;
            const smallerBusLineStartX = currentX - 70;
            const smallerBusLineEndX = currentX + totalFeederWidth;
            const smallerBusLine = createLineElement(smallerBusLineStartX + 20, smallerBusLineY, smallerBusLineEndX + 20, smallerBusLineY, "green", 3, combinedDashArray);
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
            console.log("data :: ",data)
            console.log("data inc :: ",data.transformer_data[i])
           
            const trfTopCBDefaultData = data.transformer_data[i]
            const trfTopCBData = {};
            for (let i = 0; i < transformerCount; i++) {
                trfTopCBData[i] = {
                    V: trfTopCBDefaultData['R_VOLT'] || "0.0",
                    I: trfTopCBDefaultData['R_CURR'] || "0.0",
                    MW: trfTopCBDefaultData['Y_CURR'] || "0.0",
                    MVAR: trfTopCBDefaultData['ACTIVE_IMPORT_ENERGY'] || "0.0",
                    PF: trfTopCBDefaultData['R_PF'] || "0.0",
                };
            }

            // Data table for each incoming line
            const tableX = 330; // X position for the data table (left side of incoming line)
            const tableY = 170; // Y position for the table
            const tableWidth = 100;
            const tableHeight = 150;

            trfTopCBHeaders.forEach((header, index) => {
                const rowY = tableY + 20 + index * 20;
                const headerText = createTextElement(transformerX + 25, rowY, header, "14px", "black");
                svg.appendChild(headerText);
                const valueText = createTextElement(transformerX + 70, rowY, trfTopCBData[i][header], "14px", "black");
                svg.appendChild(valueText);

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
            const trfBottomCBDefaultData = data.incomer11_data[i]
            const trfBottomCBData = {};
            for (let i = 0; i < transformerCount; i++) {
                trfBottomCBData[i] = {
                    V: trfBottomCBDefaultData['R_VOLT'] || "0.0",
                    I: trfBottomCBDefaultData['R_CURR'] || "0.0",
                    MW: trfBottomCBDefaultData['Y_CURR'] || "0.0",
                    MVAR: trfBottomCBDefaultData['ACTIVE_IMPORT_ENERGY'] || "0.0",
                    PF: trfBottomCBDefaultData['R_PF'] || "0.0",
                };
            }

            trfBottomCBHeaders.forEach((header, index) => {
                const rowY = 360 + index * 20;
                const headerText = createTextElement(transformerX + 25, rowY, header, "14px", "black");
                svg.appendChild(headerText);
                const valueText = createTextElement(transformerX + 70, rowY, trfBottomCBData[i][header], "14px", "black");
                svg.appendChild(valueText);
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

            // ***********************************************************
            // couplers logic between transformers
            if (subBusLineCouplerStatus[i]) { // Ensure that there is another transformer (and thus another smaller bus line) after the current one
                // Now draw a blue circle exactly between the two smaller bus lines
                const circleX = smallerBusLineEndX + 45; // Midpoint between the two lines
                const circleRadius = 10; // Radius of the circle
                const circle = createCircleElement(circleX, smallerBusLineY, circleRadius, "black", "black", 2); // Blue circle with black border
                svg.appendChild(circle);

                // Add the small vertical line in the center of the blue circle
                const verticalLineStartY = smallerBusLineY - 30; // Start above the circle
                const verticalLineEndY = smallerBusLineY + 30; // End below the circle
                const verticalLine = createLineElement(circleX, verticalLineStartY, circleX, verticalLineEndY, "black", 3); // Blue vertical line
                svg.appendChild(verticalLine);

                // Apply rotation based on mainBusLineCouplerStatus for the vertical line
                const couplerStatus = config.subBusLineCouplerStatus[i]; // Use the status for this coupler
                if (couplerStatus === "on") {
                    // Rotate to horizontal if the status is "on"
                    verticalLine.setAttribute(
                        "transform",
                        `rotate(90, ${circleX}, ${smallerBusLineY})` // Rotate the line 90 degrees around the center of the circle
                    );
                }
            }
            // ***********************************************************


            // Object to store data for all feeders (dynamically updated)
            const feedersData = {};
            // Check if busline is dashed
            const isBuslineDashed = combinedDashArray && combinedDashArray.includes("5,5");

       
            console.log('******** incomer11_data >>>>>> ', data.feeder);
            const outGoingFeederCBDataHeaders = ["V", "I", "MW", "MVAR", "PF"];
            const ogfeederData = {};

            // Loop through each feeder in `data.feeder`
            console.log("Actual Feeder Count (from data.feeder):", data.feeder.length);
            console.log("feederCount --",feederCount)
            console.log("data.feeder",data.feeder)

            // =====================================
            const assignFeedersToTransformers = (config, data) => {
                let feederIndex = 0; // Initialize feeder index
                const transformers = transformerFeederCounts.map((feederCount, transformerIndex) => {
                    // Slice the correct range of feeders for this transformer
                    const feedersForThisTransformer = data.feeder.slice(feederIndex, feederIndex + feederCount);
                    feederIndex += feederCount; // Update the feederIndex for the next transformer

                    // Return the feeders assigned to this transformer
                    return {
                        transformerIndex,
                        feederCount,
                        feeders: feedersForThisTransformer,
                    };
                });

                return transformers;
            };
           
            const transformersWithFeeders = assignFeedersToTransformers(transformerFeederCounts, data);

            // Log the result to see the output
            console.log("tt transformersWithFeeders = ",transformersWithFeeders);
            console.log("tt transformerIndex = ",transformersWithFeeders[i].transformerIndex);
            console.log("tt feederCount = ",transformersWithFeeders[i].feederCount);
            console.log("tt feeders = ",transformersWithFeeders[i].feeders);
           
            const new_feederCount = transformersWithFeeders[i].feederCount
            // console.log("tt new_feederCount ",new_feederCount);
            // =====================================

            for (let j = 0; j < new_feederCount; j++) {
                const outgoingFeederData = transformersWithFeeders[i].feeders[j]; // Use `j` as the index to access each feeder
                // console.log("outgoingFeederData >>>>>> ", outgoingFeederData);

                ogfeederData[i] = {
                    V: outgoingFeederData?.['R_VOLT'] || "0.0",
                    I: outgoingFeederData?.['Y_VOLT'] || "0.0",
                    MW: outgoingFeederData?.['B_VOLT'] || "0.0",
                    MVAR: outgoingFeederData?.['AVG_VOLT'] || "0.0",
                    PF: outgoingFeederData?.['AVG_VOLT'] || "0.0",
                };

                console.log(`Transformer ${i + 1} Feeders Data: `, ogfeederData[i]);
                console.log("Final ogfeederData >>>>>> ", ogfeederData)

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
                    // const headerTextId = `feeder-header-${i}-${j}-${header}`;
                    const headerTextId = `header-${i}-${j}-${header}`;
                    const valueTextId = `feeder-value-${i}-${j}-${header}`;

                    if (!svg.querySelector(`#${headerTextId}`)) {
                        const headerText = createTextElement(
                            feederX - 100,
                            rowY,
                            header,
                            "13px",
                            "black"
                        );
                        headerText.setAttribute("id", headerTextId);
                        svg.appendChild(headerText);
                    }
                    if (!svg.querySelector(`#${valueTextId}`)) {
                        const valueText = createTextElement(
                            feederX - 55,
                            rowY,
                            ogfeederData[i] ? ogfeederData[i][header] : "N/A",
                            "13px",
                            "black"
                        );
                        valueText.setAttribute("id", valueTextId);
                        svg.appendChild(valueText);
                    }
                });

                // Feeder Label
                const feederLabelId = `feeder-label-${i}-${j}`;
                if (!svg.querySelector(`#${feederLabelId}`)) {
                    const feederLabel = createTextElement(
                        feederX - 20,
                        smallerBusLineY + 160,
                        feederNames[i][j]['feederName'],
                        "12px",
                        "black"
                    );
                    feederLabel.setAttribute("id", feederLabelId);
                    svg.appendChild(feederLabel);
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

            // Update the current X position for the next transformer
            currentX += totalFeederWidth + transformerMargin * 2;
        }
        // // ---------------TRANSFORMER ICON/HEADER/4 LINES/TOP_BOTTOM CB DATA || SMALLER BUS LINES/SMALLER BUS LINES COUPLERS/OUTGOING FEEDER DATA  PLOTTING ENDS----------------

    }
    const config = {
        incomingLineCount: 1, // Number of incoming lines
        incLineStatus: ["on"], // Color of the incoming CBs, 'red' or 'grey'
        incCBStatus: ["on"], // Color of the incoming CBs, 'red' or 'grey'
        mainBusLineCouplerStatus: ["off"], // New array for Bus Coupler status
        transformerVoltageLineStatus: ["on", "on"],
        transformerCount: 2, // Number of transformers
        transformerFeederCounts: [5, 3], // Feeder count for each transformer
        feederNames: [
            [{ feederName : "Feeder A"}, { feederName : "Feeder B"},{ feederName : "Feeder C"}, { feederName : "Feeder D"}, { feederName : "Feeder E"}],
            [{ feederName : "Feeder F"}, { feederName : "Feeder G"}, { feederName : "Feeder H"}]
        ],
        solarCount: 2,
        solarPosition: ["left"],
        solarNames: [["solar A"],["solar A12"]],
        feederCBStatus: [
            ["on", "off", "on", "error", "error"],
            ["on", "error", "off"]
        ],
        incomingLineAssignments: [0, 0], // Transformer 1 connected to line 0, Transformer 2 to line 1, Transformer 3 to line 0
        trfTopCBStatus: ["off", "on"], // Status for top CBs
        trfBottomCBStatus: ["on", "on"], // Status for bottom CBs
        solarIncomingLineStatus: ["off", "off"], // Status for bottom CBs
        solarCBStatus: ["error", "error"], // Status for bottom CBs
        subBusLineCouplerStatus: ["on"] // New array for Bus Coupler status
    };    
    const svg = document.querySelector("svg");
    appendDataToSVG(svg, config);
    // setInterval(appendDataToSVG, 1000);

    // ---------------------------------------------------
};