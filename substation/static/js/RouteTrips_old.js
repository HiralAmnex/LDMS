window.onload = function () {
    var data = pythonData.SLD_data; // Access the embedded Python data
    var middledata = pythonData.SLD_middledata;

    console.log("Data:", data);
    console.log("Middle Data:", middledata);
    console.log('************************')

    // Get the screen dimensions
    const screenWidth = 0;
    const screenHeight = window.innerHeight + 20;
    let mathmaxh = Math.max(900, screenHeight);

    // Get the SVG container
    const svgContainer = document.getElementById('mySvg');

    // Set the SVG container size based on screen size (optional)

    svgContainer.setAttribute('height', mathmaxh);

    setInterval(() => {
        // Assuming svgContainer is your SVG element
        const svgWidth = svgContainer.getBoundingClientRect().width;
        const linetopmiddle = createLineElement(85, 145, svgWidth, 145, "#333", "2");
        svgContainer.appendChild(linetopmiddle);
    }, 1000);

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

    // Function to append data to SVG
// Function to append data to SVG

    function appendDataToSVG(svg, data) {
        const margin = 20; // Margin between columns
        const columnWidth = 180; // Width of each data column
        let xOffset = 50;   // Horizontal offset for each column
        let yOffset = 20;  // Vertical offset for rows
        const groups = []; // To store references to each data group

        // For each item in the data, create its corresponding SVG elements
        data.forEach((item, indexright) => {
            // Create a group for each data entry
            const dataGroup = document.createElementNS(svgNamespace, "g");
            dataGroup.setAttribute("transform", `translate(${xOffset + (indexright * 300)}, 0)`);

            // Append title name
            const titleGroup = document.createElementNS(svgNamespace, "g");
            const titleRect = createRectElement(35, 0, columnWidth - 5, 20, "transparent", "transparent");
            const titleText = createTextElement(37, 15, item.titlename, "11", "Roboto-Bold, Roboto", "700", 'transparent');
            const attrRectyellow = createRectElement(250, yOffset, 110, 20, "#fb9a25", "#dadada");
            const titleslideText = createTextElement(254, 35, item.titlesidetext, "14", "Roboto-Bold, Roboto", "700", '#fff');
            const lineverticle = createLineElement(305, 74, 305, 40, "#333", "1");
            const circleverticle = createCircleElement(305, 76, 3, "#333", "1");
            const fillColor = item.status === "on" ? 'green' : 'red';
            const attrRectonoff = createRectElement(298, yOffset + 61, 14, 14, fillColor, "#dadada");
            const lineverticlebottom = createLineElement(305, 102, 305, 145, "#333", "1");
            const circleverticlebottom = createCircleElement(305, 100, 3, "#333", "1");

            titleGroup.appendChild(titleRect);
            dataGroup.appendChild(attrRectyellow);
            dataGroup.appendChild(titleslideText);
            dataGroup.appendChild(lineverticle);
            dataGroup.appendChild(circleverticle);
            dataGroup.appendChild(attrRectonoff);
            dataGroup.appendChild(lineverticlebottom);
            dataGroup.appendChild(circleverticlebottom);

            titleGroup.appendChild(titleText);
            dataGroup.appendChild(titleGroup);

            yOffset += 0; // Adjust yOffset for next row

            // Create placeholders for attributes
            const attributes = ['VOLT', 'CURR', 'MW', 'MVAR'].map((attrName, index) => {
                const attrGroup = document.createElementNS(svgNamespace, "g");
                attrGroup.setAttribute("transform", `translate(0, ${yOffset + (index * 20)})`);

                const attrRect = createRectElement(35, 0, 90, 20, "#eeedef", "#dadada");
                const attrText = createTextElement(37, 13, `${attrName}:`, "14", "Roboto-Bold, Roboto", "700");
                const attrRectright = createRectElement(90, 0, 120, 20, "#fff", "#dadada");
                const attrTextVal = createTextElement(92, 15, "2.0", "14", "Roboto-Regular, Roboto", '500'); // Initially empty

                attrGroup.appendChild(attrRect);
                attrGroup.appendChild(attrRectright);
                attrGroup.appendChild(attrText);
                attrGroup.appendChild(attrTextVal);

                dataGroup.appendChild(attrGroup);

                return attrTextVal; // Return reference to the text element for later updates
            });

            groups.push({ dataGroup, attributes }); // Store group and attributes references
            svg.appendChild(dataGroup);

            xOffset += columnWidth + margin; // Move xOffset for the next column
        });

        // Update the data every second
        setInterval(() => {
            fetch('/fetch_data/')
                .then(response => response.json())
                .then(data => {
                    data.final_data.forEach((item, i) => {
                        console.log("data0-----",item)
                        if (groups[i]) {
                            // Update the text values for all the attributes for each data entry
                            groups[i].attributes[0].textContent = `${item.R_VOLT}`;
                            groups[i].attributes[1].textContent = `${item.B_VOLT}`;
                            groups[i].attributes[2].textContent = `${item.Y_VOLT}`;
                            groups[i].attributes[3].textContent = `${item.R_CURR}`;
                            // groups[i].attributes[4].textContent = `${item.IB}`;
                            // groups[i].attributes[5].textContent = `${item.PF}`;
                        }
                    });
                })
                .catch(error => console.error('Error fetching data0:', error));
        }, 1000); // Update every 1 second
    }

    // Function to append data to SVG
    function appendmiddleDataToSVG(svg, middledata) {
        
        const svgNamespace = "http://www.w3.org/2000/svg";
        const columnWidth = 200; // Width of each data column
        let yOffset = 20; // Vertical offset for rows
        let transporterDataCountval = 0;
        let countconnect = 0;
        let fromvalue = 0;

        const updateData = () => {
            fetch('/fetch_data/')
                .then(response => response.json())
                .then(data => {
                    const updatedMiddleData = data.final_data2;
                    updateSVG(updatedMiddleData);
                    console.log("data1-----",data)
                })
                .catch(error => console.error('Error fetching data:', error));
        };
            

        const updateSVG = (data) => {
            // svg.innerHTML = ''; // Clear existing SVG content
            while (svg.firstChild) {
                if (svg.firstChild == null) {
                    pass
                    
                } else {                    
                    svg.removeChild(svg.firstChild);
                }
            }
            console.log("------ svg.firstChild",svg.firstChild)
            console.log("------ 1data",data)
            
            
            data.forEach((item, indexright) => {
                console.log("------ indexright",indexright)
                if (indexright == 0) {
                    fromvalue = 0;
                    
                    
                    transporterDataCountval = item.transpoterdata ? item.transpoterdata.length : 0;
                }
                else {
                    
                    console.log("------1",item)
                    if (middledata[0].transpoterdata.length <= 1) {
                        if (item.transpoterdata.length == 1) {
                            fromvalue = (transporterDataCountval * 220) + 220;
                            transporterDataCountval += item.transpoterdata ? item.transpoterdata.length : 0;
                        }
                        else {
                            fromvalue = (transporterDataCountval * 220) + 220;
                        }
                    }
                    else {
                        if (item.transpoterdata.length == 1) {
                            fromvalue = (transporterDataCountval * 220) + 0;
                            transporterDataCountval += item.transpoterdata ? item.transpoterdata.length : 0;
                        }
                        else {
                            // console.log("---+++++",transporterDataCountval)
                            fromvalue = transporterDataCountval * 220;
                        }
                    }
                    transporterDataCountval += item.transpoterdata ? item.transpoterdata.length : 0;
                    // console.log("---+++++",transporterDataCountval)
                }
                let mathmax = Math.max(1400, transporterDataCountval * 230);
                svg.setAttribute('width', mathmax);

                // Create a group for each data entry
                const dataGroup = document.createElementNS(svgNamespace, "g");
                dataGroup.setAttribute("transform", `translate(${fromvalue}, ${yOffset + 130})`);

        // ==============================================================================
                console.log("item for status ;;;;",item)
                const titleGroup = document.createElementNS(svgNamespace, "g");
                const titleRect = createRectElement(20, 165, columnWidth - 45, 20, "#fff", "#dadada"); // [3rd table Title][Right(x), Down(y), size small, 20, BG Color,Borer Color]
                const titleText = createTextElement(22, 179, item.titlename, "11", "Roboto-Bold, Roboto", "700", '#0e65ba');
                const attrRectyellow = createRectElement(180, yOffset + 110, 240, 20, "#fb9a25", "#dadada"); //incoming feeder(Transformer) orange bg title
                const titleslideText = createTextElement(184, 146, item.titlesidetext, "14", "Roboto-Bold, Roboto", "700", '#fff');
                const lineverticle = createLineElement(205, 40, 205, -5, "#333", "1");
                const circleverticle = createCircleElement(205, 42, 3, "#333", "1");
                // const fillColor = item.status === "on" ? 'green' : 'red';
                let fillColor;
                if (item.status == "on") {
                    fillColor = 'green';
                    // console.log("fillColor = 'green'")
                } else {
                    fillColor = 'red';
                }
                // console.log("item.status ::", item.status)
                const titleTextonoff = createTextElement(180, 56, item.status, "11", "Roboto-Bold, Roboto", "700", fillColor);
                const attrRectonoff = createRectElement(198, yOffset + 26, 14, 14, fillColor, "#dadada");
                const lineverticlebottom = createLineElement(205, 130, 205, 65, "#333", "1");
                const circleverticlebottom = createCircleElement(205, 63, 3, "#333", "1");
                const lineverticleicon = createLineElement(205, 192, 205, 150, "#333", "1");
                const lineverticleiconbottom = createLineElement(205, 275, 205, 238, "#333", "1");
                const fillColoricon = item.statustransporter === "on" ? 'green' : 'red';
                const circleverticlebottomicon = createCircleElement(205, 276, 3, "#333", "1");
                const circleverticlebottomiconbottom = createCircleElement(205, 298, 3, "#333", "1");
                const attrRectonofficon = createRectElement(198, yOffset + 260, 14, 14, fillColoricon, "#dadada"); // On/Off Switch 3rd column
                const titleTextonofficon = createTextElement(178, 290, item.statustransporter, "11", "Roboto-Bold, Roboto", "500", fillColoricon);
                const lineverticleiconbottomlast = createLineElement(205, 340, 205, 298, "#333", "1");
                const attrRectyellowbottom = createRectElement(178, yOffset + 315, 205, 20, "#f8623c", "#dadada"); // [3rd Table] incoming feeder(Transformer) pink bg title
                const titleslideTextbottom = createTextElement(182, 350, item.titlesidetext, "12", "Roboto-Bold, Roboto", "700", '#fff'); // [3rd Table] incoming feeder(Transformer) pink bg title's TEXT
                const titleslideTextbottomleft = createTextElement(70, 350, item.attributeleft, "14", "Roboto-Bold, Roboto", "700", '#333'); //incoming feeder(Transformer) title
                const linelastmiidle = createLineElement(205, 355, 205, 400, "#333", "1");

                titleslideTextbottomleft.style.cursor = "pointer";
                titleslideTextbottomleft.addEventListener("click", function () {
                    // Code to execute when the element is clicked
                    // alert(item.attributeleft);
                    // You can add any other action here
                });
                attrRectonofficon.addEventListener("click", function () {
                    // Code to execute when the element is clicked
                // alert(fillColoricon);
                    // You can add any other action here
                });

                const lineverticleiconbottomlastmiddle = createLineElement(205, 390, 205, 355, "#333", "1");

                // Create the circle icon group
                const circleIconGroup = createGroup("circle-icon", "translate(195 192)");
                const ellipseGroup = createGroup("Ellipse_56", "translate(-1.5 0)", { "fill": "none", "stroke": "#3cf", "stroke-width": "1" });
                ellipseGroup.appendChild(createCircle(12, 13, 13, "", "#3cf"));
                ellipseGroup.appendChild(createCircle(13, 13, 12.5));

                const polygonGroup = createGroup("Polygon_15", "translate(7.536 5.652)", { "fill": "#fff", "stroke-linecap": "round", "stroke-linejoin": "round" });
                polygonGroup.appendChild(createPath("M 10.14168071746826 11.18115997314453 L 0.7858555316925049 1.18115997314453 L 5.463768005371094 1.180108189582825 L 10.14168071746826 11.18115997314453 Z"));
                polygonGroup.appendChild(createPath("M 5.463768005371094 2.360248565673828 L 1.571727752685547 10.68115997314453 L 9.355808258056641 10.68115997314453 L 5.463768005371094 2.360248565673828 M 5.463768005371094 -9.5367431640625e-07 L 10.92753791809082 11.68115997314453 L -1.9073486328125e-06 11.68115997314453 L 5.463768005371094 -9.5367431640625e-07 Z", "#3cf"));

                circleIconGroup.appendChild(ellipseGroup);
                circleIconGroup.appendChild(polygonGroup);

                // Create the path icon group
                const pathIconGroup = createGroup("Group_52648", "translate(195 212)");
                const ellipseGroupPath = createGroup("Ellipse_56-2", "translate(0)", { "fill": "none", "stroke": "#0e65ba", "stroke-width": "1" });
                ellipseGroupPath.appendChild(createCircle(11, 13, 13, "", "#0e65ba"));
                ellipseGroupPath.appendChild(createCircle(11, 13, 12.5));

                const linePathGroup = createGroup("Group_52647", "translate(5.913 6.983)");
                linePathGroup.appendChild(createLine("5.652", "translate(5.218 0)", "#0e65ba", "1"));
                const pathElement = createPath("M-14900.287-9955.835l-5.217-4.723", "none", "#0e65ba", "round");
                pathElement.setAttribute("stroke-width", "1");
                pathElement.setAttribute("transform", "translate(14910.504 9966.188)");
                linePathGroup.appendChild(pathElement);
                const pathElementright = createPath("M-14900.287-9960.558l-5.217,4.723", "none", "#0e65ba", "round");
                pathElementright.setAttribute("stroke-width", "1");
                pathElementright.setAttribute("transform", "translate(14905.504 9966.188)");
                linePathGroup.appendChild(pathElementright);
                
                pathIconGroup.appendChild(ellipseGroupPath);
                pathIconGroup.appendChild(linePathGroup);


                // if (dataGroup != '') {
                //     dataGroup.removeChild(dataGroup.firstChild);
                // } else {
                //     pass
                // }

                titleGroup.appendChild(titleRect);
                dataGroup.appendChild(attrRectyellow);
                dataGroup.appendChild(titleslideText);
                dataGroup.appendChild(lineverticle);
                dataGroup.appendChild(circleverticle);
                dataGroup.appendChild(attrRectonoff);
                dataGroup.appendChild(titleTextonoff);
                dataGroup.appendChild(lineverticlebottom);
                dataGroup.appendChild(circleverticlebottom);
                dataGroup.appendChild(circleIconGroup);
                dataGroup.appendChild(pathIconGroup);
                dataGroup.appendChild(lineverticleicon);
                dataGroup.appendChild(lineverticleiconbottom);
                dataGroup.appendChild(attrRectonofficon);
                dataGroup.appendChild(titleTextonofficon);
                dataGroup.appendChild(circleverticlebottomicon);
                dataGroup.appendChild(circleverticlebottomiconbottom);
                dataGroup.appendChild(lineverticleiconbottomlast);
                dataGroup.appendChild(attrRectyellowbottom);
                dataGroup.appendChild(titleslideTextbottom);
                dataGroup.appendChild(titleslideTextbottomleft);
                dataGroup.appendChild(linelastmiidle);

                titleGroup.appendChild(titleText);
                dataGroup.appendChild(titleGroup);

                // console.log("dataGroup -- ",dataGroup)

                yOffset += 0; // Adjust yOffset for next row

                const attributes = [
                    { name: 'VOLT', value: item['R_VOLT_2'] },
                    { name: 'CURR', value: item['Y_VOLT_2'] },
                    { name: 'MW', value: item['B_VOLT_2'] },
                    { name: 'MVAR', value: item['Y_CURR_2'] },
                    // { name: 'IB', value: item['IB_2'] },
                    // { name: 'PF', value: item['PF_2'] },
                ];
                const attributeright = [
                    { name: 'VOLT', value: item['R_VOLT_1'] },
                    { name: 'CURR', value: item['Y_VOLT_1'] },
                    { name: 'MW', value: item['B_VOLT_1'] },
                    { name: 'MVAR', value: item['R_CURR_1'] },
                    // { name: 'IB', value: item['IB'] },
                    // { name: 'PF', value: item['PF'] },

                ];

                const attributeleft = [
                    { name: 'OLTC', value: item['OLTC_1'] },
                    { name: 'OTI', value: item['Oil_Temperature_T1_1'] },
                    { name: 'WTI', value: item['Winding_Temperature_T1_1'] },
                ];
                attributes.forEach((attr, index) => {
                    const attrGroup = document.createElementNS(svgNamespace, "g");
                    attrGroup.setAttribute("transform", `translate(280, ${10 + (index * 20)})`);
                    const attrRect = createRectElement(-35, -10, 60, 20, "#fff", "#dadada");
                    const attrText = createTextElement(-34, 8, `${attr.name}:`, "14", "Roboto-Bold, Roboto", "700");
                    const attrRectright = createRectElement(15, -10, 100, 20, "#fff", "#dadada");
                    const attrTextVal = createTextElement(17, 8, `${attr.value}`, "14", "Roboto-Regular, Roboto", '500');

                    attrGroup.appendChild(attrRect);
                    attrGroup.appendChild(attrRectright);
                    attrGroup.appendChild(attrText);
                    attrGroup.appendChild(attrTextVal);
                    dataGroup.appendChild(attrGroup);
                });
                attributeright.forEach((attr, index) => {
                    const attrGroup = document.createElementNS(svgNamespace, "g");
                    attrGroup.setAttribute("transform", `translate(280, ${235 + (index * 20)})`);
                    const attrRect = createRectElement(-35, 0, 50, 20, "#eeedef", "#dadada");
                    const attrText = createTextElement(-33, 13, `${attr.name}:`, "14", "Roboto-Bold, Roboto", "700");
                    const attrRectright = createRectElement(15, 0, 100, 20, "#fff", "#dadada");
                    const attrTextVal = createTextElement(17, 15, `${attr.value}`, "14", "Roboto-Regular, Roboto", '500');

                    attrGroup.appendChild(attrRect);
                    attrGroup.appendChild(attrRectright);
                    attrGroup.appendChild(attrText);
                    attrGroup.appendChild(attrTextVal);
                    dataGroup.appendChild(attrGroup);
                });
                attributeleft.forEach((attr, index) => {
                    const attrGroup = document.createElementNS(svgNamespace, "g");
                    attrGroup.setAttribute("transform", `translate(20, ${185 + (index * 20)})`);
                    const attrRect = createRectElement(0, 0, 60, 20, "#fff", "#dadada");
                    const attrText = createTextElement(5, 13, `${attr.name}:`, "14", "Roboto-Bold, Roboto", "700");
                    const attrRectright = createRectElement(75 - 20, 0, 100, 20, "#fff", "#dadada");
                    const attrTextVal = createTextElement(60, 13, `${attr.value}`, "14", "Roboto-Regular, Roboto", '500');

                    attrGroup.appendChild(attrRect);
                    attrGroup.appendChild(attrRectright);
                    attrGroup.appendChild(attrText);
                    attrGroup.appendChild(attrTextVal);
                    dataGroup.appendChild(attrGroup);
                });


                // console.log("---+++++",transporterDataCountval)

                if (item.transpoterdata && item.transpoterdata.length > 0) {
                    const transporterGroup = document.createElementNS(svgNamespace, "g");
                    transporterGroup.setAttribute("transform", `translate(80, ${yOffset + 380})`); // Adjust yOffset for transporter data

                    countconnect += item.transpoterdata ? item.transpoterdata.length : 0;
                    const storevarible = item.transpoterdata.length == 1 ? item.transpoterdata.length * 425 : item.transpoterdata.length * 212;
                    
                    const lineconnectivity = createLineElement(storevarible, -25, storevarible, 28, "#333", "4");
                    const circleconnectivity = createCircleElement(storevarible, 0, 8, "#333", "3");
                    lineconnectivity.style.cursor = "pointer";
                    circleconnectivity.style.cursor = "pointer";

                    item.transpoterdata.forEach((transporterItem, transporterIndex) => {
                        const transporterYOffset = transporterIndex * 205; // Adjust the vertical position for each transporter item

                        // Create a group for each transporter item
                        const transporterItemGroup = document.createElementNS(svgNamespace, "g");
                        transporterItemGroup.setAttribute("transform", `translate(${transporterYOffset},0)`);

                        let sliderightposition = ((item.transpoterdata.length === 1) && (item.transpoterdata.length === 1) ? 410 : 205);
                        const lineseconedlevel = createLineElement(0, 0, sliderightposition, 0, "#333", "1");
                        const lineverticleicon = createLineElement(35, 0, 35, 40, "#333", "1");
                        const lineverticleiconbottom = createLineElement(35, 65, 35, 105, "#333", "1");
                        const fillColoricon = transporterItem.status === "on" ? 'green' : 'red';
                        const circleverticlebottomicon = createCircleElement(35, 41, 3, "#333", "1");
                        const circleverticlebottomiconbottom = createCircleElement(35, 63, 3, "#333", "1");
                        const attrRectonofficon = createRectElement(28, 45, 14, 14, fillColoricon, "#dadada");
                        const titleTextonofficon = createTextElement(10, 50, transporterItem.status, "11", "Roboto-Bold, Roboto", "700", fillColoricon);
                        const lineverticleiconbottomlast = createLineElement(35, 112, 35, 152, "#333", "1");
                        const attrRectyellowbottom = createRectElement(-19, 100, 85, 20, "#f8623c", "#dadada"); //outgoing feeder title pink color
                        const titleslideTextbottom = createTextElement(-16, 115, transporterItem.titlesidetext, "14", "Roboto-Bold, Roboto", "700", '#fff');
                        const titleslideTextcenter = createTextElement(40, 180, transporterItem.attributecenter, "14", "Roboto-Bold, Roboto", "700", '#333'); //outgoing feeder title '11kv IN 1'

                        // Append transporter title

                        const transporterTitleText = createTextElement(5, 163, transporterItem.titlename, "11", "Roboto-Bold, Roboto", "700", '#0e65ba');
                        transporterItemGroup.appendChild(transporterTitleText);

                        const attributes = [
                            { name: 'VOLT', value: transporterItem['R_VOLT_3'] },
                            { name: 'CURR', value: transporterItem['Y_VOLT_3'] },
                            { name: 'MW', value: transporterItem['B_VOLT_3'] },
                            { name: 'MVAR', value: transporterItem['R_CURR_3'] },
                            // { name: 'IB', value: transporterItem['IB'] },
                            // { name: 'PF', value: transporterItem['PF'] },
                        ];
                        attributes.forEach((attr, index) => {
                            const transporterAttrRect = createRectElement(-20, 194 + (index * 20), 50, 20, "#eeedef", "#dadada");
                            const transporterAttrText = createTextElement(-18, 210 + (index * 20), `${attr.name}:`, "14", "Roboto-Bold, Roboto", "700");
                            const transporterAttrValRect = createRectElement(30, 194 + (index * 20), 100, 20, "#fff", "#dadada");
                            const transporterAttrValText = createTextElement(32, 210 + (index * 20), `${attr.value}`, "14", "Roboto-Regular, Roboto", "500");

                            transporterItemGroup.appendChild(transporterAttrRect);
                            transporterItemGroup.appendChild(transporterAttrText);
                            transporterItemGroup.appendChild(transporterAttrValRect);
                            transporterItemGroup.appendChild(transporterAttrValText);
                        });

                        transporterItemGroup.appendChild(lineverticleicon);
                        transporterItemGroup.appendChild(lineverticleiconbottom);
                        transporterItemGroup.appendChild(attrRectonofficon);
                        transporterItemGroup.appendChild(titleTextonofficon);
                        transporterItemGroup.appendChild(circleverticlebottomicon);
                        transporterItemGroup.appendChild(circleverticlebottomiconbottom);
                        transporterItemGroup.appendChild(lineverticleiconbottomlast);
                        transporterItemGroup.appendChild(attrRectyellowbottom);
                        transporterItemGroup.appendChild(titleslideTextbottom);
                        transporterItemGroup.appendChild(titleslideTextcenter);
                        transporterItemGroup.appendChild(lineseconedlevel);
                        transporterGroup.appendChild(transporterItemGroup);

                        return transporterItemGroup;
                    });
                    item={}
                    // Add transporter group to the main data group
                    dataGroup.appendChild(transporterGroup);
                    transporterGroup.appendChild(lineconnectivity);
                    transporterGroup.appendChild(circleconnectivity);

                    const handleClick = (event) => {
                        // Your click event logic here
                        // alert("Element clicked:", event.target);
                    };

                    lineconnectivity.addEventListener('click', handleClick);
                    circleconnectivity.addEventListener('click', handleClick);
                }
                
                svg.appendChild(dataGroup); // Append the data group to the SVG
            });
        };
        setInterval(updateData, 1000); // Update every 1 second
        updateData(); // Initial data fetch
    }

// Example of creating a rectangle element
// function createRectElement(x, y, width, height, fill, stroke) {
//     const rect = document.createElementNS(svgNamespace, "rect");
//     rect.setAttribute("x", x);
//     rect.setAttribute("y", y);
//     rect.setAttribute("width", width);
//     rect.setAttribute("height", height);
//     rect.setAttribute("fill", fill);
//     rect.setAttribute("stroke", stroke);
//     return rect;
// }

// Example of creating a text element
// function createTextElement(x, y, text, fontSize, fontFamily, fontWeight, fill) {
//     const textElement = document.createElementNS(svgNamespace, "text");
//     textElement.setAttribute("x", x);
//     textElement.setAttribute("y", y);
//     textElement.setAttribute("font-size", fontSize);
//     textElement.setAttribute("font-family", fontFamily);
//     textElement.setAttribute("font-weight", fontWeight);
//     textElement.setAttribute("fill", fill);
//     textElement.textContent = text;
//     return textElement;
// }

    // Append the group to the SVG container
    svgContainer.appendChild(grouptop);
    svgContainer.appendChild(groupmiddle);
    appendDataToSVG(grouptop, data);
    appendmiddleDataToSVG(groupmiddle, middledata);
};
