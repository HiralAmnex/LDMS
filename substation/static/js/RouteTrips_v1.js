window.onload = function() {
    var data = pythonData.SLD_data; // Access the embedded Python data
    var middledata = pythonData.SLD_middledata;

    // -------------------
    const Table_Title_text_Size = 16
    // -------------------

    console.log("Data:", data);
    console.log("Middle Data:", middledata);
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
            solarNames,
            incomingLineAssignments,
            trfTopCBStatus,
            trfBottomCBStatus,
            solarCBStatus,
            subBusLineCouplerStatus
        } = config;

        // Check and update transformerVoltageLineStatus based on incoming line and CB status
        for (let i = 0; i < transformerCount; i++) {
            console.log("trfTopCBStatus -- > ", trfTopCBStatus[i])
            console.log("transformerCount -- > ", transformerCount)

            if (incLineStatus[i] === "on" && incCBStatus[i] === "off" || incLineStatus[i] === "off" && incCBStatus[i] === "on" || incCBStatus[i] === "error") {
                transformerVoltageLineStatus[i] = "off"; // Set transformer voltage line status to "off"
            }
        }

        const margin = 100; // Margin between feeders
        const feederWidth = 20; // Width of each feeder
        const transformerMargin = 60; // Margin from connecting circle
        let xOffset = 50; // Initial horizontal offset
        let yOffset = 50; // Vertical offset
        const svgNamespace = "http://www.w3.org/2000/svg";
        // Dictionary to store data for each incoming line
        const incomingLineData = {};
        for (let i = 0; i < incomingLineCount; i++) {
            incomingLineData[i] = { V: "0.0", I: "0.0", MW: "0.0", MVAR: "0.0", PF: "0.0" };
        }
        // ###Data INC Line  
        incomingLineData[0].V = "10.0";
        // incomingLineData[1].I = "3.3";
        // ###Data INC Line  

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
        const SolarCBLine1 = createLineElement(busLineStartX + 32, busLineY + 170, busLineStartX + 32, busLineY + 220, "green", 3);
        const SolarCBtoBusLine1 = createLineElement(busLineStartX + 32, busLineY + 237, busLineStartX + 32, busLineY + 300, "green", 3);
        const SolarCBLine2 = createLineElement(busLineEndX - 20, busLineY + 170, busLineEndX - 20, busLineY + 220, "green", 3);
        const SolarCBtoBusLine2 = createLineElement(busLineEndX - 20, busLineY + 237, busLineEndX - 20, busLineY + 300, "green", 3);
        const CB_iconSize = 15;
        const solarCBiconGroup1 = document.createElementNS(svgNamespace, "g"); // Group to hold the icon and additional elements

        console.log("solarCBStatus _-->", solarCBStatus[i])
        if (solarCBStatus[i] === "error") {
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
            border.setAttribute("x", busLineStartX + 32);
            border.setAttribute("y", busLineY + 170);
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
            const iconColor = solarCBStatus[i] === "on" ? "red" : (solarCBStatus[i] === "off" ? "white" : "blue"); // Default colors for on/off
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

        console.log("solarCBStatus _-->", solarCBStatus[i])
        if (solarCBStatus[i] === "error") {
            // Create two triangles for the error state
            const triangle1 = document.createElementNS(svgNamespace, "polygon");
            triangle1.setAttribute(
                "points",
                `${82 - CB_iconSize / 2},${busLineEndX + 346 - CB_iconSize}
             ${82 + CB_iconSize / 2},${busLineEndX + 346 - CB_iconSize}
             ${82 - CB_iconSize / 2},${busLineEndX + 346}`
            );
            triangle1.setAttribute("fill", "white"); // Top-left color

            const triangle2 = document.createElementNS(svgNamespace, "polygon");
            triangle2.setAttribute(
                "points",
                `${82 + CB_iconSize / 2},${busLineEndX + 346 - CB_iconSize}
             ${82 + CB_iconSize / 2},${busLineEndX + 346}
             ${82 - CB_iconSize / 2},${busLineEndX + 346}`
            );
            triangle2.setAttribute("fill", "black"); // Bottom-right color

            // Create a border rectangle for the icon
            const border = document.createElementNS(svgNamespace, "rect");
            border.setAttribute("x", busLineEndX + 32);
            border.setAttribute("y", busLineY + 170);
            border.setAttribute("width", CB_iconSize + 1);
            border.setAttribute("height", CB_iconSize + 1);
            border.setAttribute("stroke", "black");
            border.setAttribute("fill", "none");

            // Append triangles and border to the group
            solarCBiconGroup2.appendChild(triangle1);
            solarCBiconGroup2.appendChild(triangle2);
            solarCBiconGroup2.appendChild(border);
        } else {
            // Handle non-error states with a single rectangle
            const iconColor = solarCBStatus[i] === "on" ? "red" : (solarCBStatus[i] === "off" ? "white" : "blue"); // Default colors for on/off
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

        let solar = 2
        let position = "left"
        const solarCBData1 = {};
        // ###Data SOLAR Line  
        solarCBData1[i] = { V: "0.0", I: "0.0", MW: "0.0", MVAR: "0.0", PF: "0.0" };
        solarCBData1[0].V = "111.0";
        solarCBData1[0].I = "121.0";

        const solarCBData2 = {};
        solarCBData2[i] = { V: "0.0", I: "0.0", MW: "0.0", MVAR: "0.0", PF: "0.0" };
        solarCBData2[0].V = "222.0";
        solarCBData2[0].I = "212.0";
        // ###Data SOLAR Line  

        const solarCBDataHeaders = ["V", "I", "MW", "MVAR", "PF"];


        // Check the solar value and append elements accordingly
        if (solar === 0) {
            // No Solar CB Lines should appear
            console.log("No Solar CB Lines are displayed.");
        } else if (solar === 1) {
            // Display Solar CB Lines based on position
            if (position === "left") {
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
                // const iconColor = incCBStatus[i] === "on" ? "red" : (incCBStatus[i] === "off" ? "white" : "blue"); // Default colors for on/off
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

            // Create a table inside the SVG
            const headers = ["V", "I", "MW", "MVAR", "PF"];

            headers.forEach((header, index) => {
                const rowY = tableY + 20 + index * 20;
                const headerText = createTextElement(tableX + 5, rowY, header, "14px", "black");
                svg.appendChild(headerText);
                const valueText = createTextElement(tableX + 50, rowY, incomingLineData[i][header], "14px", "black");
                svg.appendChild(valueText);
            });
        }

        let currentX = busLineStartX + transformerMargin;
        for (let i = 0; i < transformerCount; i++) {
            console.log("transformerCount = ", transformerCount)
            // 000000000000000000000000000
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

            const solarCBiconGroup3 = document.createElementNS(svgNamespace, "g"); 

            const tooltip = document.getElementById("tooltip");

            const showTooltip = (event, data) => {
                const x = event.clientX;
                const y = event.clientY;
            
                // Set tooltip content
                const tableContent = `
      <table style="border-collapse: collapse; width: 100%;">
        <thead>
          <tr>
            <th style="border: 1px solid #ccc; padding: 5px;">Key</th>
            <th style="border: 1px solid #ccc; padding: 5px;">Value</th>
          </tr>
        </thead>
        <tbody>
          ${Object.entries(data)
            .map(
              ([key, value]) =>
                `<tr>
                  <td style="border: 1px solid #ccc; padding: 5px;">${key}</td>
                  <td style="border: 1px solid #ccc; padding: 5px;">${value}</td>
                </tr>`
            )
            .join("")}
        </tbody>
      </table>
    `;

    // Set tooltip content
    tooltip.innerHTML = tableContent;
            
                // Position tooltip above the clicked element
                tooltip.style.left = `${x-220}px`;
                tooltip.style.top = '300px'; // Adjust for tooltip height
                tooltip.style.display = "block";
              };

              const hideTooltip = () => {
                tooltip.style.display = "none";
              };

            // Draw the top circle
            const transformerCircle1 = document.createElementNS(svgNamespace, "circle");
            const transformerRadius1 = 13; // Radius of each circle
            transformerCircle1.setAttribute("cx", transformerX);
            transformerCircle1.setAttribute("cy", circle1Y);
            transformerCircle1.setAttribute("r", transformerRadius1);
            transformerCircle1.setAttribute("fill", "#ecf0f1");
            transformerCircle1.setAttribute("stroke", "red");
            transformerCircle1.setAttribute("stroke-width", "2");
            // Add click event to the top circle
            // transformerCircle1.addEventListener("click", () => {
            //     showTooltip(event, `Top Circle of Transformer ${i + 1} clicked!`);

            // });
            solarCBiconGroup3.appendChild(transformerCircle1);
            

            // Draw the bottom circle
            const transformerCircle2 = document.createElementNS(svgNamespace, "circle");
            const transformerRadius2 = 11; // Radius of each circle
            transformerCircle2.setAttribute("cx", transformerX);
            transformerCircle2.setAttribute("cy", circle2Y);
            transformerCircle2.setAttribute("r", transformerRadius2);
            transformerCircle2.setAttribute("fill", "#ecf0f1");
            transformerCircle2.setAttribute("stroke", "green");
            transformerCircle2.setAttribute("stroke-width", "2");
            // Add click event to the bottom circle
            solarCBiconGroup3.appendChild(transformerCircle2);
            svg.appendChild(solarCBiconGroup3);
            solarCBiconGroup3.addEventListener("click", () => {
                showTooltip(event, `Top Circle of Transformer ${i + 1} clicked!`);
            });

            
            // Outside click event stop
            document.addEventListener("click", (event) => {
                if (!event.target.closest("g")) {
                  hideTooltip();
                }
              });

            // Add transformer label
            const transformerLabel = createTextElement(transformerX - 85, busLineY + 90, `Transformer ${i + 1}`, "12px", "black");
            svg.appendChild(transformerLabel);

            // 000000000000000000000000000

            // Find which bus line segment the transformer is connected to
            const segmentIndex = incomingLineAssignments[i]; // Get the assigned incoming line for this transformer
            const dashStyle = busLineSegments[segmentIndex].dashStyle;
            // Draw line from transformer to the bus line
            // const incominglinestype = trfTopCBStatus[i] === "on" ? null : "5,5";
            const transformerTopCBtoMainBusLine = createLineElement(transformerX, busLineY, transformerX, busLineY + 60, "red", 3);
            const transformerTopCBtoTrf = createLineElement(transformerX, busLineY + 60, transformerX, busLineY + 120, "red", 3, xx); // blue
            const transformerBottomCBtoTrf = createLineElement(transformerX, busLineY + 220, transformerX, busLineY + 160, "green", 3); // orange
            const transformerBottomCBtoSmallBusLine = createLineElement(transformerX, busLineY + 300, transformerX, busLineY + 220, "green", 3);

            console.log("!!!!!!!")

            // Draw smaller bus line for feeders (same as before)
            const smallerBusLineY = busLineY + 300;
            const smallerBusLineStartX = currentX - 70;
            const smallerBusLineEndX = currentX + totalFeederWidth;
            const smallerBusLine = createLineElement(smallerBusLineStartX + 20, smallerBusLineY, smallerBusLineEndX + 20, smallerBusLineY, "green", 3);

            // If the bus line segment is dashed, make the transformer line dashed too
            if (dashStyle) {
                transformerTopCBtoMainBusLine.setAttribute("stroke-dasharray", dashStyle);
                transformerBottomCBtoSmallBusLine.setAttribute("stroke-dasharray", dashStyle);
                // transformerTopCBtoTrf.setAttribute("stroke-dasharray", dashStyle);
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
            const trfTopCBData = [
                {
                     V: "0.8", I: "0.0", MW: "0.0", MVAR: "0.0", PF: "0.0"
                },
                {
                    V: "1.8", I: "1.0", MW: "0.0", MVAR: "0.0", PF: "0.0"
               },
            ];
            for (let i = 0; i < transformerCount; i++) {
                trfTopCBData[i] = { V: "0.0", I: "0.0", MW: "0.0", MVAR: "0.0", PF: "0.0" };
            }
            // ###Data TRANSFORMER TOP Line  
            trfTopCBData[0].V = "8.0";
            trfTopCBData[0].PF = "18.0";
            // ###Data TRANSFORMER TOP Line  

            // Data table for each incoming line
            const tableX = 330; // X position for the data table (left side of incoming line)
            const tableY = 170; // Y position for the table
            const tableWidth = 100;
            const tableHeight = 150;

            // Create a table inside the SVG
            const trfTopCBDataHeaders = ["V", "I", "MW", "MVAR", "PF"];

            trfTopCBDataHeaders.forEach((header, index) => {
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
            // +++++++++++++++++++++++++++++++++++++++ TRF top CB Data Table
            const trfBottomCBData = {};
            for (let i = 0; i < transformerCount; i++) {
                trfBottomCBData[i] = { V: "0.0", I: "0.0", MW: "0.0", MVAR: "0.0", PF: "0.0" };
            }
            // ###Data TRANSFORMER BOTTOM Line  
            trfBottomCBData[0].V = "11.0";
            trfBottomCBData[0].I = "12.0";
            // ###Data TRANSFORMER BOTTOM Line  


            // Create a table inside the SVG
            const trfBottomCBDataHeaders = ["V", "I", "MW", "MVAR", "PF"];

            trfBottomCBDataHeaders.forEach((header, index) => {
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

            // Add couplers between transformers
            if (i < transformerCount - 1) { // Ensure that there is another transformer (and thus another smaller bus line) after the current one
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
            // ********************************************

            // Object to store data for all feeders (dynamically updated)
            const feedersData = {};

            // Function to update feeder data dynamically
            function updateFeederData(i, j, data) {
                // Initialize feeder data if it doesn't exist
                if (!feedersData[`feeder-${i}-${j}`]) {
                    feedersData[`feeder-${i}-${j}`] = {
                        V: "0.0",
                        I: "0.0",
                        MW: "0.0",
                        MVAR: "0.0",
                        PF: "0.0"
                    };
                }

                // Update feeder data with the passed values
                feedersData[`feeder-${i}-${j}`] = { ...feedersData[`feeder-${i}-${j}`], ...data };
                console.log(`Data for feeder-${i}-${j}:`, feedersData[`feeder-${i}-${j}`]);
            }

            // Iterate through feeders
            console.log("feederCount 1-- ", feederCount);
            for (let j = 0; j < feederCount; j++) {
                console.log("feederCount 2-- ", feederCount);

                const feederX = currentX + j * (feederWidth + margin);

                // Create a line for the feeder
                const feederLine = createLineElement(feederX, smallerBusLineY, feederX, smallerBusLineY + 150, "green", 3);
                if (dashStyle) {
                    feederLine.setAttribute("stroke-dasharray", dashStyle);
                }
                svg.appendChild(feederLine);

                // Add a square in the center of the feeder
                const feederCBSize = 15;
                const feederCenterY = smallerBusLineY + 75;
                const feederCBStatusArray = config.feederCBStatus[i];
                const currentFeederStatus = feederCBStatusArray[j];
                const trfBottomIconGroupId = `feeder-cb-group-${i}-${j}`;

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
                        const feederColor = currentFeederStatus === "on" ? "red" : currentFeederStatus === "off" ? "white" : "blue";
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

                // Dynamically update the feeder data
                // ###Data FEEDERS  
                const feederData = {
                    V: (Math.random() * 100).toFixed(1), // Random Voltage
                    I: (Math.random() * 50).toFixed(1), // Random Current
                    MW: (Math.random() * 200).toFixed(1), // Random MW
                    MVAR: (Math.random() * 100).toFixed(1), // Random MVAR
                    PF: (Math.random()).toFixed(2) // Random Power Factor
                };
                // ###Data FEEDERS  

                console.log("feederData >>>>>> ", feederData)

                updateFeederData(i, j, feederData); // Call the update function with dynamic values

                // Create table rows dynamically for each feeder
                const outGoingFeederCBDataHeaders = ["V", "I", "MW", "MVAR", "PF"];
                outGoingFeederCBDataHeaders.forEach((header, index) => {
                    const rowY = 490 + index * 20;
                    const headerTextId = `feeder-header-${i}-${j}-${header}`;
                    const valueTextId = `feeder-value-${i}-${j}-${header}`;
                    if (!svg.querySelector(`#${headerTextId}`)) {
                        const headerText = createTextElement(feederX - 100, rowY, header, "13px", "black");
                        headerText.setAttribute("id", headerTextId);
                        svg.appendChild(headerText);
                    }
                    if (!svg.querySelector(`#${valueTextId}`)) {
                        const valueText = createTextElement(feederX - 55, rowY, feedersData[`feeder-${i}-${j}`][header], "13px", "black");
                        valueText.setAttribute("id", valueTextId);
                        svg.appendChild(valueText);
                    }
                });

                // Feeder Label (same as before)
                const feederLabelId = `feeder-label-${i}-${j}`;
                if (!svg.querySelector(`#${feederLabelId}`)) {
                    const feederLabel = createTextElement(feederX - 20, smallerBusLineY + 160, feederNames[i]["11"], "12px", "black");
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
    }

    // // Example config to pass into the function
    // const config = {
    //     incomingLineCount: 3, // Number of incoming lines
    //     incLineStatus: ["off", "on", "error"], // Color of the incoming CBs, 'red' or 'grey'
    //     incCBStatus: ["on", "on", "error"], // Color of the incoming CBs, 'red' or 'grey'
    //     mainBusLineCouplerStatus: ["off", "off"],  // New array for Bus Coupler status
    //     transformerVoltageLineStatus : ["on", "on", "on"],
    //     transformerCount: 3, // Number of transformers
    //     transformerFeederCounts: [3, 4, 5], // Feeder count for each transformer
    //     feederNames: [ // Names for each feeder, each transformer has a list of feeder names
    //         ["Feeder A", "Feeder B", "Feeder B"], // Feeder names for Transformer 1
    //         ["Feeder A", "Feeder B", "Feeder B", "Feeder B"], // Feeder names for Transformer 2
    //         ["Feeder f", "Feeder g", "Feeder h", "Feeder i", "Feeder j"]
    //     ],
    //     feederCBStatus: [ // Status for each feeder CB
    //         ["on", "off", "on", "error"], // CB statuses for Transformer 1 feeders
    //         ["error", "on", "off", "on"], // CB statuses for Transformer 2 feeders
    //         ["on", "on", "off", "on", "error"]
    //     ],

    //     // Assign each transformer to an incoming line (index of incoming lines)
    //     incomingLineAssignments: [0, 1, 2], // Transformer 1 connected to line 0, Transformer 2 to line 1, Transformer 3 to line 0
    //     trfTopCBStatus: ["on", "off", "on"], // Status for top CBs
    //     trfBottomCBStatus: ["error", "on", ""], // Status for bottom CBs

    //     subBusLineCouplerStatus: ["off", "off"]  // New array for Bus Coupler status
    // };

    const config = {
        incomingLineCount: 1, // Number of incoming lines
        incLineStatus: ["on"], // Color of the incoming CBs, 'red' or 'grey'
        incCBStatus: ["on"], // Color of the incoming CBs, 'red' or 'grey'
        mainBusLineCouplerStatus: ["off"], // New array for Bus Coupler status
        transformerVoltageLineStatus: ["on", "on"],
        transformerCount: 2, // Number of transformers
        transformerFeederCounts: [5, 3], // Feeder count for each transformer
        feederNames: [
            [{feedername:"Feeder A",feedersize: 'hkh'},{feedername: 'Feeder B'}],
            ["Feeder A12", "Feeder B12", "Feeder C12"]
        ],
        solarNames: [
            ["solar A"],
            ["solar A12"]
        ],
        feederCBStatus: [
            ["on", "off", "on", "error", "error"],
            ["error", "on", "off"]
        ],

        // Assign each transformer to an incoming line (index of incoming lines)
        incomingLineAssignments: [0, 0], // Transformer 1 connected to line 0, Transformer 2 to line 1, Transformer 3 to line 0
        trfTopCBStatus: ["on", "off"], // Status for top CBs
        trfBottomCBStatus: ["error", "on"], // Status for bottom CBs
        solarCBStatus: ["on", "on"], // Status for bottom CBs

        subBusLineCouplerStatus: [""] // New array for Bus Coupler status

        
    };
    const svg = document.querySelector("svg");
    appendDataToSVG(svg, config);

    // ---------------------------------------------------
};