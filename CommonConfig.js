{
   "ColorMap" : {
      "Aqua" : "rgb(51,204,204)",
      "Black" : "rgb(0,0,0)",
      "Blue" : "rgb(0,0,255)",
      "Blue-Gray" : "rgb(123,123,192)",
      "Bright Green" : "rgb(0,255,0)",
      "Brown" : "rgb(165,42,0)",
      "Dark Blue" : "rgb(0,0,139)",
      "Dark Green" : "rgb(0,85,0)",
      "Dark Olive Green" : "rgb(0,64,64)",
      "Dark Red" : "rgb(139,0,0)",
      "Dark Teal" : "rgb(0,0,94)",
      "Dark Yellow" : "rgb(139,139,0)",
      "Gold" : "rgb(255,215,0)",
      "Gray-25%" : "rgb(192,192,192)",
      "Gray-40%" : "rgb(127,127,127)",
      "Gray-50%" : "rgb(102,102,102)",
      "Gray-80%" : "rgb(40,40,40)",
      "Green" : "rgb(0,147,0)",
      "Indigo" : "rgb(75,0,130)",
      "Lavender" : "rgb(204,153,255)",
      "Light Blue" : "rgb(125,158,192)",
      "Light Green " : "rgb(204,255,204)",
      "Light Orange" : "rgb(255,173,91)",
      "Light Turquoise" : "rgb(204,255,255)",
      "Light Yellow" : "rgb(255,255,224)",
      "Lime" : "rgb(50,205,50)",
      "Navy Blue" : "rgb(96,115,134)",
      "Orange" : "rgb(255,104,32)",
      "Pale Blue" : "rgb(153,204,255)",
      "Pink" : "rgb(255,192,203)",
      "Plum" : "rgb(234,128,102)",
      "Red" : "rgb(255,0,0)",
      "Rose" : "rgb(255,228,225)",
      "Sea Green" : "rgb(60,179,113)",
      "Sky Blue" : "rgb(0,204,255)",
      "Tan" : "rgb(255,254,153)",
      "Teal" : "rgb(56,142,142)",
      "Turquoise" : "rgb(0,255,255)",
      "Violet" : "rgb(128,0,128)",
      "White" : "rgb(255,255,255)",
      "Yellow" : "rgb(255,255,0)"
   },
   "DictionaryMap" : {},
   "HooterType" : "2",
   "PictureSections" : {
      "BottomSection" : "",
      "FooterSection" : "FooterPic",
      "HeaderSection" : "headerpic",
      "LeftSection" : "",
      "RightSection" : "",
      "TopSection" : ""
   },
   "PresentationMap" : {
      "InfoCommandOff" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "CURRENT_VALUE",
               "operator" : "!=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "visibility" : false
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "CURRENT_VALUE",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_color" : "Green",
               "visibility" : false
            }
         }
      ],
      "InfoCommandOn" : [
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "CURRENT_VALUE",
               "operator" : "!=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "visibility" : false
            }
         },
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "CURRENT_VALUE",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_color" : "Red",
               "visibility" : false
            }
         }
      ],
      "PR_ACCUMULATOR" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "INVALID_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : false,
               "text_color" : "Pink"
            }
         },
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "UPDATED_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : false,
               "text_color" : "Orange"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "UNACK_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : true,
               "text_color" : "Red"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "PERSISTENT_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : false,
               "text_color" : "Yellow"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "BLOCKED_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : false,
               "text_color" : "Blue"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "MANUAL_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : false,
               "text_color" : "Sky Blue"
            }
         }
      ],
      "PR_ALARM" : [
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "ALM_ACKNOWLEDGED",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "text_blink" : true,
               "text_color" : "Red"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "ALM_PERSISTANT",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "text_blink" : false,
               "text_color" : "Yellow"
            }
         }
      ],
      "PR_AR_VISIBLE" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "CURRENT_VALUE",
               "expression_value" : "",
               "operator" : "!=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "visibility" : false
            }
         }
      ],
      "PR_BLOCK" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "BLOCKED_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "rect_color" : "Brown"
            }
         }
      ],
      "PR_BM_RULE" : [
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "UPDATED_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "dyn_line_color" : "rgb(255,192,203)",
               "line_color" : "rgb(255,192,203)",
               "poly_line_color" : "rgb(255,192,203)",
               "rect_color" : "rgb(255,192,203)",
               "text_color" : "Black"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "BLOCKED_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "dyn_line_color" : "Brown",
               "line_color" : "Brown",
               "poly_line_color" : "Brown",
               "rect_color" : "Brown",
               "text_color" : "White"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "MANUAL_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "dyn_line_color" : "Yellow",
               "line_color" : "Yellow",
               "poly_line_color" : "Yellow",
               "rect_color" : "Yellow",
               "text_color" : "Black"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "INVALID_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "dyn_line_color" : "Pink",
               "line_color" : "Pink",
               "poly_line_color" : "Pink",
               "rect_color" : "Pink",
               "text_color" : "Black"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "UPDATED_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "dyn_line_color" : "Black",
               "line_color" : "Black",
               "poly_line_color" : "Black",
               "rect_color" : "Black",
               "text_color" : "White"
            }
         },
         {
            "condition" : {
               "comp_value" : "2",
               "data_value" : "UPDATED_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "dyn_line_color" : "Black",
               "line_color" : "Black",
               "poly_line_color" : "Black",
               "rect_color" : "Black",
               "text_color" : "White"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "CURRENT_VALUE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "dyn_line_color" : "Red",
               "line_color" : "Red",
               "poly_line_color" : "Red",
               "rect_color" : "Red",
               "text_color" : "White"
            }
         },
         {
            "condition" : {
               "comp_value" : "2",
               "data_value" : "CURRENT_VALUE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "dyn_line_color" : "Green",
               "line_color" : "Green",
               "poly_line_color" : "Green",
               "rect_color" : "Green",
               "text_color" : "White"
            }
         }
      ],
      "PR_CAT" : [
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "element_color" : "White"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "element_color" : "Green"
            }
         },
         {
            "condition" : {
               "comp_value" : "2",
               "data_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "element_color" : "Red"
            }
         },
         {
            "condition" : {
               "comp_value" : "3",
               "data_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "element_color" : "Blue"
            }
         }
      ],
      "PR_CAT_N" : [
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "element_color" : "Orange"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "element_color" : "CatGrey"
            }
         },
         {
            "condition" : {
               "comp_value" : "2",
               "data_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "element_color" : "White"
            }
         },
         {
            "condition" : {
               "comp_value" : "3",
               "data_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "element_color" : "Orange"
            }
         }
      ],
      "PR_CMD_LIST" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "BLOCKED_FLAG",
               "operator" : ">=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "text_color" : "Yellow"
            }
         }
      ],
      "PR_CMD_VISIBLE" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "BLOCKED_FLAG",
               "operator" : ">=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_color" : "Yellow"
            }
         }
      ],
      "PR_COMLINE" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "UNACK_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : true,
               "text_color" : "Red"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "PERSISTENT_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : false,
               "text_color" : "Yellow"
            }
         }
      ],
      "PR_COMMAND" : [
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "BLOCKED_FLAG",
               "operator" : ">",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "visibility" : true
            }
         },
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "BLOCKED_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "visibility" : false
            }
         }
      ],
      "PR_DI_LIST" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "BLOCKED_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "element_color" : "Blue",
               "polygon_color" : "Blue",
               "rect_color" : "Blue",
               "text_color" : "Gold"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "MANUAL_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "element_color" : "Red",
               "polygon_color" : "Red",
               "rect_color" : "Red",
               "text_color" : "Green"
            }
         }
      ],
      "PR_DOOR_SLD" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "CURRENT_VALUE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "rect_color" : "Red"
            }
         },
         {
            "condition" : {
               "comp_value" : "2",
               "data_value" : "CURRENT_VALUE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "rect_color" : "Green"
            }
         },
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "CURRENT_VALUE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "rect_color" : "Pink",
               "text_color" : "Pink"
            }
         }
      ],
      "PR_EPR" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "INVALID_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : false,
               "text_color" : "Pink"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "BLOCKED_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : false,
               "text_color" : "Blue"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "UNACK_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : true,
               "text_color" : "Red"
            }
         },
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "EPR_UPDATED",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : false,
               "text_color" : "Orange"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "MANUAL_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : false,
               "text_color" : "Sky Blue"
            }
         }
      ],
      "PR_EVENT" : [
         {
            "condition" : {
               "comp_value" : "120",
               "data_value" : "EVE_PRIORITY",
               "operator" : ">",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "text_color" : "rgb(153,204,255)"
            }
         },
         {
            "condition" : {
               "comp_value" : "110",
               "data_value" : "EVE_PRIORITY",
               "operator" : ">",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "text_color" : "rgb(10,185,10)"
            }
         },
         {
            "condition" : {
               "comp_value" : "100",
               "data_value" : "EVE_PRIORITY",
               "operator" : ">",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "text_color" : "rgb(250,223,180)"
            }
         },
         {
            "condition" : {
               "comp_value" : "91",
               "data_value" : "EVE_PRIORITY",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "text_color" : "Red"
            }
         },
         {
            "condition" : {
               "comp_value" : "90",
               "data_value" : "EVE_PRIORITY",
               "operator" : ">",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_color" : "White"
            }
         },
         {
            "condition" : {
               "comp_value" : "NULL",
               "data_value" : "EVE_COMMENT",
               "operator" : "!=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_color" : "rbg(220,238,242)"
            }
         },
         {
            "condition" : {
               "comp_value" : "8",
               "data_value" : "EVE_REASON_CODE",
               "operator" : "<",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_color" : "Red"
            }
         },
         {
            "condition" : {
               "comp_value" : "26",
               "data_value" : "EVE_REASON_CODE",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_color" : "Green"
            }
         },
         {
            "condition" : {
               "comp_value" : "13",
               "data_value" : "EVE_REASON_CODE",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_color" : "Gray-40%"
            }
         }
      ],
      "PR_FEP_HDR" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "CONNECTED",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "dyn_line_color" : "Green",
               "line_color" : "Green",
               "poly_line_color" : "Green"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "CONNECTED",
               "operator" : "!=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "dyn_line_color" : "Red",
               "line_color" : "Red",
               "poly_line_color" : "Red"
            }
         }
      ],
      "PR_FRONT_END" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "UNACK_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : true,
               "text_color" : "Red"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "PERSISTENT_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : false,
               "text_color" : "Yellow"
            }
         }
      ],
      "PR_HDS_MOD" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "CONNECTED",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "dyn_line_color" : "Green",
               "line_color" : "Green",
               "poly_line_color" : "Green"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "CONNECTED",
               "expression_value" : "",
               "operator" : "!=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "dyn_line_color" : "Red",
               "line_color" : "Red",
               "poly_line_color" : "Red"
            }
         }
      ],
      "PR_HTR_GEN" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "CURRENT_STATE",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "text_blink" : true,
               "visibility" : false
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "CURRENT_STATE",
               "operator" : "!=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "text_blink" : false,
               "visibility" : true
            }
         }
      ],
      "PR_INDICATION" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "INVALID_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "text_blink" : false,
               "text_color" : "Pink"
            }
         },
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "UPDATED_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "dyn_line_color" : "rgb(255,192,203)",
               "ellipse_color" : "rgb(255,192,203)",
               "line_color" : "rgb(255,192,203)",
               "poly_line_color" : "rgb(255,192,203)",
               "rect_color" : "rgb(255,192,203)",
               "text_blink" : false,
               "text_color" : "Pink"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "UNACK_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : true,
               "text_blink" : true,
               "text_color" : "Red"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "BLOCKED_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "dyn_line_color" : "Brown",
               "ellipse_color" : "Brown",
               "line_color" : "Brown",
               "poly_line_color" : "Brown",
               "rect_color" : "Brown",
               "text_blink" : false,
               "text_color" : "Brown"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "MANUAL_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "dyn_line_color" : "Yellow",
               "ellipse_color" : "Yellow",
               "line_color" : "Yellow",
               "poly_line_color" : "Yellow",
               "rect_color" : "Yellow",
               "text_blink" : false,
               "text_color" : "Yellow"
            }
         }
      ],
      "PR_IND_LIST" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "INVALID_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "text_blink" : false,
               "text_color" : "Pink"
            }
         },
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "UPDATED_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "dyn_line_color" : "rgb(255,192,203)",
               "ellipse_color" : "rgb(255,192,203)",
               "line_color" : "rgb(255,192,203)",
               "poly_line_color" : "rgb(255,192,203)",
               "rect_color" : "rgb(255,192,203)",
               "text_blink" : false,
               "text_color" : "Pink"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "UNACK_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : true,
               "text_blink" : true,
               "text_color" : "Red"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "BLOCKED_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "dyn_line_color" : "Brown",
               "ellipse_color" : "Brown",
               "line_color" : "Brown",
               "poly_line_color" : "Brown",
               "rect_color" : "Brown",
               "text_blink" : false,
               "text_color" : "Brown"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "MANUAL_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "dyn_line_color" : "Yellow",
               "ellipse_color" : "Yellow",
               "line_color" : "Yellow",
               "poly_line_color" : "Yellow",
               "rect_color" : "Yellow",
               "text_blink" : false,
               "text_color" : "Yellow"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "PERSISTENT_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "dyn_line_color" : "rgb(226,184,80)",
               "ellipse_color" : "rgb(226,184,80)",
               "line_color" : "rgb(226,184,80)",
               "poly_line_color" : "rgb(226,184,80)",
               "rect_color" : "rgb(226,184,80)",
               "text_blink" : false,
               "text_color" : "Red"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "PERSISTENT_FLAG",
               "expression_value" : "",
               "operator" : "!=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "text_blink" : false,
               "text_color" : "Green"
            }
         }
      ],
      "PR_KVAR_DOWN" : [
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "CURRENT_VALUE",
               "expression_value" : "",
               "operator" : ">=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "visibility" : false
            }
         },
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "CURRENT_VALUE",
               "expression_value" : "",
               "operator" : "<",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "visibility" : true
            }
         }
      ],
      "PR_KVAR_UP" : [
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "CURRENT_VALUE",
               "expression_value" : "",
               "operator" : "<",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "visibility" : false
            }
         },
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "CURRENT_VALUE",
               "expression_value" : "",
               "operator" : ">=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "visibility" : true
            }
         }
      ],
      "PR_LEG_BLOCK" : [
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "CURRENT_VALUE",
               "operator" : ">=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "circle_color" : "rgb(43,96,162)",
               "dyn_line_color" : "rgb(43,96,162)",
               "ellipse_color" : "rgb(43,96,162)",
               "line_color" : "rgb(43,96,162)",
               "poly_line_color" : "rgb(43,96,162)",
               "rect_color" : "rgb(43,96,162)",
               "text_color" : "rgb(43,96,162)"
            }
         },
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "CURRENT_VALUE",
               "operator" : "<",
               "stop_if_evaluated" : false
            },
            "presentation" : {}
         }
      ],
      "PR_LEG_NOT_UPDATE" : [
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "CURRENT_VALUE",
               "operator" : ">=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "circle_color" : "rgb(255,192,203)",
               "dyn_line_color" : "rgb(255,192,203)",
               "ellipse_color" : "rgb(255,192,203)",
               "line_color" : "rgb(255,192,203)",
               "poly_line_color" : "rgb(255,192,203)",
               "rect_color" : "rgb(255,192,203)",
               "text_color" : "rgb(255,192,203)"
            }
         },
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "CURRENT_VALUE",
               "operator" : "<",
               "stop_if_evaluated" : false
            },
            "presentation" : {}
         }
      ],
      "PR_LEG_UNACK" : [
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "CURRENT_VALUE",
               "operator" : ">=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : true,
               "text_blink" : true
            }
         }
      ],
      "PR_LR_IND" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "CURRENT_VALUE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "rect_color" : "Red",
               "text_color" : "White"
            }
         },
         {
            "condition" : {
               "comp_value" : "2",
               "data_value" : "CURRENT_VALUE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "rect_color" : "Green",
               "text_color" : "White"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "UNACK_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : true
            }
         },
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "UPDATED_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "rect_color" : "Pink",
               "text_color" : "Black"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "BLOCKED_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "rect_color" : "Brown",
               "text_color" : "White"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "MANUAL_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "rect_color" : "Yellow",
               "text_color" : "Black"
            }
         }
      ],
      "PR_MANUAL" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "MANUAL_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "rect_color" : "Yellow"
            }
         }
      ],
      "PR_MEASURAND" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "INVALID_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "element_color" : "rgb(252,136,239)",
               "text_blink" : false,
               "text_color" : "rgb(252,136,239)"
            }
         },
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "UPDATED_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "element_color" : "rgb(255,192,203)",
               "text_blink" : false,
               "text_color" : "rgb(255,192,203)"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "UNACKNOWLEDGED_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "text_blink" : true,
               "text_color" : "Red"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "PERSISTENT_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "element_color" : "rgb(226,184,80)",
               "text_blink" : false,
               "text_color" : "rgb(226,184,80)"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "BLOCKED_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "element_color" : "rgb(43,96,162)",
               "text_blink" : false,
               "text_color" : "rgb(43,96,162)"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "MANUAL_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "element_color" : "rgb(43,96,162)",
               "text_blink" : false,
               "text_color" : "rgb(43,96,162)"
            }
         },
         {
            "condition" : {
               "comp_value" : "13.52",
               "data_value" : "CURRENT_VALUE",
               "operator" : "<",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "element_color" : "Gold",
               "text_blink" : false
            }
         }
      ],
      "PR_MEAS_LIST" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "INVALID_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "text_blink" : false,
               "text_color" : "Pink"
            }
         },
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "UPDATED_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "dyn_line_color" : "rbg(255,192,203)",
               "ellipse_color" : "rbg(255,192,203)",
               "line_color" : "rbg(255,192,203)",
               "poly_line_color" : "rbg(255,192,203)",
               "rect_color" : "rbg(255,192,203)",
               "text_blink" : false,
               "text_color" : "Pink"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "UNACKNOWLEDGED_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : true,
               "text_blink" : true,
               "text_color" : "Red"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "PERSISTENT_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "text_blink" : false,
               "text_color" : "Red"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "BLOCKED_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "dyn_line_color" : "Brown",
               "ellipse_color" : "Brown",
               "line_color" : "Brown",
               "poly_line_color" : "Brown",
               "rect_color" : "Brown",
               "text_blink" : false,
               "text_color" : "Brown"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "MANUAL_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "dyn_line_color" : "Yellow",
               "ellipse_color" : "Yellow",
               "line_color" : "Yellow",
               "poly_line_color" : "Yellow",
               "rect_color" : "Yellow",
               "text_blink" : false,
               "text_color" : "Yellow"
            }
         },
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "CURRENT_ALARM_STATE",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "text_blink" : false,
               "text_color" : "rgb(254,0,0)"
            }
         },
         {
            "condition" : {
               "comp_value" : "4",
               "data_value" : "CURRENT_ALARM_STATE",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "text_blink" : false,
               "text_color" : "rgb(254,0,0)"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "CURRENT_ALARM_STATE",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "text_blink" : false,
               "text_color" : "rgb(50,83,153)"
            }
         },
         {
            "condition" : {
               "comp_value" : "3",
               "data_value" : "CURRENT_ALARM_STATE",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "text_blink" : false,
               "text_color" : "rgb(50,83,153)"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "PERSISTENT_FLAG",
               "operator" : "!=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "text_blink" : false,
               "text_color" : "rbg(204,255,204)"
            }
         }
      ],
      "PR_MEAS_SLD" : [
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "UPDATED_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "rect_color" : "Pink",
               "text_color" : "Black"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "UNACKNOWLEDGED_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : true,
               "rect_color" : "Black",
               "text_color" : "White"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "PERSISTENT_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "polygon_color" : "rgb(190,190,0)",
               "rect_color" : "rgb(190,190,0)",
               "text_color" : "White"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "INVALID_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "polygon_color" : "rgb(255,192,203)",
               "rect_color" : "rgb(255,192,203)",
               "text_color" : "White"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "BLOCKED_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "polygon_color" : "Brown",
               "rect_color" : "Brown",
               "text_color" : "White"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "MANUAL_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "polygon_color" : "Yellow",
               "rect_color" : "Yellow",
               "text_color" : "Black"
            }
         },
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "CURRENT_ALARM_STATE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "rect_color" : "rgb(254,0,0)",
               "text_color" : "White"
            }
         },
         {
            "condition" : {
               "comp_value" : "4",
               "data_value" : "CURRENT_ALARM_STATE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "rect_color" : "rgb(254,0,0)",
               "text_color" : "White"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "CURRENT_ALARM_STATE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "rect_color" : "rgb(50,83,153)",
               "text_color" : "White"
            }
         },
         {
            "condition" : {
               "comp_value" : "3",
               "data_value" : "CURRENT_ALARM_STATE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "rect_color" : "rgb(50,83,153)",
               "text_color" : "White"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "PERSISTENT_FLAG",
               "expression_value" : "",
               "operator" : "!=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false
            }
         }
      ],
      "PR_MEAS_UNACK" : [
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "CURRENT_VALUE",
               "operator" : ">=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : true,
               "polygon_color" : "rgb(220,0,0)",
               "rect_color" : "rgb(220,0,0)",
               "text_blink" : true
            }
         }
      ],
      "PR_MMI" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "UNACK_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : true,
               "text_color" : "Red"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "PERSISTENT_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : false,
               "text_color" : "Yellow"
            }
         }
      ],
      "PR_MODEM" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "CURRENT_VALUE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "dyn_line_color" : "Green",
               "line_color" : "Green",
               "poly_line_color" : "Green"
            }
         },
         {
            "condition" : {
               "comp_value" : "2",
               "data_value" : "CURRENT_VALUE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "dyn_line_color" : "Red",
               "line_color" : "Red",
               "poly_line_color" : "Red"
            }
         },
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "CURRENT_VALUE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "dyn_line_color" : "Pink",
               "line_color" : "Pink",
               "poly_line_color" : "Pink"
            }
         }
      ],
      "PR_NOT_UPDATED" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "UPDATED_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "rect_color" : "Pink"
            }
         }
      ],
      "PR_NW_SEC_STATE" : [
         {
            "condition" : {
               "comp_value" : "3",
               "data_value" : "PB_SECTION_STATE",
               "operator" : "!=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "visibility" : false
            }
         },
         {
            "condition" : {
               "comp_value" : "3",
               "data_value" : "PB_SECTION_STATE",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "visibility" : true
            }
         }
      ],
      "PR_ON_VISIBLE" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "CURRENT_VALUE",
               "expression_value" : "",
               "operator" : "!=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "visibility" : false
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "None",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "visibility" : true
            }
         }
      ],
      "PR_PB" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "CURRENT_VALUE",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "text_color" : "Green"
            }
         },
         {
            "condition" : {
               "comp_value" : "2",
               "data_value" : "CURRENT_VALUE",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "text_color" : "Red"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "UNACK_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : true
            }
         },
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "UPDATED_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "text_color" : "rgb(255,192,203)"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "BLOCKED_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "text_color" : "rgb(43,96,162)"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "MANUAL_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "text_color" : "rgb(43,96,162)"
            }
         }
      ],
      "PR_POWER_VISIBLE" : [
         {
            "condition" : {
               "comp_value" : "2",
               "data_value" : "CURRENT_VALUE",
               "operator" : "!=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "visibility" : false
            }
         }
      ],
      "PR_PRINTER" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "UNACK_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : true,
               "text_color" : "Red"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "PERSISTENT_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : false,
               "text_color" : "Yellow"
            }
         }
      ],
      "PR_RELAY_IND" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "CURRENT_VALUE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "circle_color" : "Red",
               "dyn_line_color" : "Red",
               "ellipse_color" : "Red",
               "line_color" : "Red",
               "poly_line_color" : "Red",
               "polygon_color" : "Red",
               "rect_color" : "Red",
               "text_color" : "White"
            }
         },
         {
            "condition" : {
               "comp_value" : "2",
               "data_value" : "CURRENT_VALUE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "circle_color" : "Green",
               "dyn_line_color" : "Green",
               "ellipse_color" : "Green",
               "line_color" : "Green",
               "poly_line_color" : "Green",
               "polygon_color" : "Green",
               "rect_color" : "Green",
               "text_color" : "White"
            }
         },
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "CURRENT_VALUE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "circle_color" : "Pink",
               "dyn_line_color" : "Pink",
               "ellipse_color" : "Pink",
               "line_color" : "Pink",
               "poly_line_color" : "Pink",
               "polygon_color" : "Pink",
               "rect_color" : "Pink",
               "text_color" : "White"
            }
         }
      ],
      "PR_RTU" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "INSERVICE",
               "operator" : "!=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "element_color" : "Brown",
               "text_blink" : true
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "OPERABLE",
               "operator" : "!=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "element_color" : "rgb(255,128,128)",
               "text_blink" : false
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "OPERABLE",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "element_color" : "rgb(0,147,0)",
               "text_blink" : false
            }
         }
      ],
      "PR_RTU_LR" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "CURRENT_VALUE",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "dyn_line_color" : "Green",
               "poly_line_color" : "Green"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "CURRENT_VALUE",
               "operator" : "!=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "dyn_line_color" : "Red",
               "poly_line_color" : "Red"
            }
         }
      ],
      "PR_RTU_OPR" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "OPERABLE",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "dyn_line_color" : "Green",
               "line_color" : "Green",
               "poly_line_color" : "Green"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "OPERABLE",
               "operator" : "!=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "dyn_line_color" : "Red",
               "line_color" : "Red",
               "poly_line_color" : "Red"
            }
         },
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "INSERVICE",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "element_color" : "Brown"
            }
         }
      ],
      "PR_SECTION_STATE" : [
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "NW_SECTION_STATE",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "dyn_line_color" : "rgb(255,192,203)",
               "line_color" : "rgb(255,192,203)",
               "poly_line_color" : "rgb(255,192,203)"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "NW_SECTION_STATE",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "dyn_line_color" : "rgb(213,81,71)",
               "line_color" : "rgb(213,81,71)",
               "poly_line_color" : "rgb(213,81,71)"
            }
         },
         {
            "condition" : {
               "comp_value" : "2",
               "data_value" : "NW_SECTION_STATE",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "dyn_line_color" : "rgb(55,124,62)",
               "line_color" : "rgb(55,124,62)",
               "poly_line_color" : "rgb(55,124,62)"
            }
         },
         {
            "condition" : {
               "comp_value" : "3",
               "data_value" : "NW_SECTION_STATE",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "dyn_line_color" : "rgb(226,184,80)",
               "line_color" : "rgb(226,184,80)",
               "poly_line_color" : "rgb(226,184,80)"
            }
         },
         {
            "condition" : {
               "comp_value" : "4",
               "data_value" : "None",
               "operator" : ">=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "dyn_line_color" : "rgb(55,124,62)",
               "line_color" : "rgb(55,124,62)",
               "poly_line_color" : "rgb(55,124,62)"
            }
         }
      ],
      "PR_SERVER_RUNMODE" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "RUN_MODE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "dyn_line_color" : "Green",
               "poly_line_color" : "Green",
               "polygon_color" : "Green",
               "rect_color" : "Green",
               "text_blink" : true,
               "text_color" : "Green"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "RUN_MODE",
               "expression_value" : "",
               "operator" : "!=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "dyn_line_color" : "Red",
               "poly_line_color" : "Red",
               "polygon_color" : "Red",
               "rect_color" : "Red",
               "text_blink" : false,
               "text_color" : "Red"
            }
         }
      ],
      "PR_SERVER_TIMESYNC" : [
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "TIMESYNC_STATUS",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : true,
               "text_color" : "Red"
            }
         }
      ],
      "PR_SETPOINT" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "UNACK_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : true,
               "text_color" : "Red"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "PERSISTENT_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : false,
               "text_color" : "Yellow"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "BLOCKED_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : false,
               "text_color" : "Blue"
            }
         }
      ],
      "PR_STRING_INPUT" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "INVALID_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : false,
               "text_color" : "Pink"
            }
         },
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "UPDATED_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : false,
               "text_color" : "Orange"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "UNACK_FLAG",
               "operator" : "None",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : true,
               "text_color" : "Red"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "PERSISTENT_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : false,
               "text_color" : "Yellow"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "BLOCKED_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : false,
               "text_color" : "Blue"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "MANUAL_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : false,
               "text_color" : "Sky Blue"
            }
         }
      ],
      "PR_STRING_OUTPUT" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "UNACK_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : true,
               "text_color" : "Red"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "PERSISTENT_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : false,
               "text_color" : "Yellow"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "BLOCKED_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_blink" : false,
               "text_color" : "Blue"
            }
         }
      ],
      "PR_SYMBOL" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "INVALID_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "element_color" : "Pink"
            }
         },
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "UPDATED_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "element_color" : "Orange"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "UNACK_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : true
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "PERSISTENT_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "element_color" : "Yellow"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "BLOCKED_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "element_color" : "Dark Blue"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "MANUAL_FLAG",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "element_color" : "Sky Blue"
            }
         }
      ],
      "PR_TCH" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "CURRENT_VALUE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "dyn_line_color" : "Green",
               "line_color" : "Green",
               "poly_line_color" : "Green"
            }
         },
         {
            "condition" : {
               "comp_value" : "2",
               "data_value" : "CURRENT_VALUE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "dyn_line_color" : "Red",
               "line_color" : "Red",
               "poly_line_color" : "Red"
            }
         },
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "CURRENT_VALUE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "dyn_line_color" : "Pink",
               "line_color" : "Pink",
               "poly_line_color" : "Pink"
            }
         }
      ],
      "PR_TCH_VISIBLE" : [
         {
            "condition" : {
               "comp_value" : "2",
               "data_value" : "CURRENT_VALUE",
               "expression_value" : "",
               "operator" : "!=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "visibility" : false
            }
         }
      ],
      "PR_TEXT_ONE" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "CURRENT_VALUE",
               "operator" : "!=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "visibility" : false
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "CURRENT_VALUE",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "text_color" : "rgb(10,185,10)",
               "visibility" : true
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "PERSISTENT_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "text_color" : "rgb(255,52,67)",
               "visibility" : true
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "BLOCKED_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "text_color" : "rgb(43,96,162)",
               "visibility" : true
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "MANUAL_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "text_color" : "rgb(43,96,162)",
               "visibility" : true
            }
         },
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "UPDATED_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "text_color" : "rgb(255,192,203)",
               "visibility" : true
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "UNACK_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : true,
               "visibility" : true
            }
         }
      ],
      "PR_TEXT_THREE" : [
         {
            "condition" : {
               "comp_value" : "3",
               "data_value" : "CURRENT_VALUE",
               "operator" : "!=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "visibility" : false
            }
         },
         {
            "condition" : {
               "comp_value" : "3",
               "data_value" : "CURRENT_VALUE",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "text_color" : "rgb(10,185,10)",
               "visibility" : true
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "PERSISTENT_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "text_color" : "rgb(255,52,67)",
               "visibility" : true
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "BLOCKED_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "text_color" : "Brown",
               "visibility" : true
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "MANUAL_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "text_color" : "Yellow",
               "visibility" : true
            }
         },
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "UPDATED_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "text_color" : "rgb(255,192,203)",
               "visibility" : true
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "UNACK_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : true,
               "visibility" : true
            }
         }
      ],
      "PR_TEXT_TWO" : [
         {
            "condition" : {
               "comp_value" : "2",
               "data_value" : "CURRENT_VALUE",
               "operator" : "!=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "visibility" : false
            }
         },
         {
            "condition" : {
               "comp_value" : "2",
               "data_value" : "CURRENT_VALUE",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "text_color" : "rgb(10,185,10)",
               "visibility" : true
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "PERSISTENT_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "text_color" : "rgb(255,52,67)",
               "visibility" : true
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "BLOCKED_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "text_color" : "rgb(43,96,162)",
               "visibility" : true
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "MANUAL_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "text_color" : "rgb(43,96,162)",
               "visibility" : true
            }
         },
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "UPDATED_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "text_color" : "rgb(255,192,203)",
               "visibility" : true
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "UNACK_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : true,
               "visibility" : true
            }
         }
      ],
      "PR_TEXT_ZERO" : [
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "CURRENT_VALUE",
               "operator" : "!=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "blink" : false,
               "visibility" : false
            }
         },
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "CURRENT_VALUE",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "text_color" : "rgb(10,185,10)",
               "visibility" : true
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "PERSISTENT_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "text_color" : "rgb(255,52,67)",
               "visibility" : true
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "BLOCKED_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "text_color" : "rgb(43,96,162)",
               "visibility" : true
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "MANUAL_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "text_color" : "rgb(43,96,162)",
               "visibility" : true
            }
         },
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "UPDATED_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : false,
               "text_color" : "rgb(255,192,203)",
               "visibility" : true
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "UNACK_FLAG",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "blink" : true,
               "visibility" : true
            }
         }
      ],
      "PR_TOPO_BLUE" : [
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "NW_SECTION_STATE",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "circle_color" : "Pink",
               "dyn_line_color" : "Pink",
               "element_color" : "Pink",
               "ellipse_color" : "Pink",
               "line_color" : "Pink",
               "poly_line_color" : "Pink",
               "polygon_color" : "Pink",
               "rect_color" : "Pink",
               "text_color" : "Pink"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "NW_SECTION_STATE",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "element_color" : "Aqua",
               "line_color" : "Aqua"
            }
         },
         {
            "condition" : {
               "comp_value" : "2",
               "data_value" : "NW_SECTION_STATE",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "circle_color" : "rgb(43,96,162)",
               "dyn_line_color" : "rgb(43,96,162)",
               "element_color" : "rgb(43,96,162)",
               "ellipse_color" : "rgb(43,96,162)",
               "line_color" : "rgb(43,96,162)",
               "poly_line_color" : "rgb(43,96,162)",
               "polygon_color" : "rgb(43,96,162)",
               "rect_color" : "rgb(43,96,162)",
               "text_color" : "rgb(43,96,162)"
            }
         },
         {
            "condition" : {
               "comp_value" : "3",
               "data_value" : "NW_SECTION_STATE",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "circle_color" : "White",
               "dyn_line_color" : "White",
               "element_color" : "White",
               "ellipse_color" : "White",
               "line_color" : "White",
               "poly_line_color" : "White",
               "polygon_color" : "White",
               "rect_color" : "White",
               "text_color" : "White"
            }
         },
         {
            "condition" : {
               "comp_value" : "3",
               "data_value" : "NW_SECTION_STATE",
               "operator" : ">",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "circle_color" : "rgb(43,96,162)",
               "dyn_line_color" : "rgb(43,96,162)",
               "element_color" : "rgb(43,96,162)",
               "ellipse_color" : "rgb(43,96,162)",
               "line_color" : "rgb(43,96,162)",
               "poly_line_color" : "rgb(43,96,162)",
               "polygon_color" : "rgb(43,96,162)",
               "rect_color" : "rgb(43,96,162)",
               "text_color" : "rgb(43,96,162)"
            }
         }
      ],
      "PR_TOPO_BROWN" : [
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "circle_color" : "Pink",
               "dyn_line_color" : "Pink",
               "element_color" : "Pink",
               "ellipse_color" : "Pink",
               "line_color" : "Pink",
               "poly_line_color" : "Pink",
               "polygon_color" : "Pink",
               "rect_color" : "Pink",
               "text_color" : "Pink"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "circle_color" : "White",
               "dyn_line_color" : "White",
               "element_color" : "White",
               "ellipse_color" : "White",
               "line_color" : "White",
               "poly_line_color" : "White",
               "poly_line_dashed" : true,
               "polygon_color" : "White",
               "rect_color" : "White",
               "text_color" : "White"
            }
         },
         {
            "condition" : {
               "comp_value" : "2",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "circle_color" : "Brown",
               "dyn_line_color" : "Brown",
               "element_color" : "Brown",
               "ellipse_color" : "Brown",
               "line_color" : "Brown",
               "poly_line_color" : "Brown",
               "polygon_color" : "Brown",
               "rect_color" : "Brown",
               "text_color" : "Brown"
            }
         },
         {
            "condition" : {
               "comp_value" : "3",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "circle_color" : "White",
               "dyn_line_color" : "White",
               "element_color" : "White",
               "ellipse_color" : "White",
               "line_color" : "White",
               "poly_line_color" : "White",
               "polygon_color" : "White",
               "rect_color" : "White",
               "text_color" : "White"
            }
         },
         {
            "condition" : {
               "comp_value" : "3",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : ">",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "circle_color" : "Brown",
               "dyn_line_color" : "Brown",
               "element_color" : "Brown",
               "ellipse_color" : "Brown",
               "line_color" : "Brown",
               "poly_line_color" : "Brown",
               "polygon_color" : "Brown",
               "rect_color" : "Brown",
               "text_color" : "Brown"
            }
         }
      ],
      "PR_TOPO_GREEN" : [
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "NW_SECTION_NAME",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "circle_color" : "Pink",
               "dyn_line_color" : "Pink",
               "element_color" : "Pink",
               "ellipse_color" : "Pink",
               "line_color" : "Pink",
               "poly_line_color" : "Pink",
               "polygon_color" : "Pink",
               "rect_color" : "Pink",
               "text_color" : "Pink"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "element_color" : "Red",
               "line_color" : "Red"
            }
         },
         {
            "condition" : {
               "comp_value" : "2",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "element_color" : "rgb(55, 124, 62)",
               "line_color" : "rgb(55, 124, 62)"
            }
         },
         {
            "condition" : {
               "comp_value" : "3",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "circle_color" : "Red",
               "dyn_line_color" : "Red",
               "element_color" : "Red",
               "ellipse_color" : "Red",
               "line_color" : "Red",
               "poly_line_color" : "Red",
               "polygon_color" : "Red",
               "rect_color" : "Red",
               "text_color" : "Red"
            }
         },
         {
            "condition" : {
               "comp_value" : "3",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : ">",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "circle_color" : "rgb(55, 124, 62)",
               "dyn_line_color" : "rgb(55, 124, 62)",
               "element_color" : "rgb(55, 124, 62)",
               "ellipse_color" : "rgb(55, 124, 62)",
               "line_color" : "rgb(55, 124, 62)",
               "poly_line_color" : "rgb(55, 124, 62)",
               "polygon_color" : "rgb(55, 124, 62)",
               "rect_color" : "rgb(55, 124, 62)",
               "text_color" : "rgb(55, 124, 62)"
            }
         }
      ],
      "PR_TOPO_MEG" : [
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "NW_SECTION_STATE",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "circle_color" : "Pink",
               "dyn_line_color" : "Pink",
               "element_color" : "Pink",
               "ellipse_color" : "Pink",
               "line_color" : "Pink",
               "poly_line_color" : "Pink",
               "polygon_color" : "Pink",
               "rect_color" : "Pink",
               "text_color" : "Pink"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "NW_SECTION_STATE",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "circle_color" : "White",
               "dyn_line_color" : "White",
               "element_color" : "White",
               "ellipse_color" : "White",
               "line_color" : "White",
               "poly_line_color" : "White",
               "poly_line_dashed" : true,
               "polygon_color" : "White",
               "rect_color" : "White",
               "text_color" : "White"
            }
         },
         {
            "condition" : {
               "comp_value" : "2",
               "data_value" : "NW_SECTION_STATE",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "circle_color" : "rgb(255,0,255)",
               "dyn_line_color" : "rgb(255,0,255)",
               "element_color" : "rgb(255,0,255)",
               "ellipse_color" : "rgb(255,0,255)",
               "line_color" : "rgb(255,0,255)",
               "poly_line_color" : "rgb(255,0,255)",
               "polygon_color" : "rgb(255,0,255)",
               "rect_color" : "rgb(255,0,255)",
               "text_color" : "rgb(255,0,255)"
            }
         },
         {
            "condition" : {
               "comp_value" : "3",
               "data_value" : "NW_SECTION_STATE",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "circle_color" : "White",
               "dyn_line_color" : "White",
               "element_color" : "White",
               "ellipse_color" : "White",
               "line_color" : "White",
               "poly_line_color" : "White",
               "polygon_color" : "White",
               "rect_color" : "White",
               "text_color" : "White"
            }
         },
         {
            "condition" : {
               "comp_value" : "3",
               "data_value" : "NW_SECTION_STATE",
               "operator" : ">",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "circle_color" : "rgb(255,0,255)",
               "dyn_line_color" : "rgb(255,0,255)",
               "element_color" : "rgb(255,0,255)",
               "ellipse_color" : "rgb(255,0,255)",
               "line_color" : "rgb(255,0,255)",
               "poly_line_color" : "rgb(255,0,255)",
               "polygon_color" : "rgb(255,0,255)",
               "rect_color" : "rgb(255,0,255)",
               "text_color" : "rgb(255,0,255)"
            }
         }
      ],
      "PR_TOPO_NEG" : [
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "NW_SECTION_STATE",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "circle_color" : "rgb(255,192,203)",
               "dyn_line_color" : "rgb(255,192,203)",
               "ellipse_color" : "rgb(255,192,203)",
               "line_color" : "rgb(255,192,203)",
               "poly_line_color" : "rgb(255,192,203)",
               "polygon_color" : "rgb(255,192,203)",
               "rect_color" : "rgb(255,192,203)",
               "text_color" : "rgb(255,192,203)"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "NW_SECTION_STATE",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "circle_color" : "rgb(213,81,71)",
               "dyn_line_color" : "rgb(213,81,71)",
               "ellipse_color" : "rgb(213,81,71)",
               "line_color" : "rgb(213,81,71)",
               "poly_line_color" : "rgb(213,81,71)",
               "polygon_color" : "rgb(213,81,71)",
               "rect_color" : "rgb(213,81,71)",
               "text_color" : "rgb(213,81,71)"
            }
         },
         {
            "condition" : {
               "comp_value" : "2",
               "data_value" : "NW_SECTION_STATE",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "circle_color" : "rgb(167,222,124)",
               "dyn_line_color" : "rgb(167,222,124)",
               "ellipse_color" : "rgb(167,222,124)",
               "line_color" : "rgb(167,222,124)",
               "poly_line_color" : "rgb(167,222,124)",
               "polygon_color" : "rgb(167,222,124)",
               "rect_color" : "rgb(167,222,124)",
               "text_color" : "rgb(167,222,124)"
            }
         },
         {
            "condition" : {
               "comp_value" : "4",
               "data_value" : "NW_SECTION_STATE",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "circle_color" : "rgb(226,184,80)",
               "dyn_line_color" : "rgb(226,184,80)",
               "ellipse_color" : "rgb(226,184,80)",
               "line_color" : "rgb(226,184,80)",
               "poly_line_color" : "rgb(226,184,80)",
               "polygon_color" : "rgb(226,184,80)",
               "rect_color" : "rgb(226,184,80)",
               "text_color" : "rgb(226,184,80)"
            }
         },
         {
            "condition" : {
               "comp_value" : "4",
               "data_value" : "NW_SECTION_STATE",
               "operator" : ">",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "circle_color" : "rgb(55,124,62)",
               "dyn_line_color" : "rgb(55,124,62)",
               "ellipse_color" : "rgb(55,124,62)",
               "line_color" : "rgb(55,124,62)",
               "poly_line_color" : "rgb(55,124,62)",
               "polygon_color" : "rgb(55,124,62)",
               "rect_color" : "rgb(55,124,62)",
               "text_color" : "rgb(55,124,62)"
            }
         },
         {
            "condition" : {
               "comp_value" : "3",
               "data_value" : "NW_SECTION_STATE",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "circle_color" : "rgb(55,124,62)",
               "dyn_line_color" : "rgb(55,124,62)",
               "ellipse_color" : "rgb(55,124,62)",
               "line_color" : "rgb(55,124,62)",
               "poly_line_color" : "rgb(55,124,62)",
               "polygon_color" : "rgb(55,124,62)",
               "rect_color" : "rgb(55,124,62)",
               "text_color" : "rgb(55,124,62)"
            }
         },
         {
            "condition" : {
               "comp_value" : "101",
               "data_value" : "NW_SECTION_STATE",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "circle_color" : "rgb(255,192,203)",
               "dyn_line_color" : "rgb(255,192,203)",
               "element_color" : "rgb(255,192,203)",
               "ellipse_color" : "rgb(255,192,203)",
               "line_color" : "rgb(255,192,203)",
               "poly_line_color" : "rgb(255,192,203)",
               "polygon_color" : "rgb(255,192,203)",
               "rect_color" : "rgb(255,192,203)",
               "text_color" : "rgb(255,192,203)"
            }
         },
         {
            "condition" : {
               "comp_value" : "102",
               "data_value" : "None",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "circle_color" : "rgb(213,81,71)",
               "dyn_line_color" : "rgb(213,81,71)",
               "element_color" : "rgb(213,81,71)",
               "ellipse_color" : "rgb(213,81,71)",
               "line_color" : "rgb(213,81,71)",
               "poly_line_color" : "rgb(213,81,71)",
               "polygon_color" : "rgb(213,81,71)",
               "rect_color" : "rgb(213,81,71)",
               "text_color" : "rgb(213,81,71)"
            }
         },
         {
            "condition" : {
               "comp_value" : "103",
               "data_value" : "None",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "circle_color" : "rgb(215,127,57)",
               "dyn_line_color" : "rgb(215,127,57)",
               "element_color" : "rgb(215,127,57)",
               "ellipse_color" : "rgb(215,127,57)",
               "line_color" : "rgb(215,127,57)",
               "poly_line_color" : "rgb(215,127,57)",
               "polygon_color" : "rgb(215,127,57)",
               "rect_color" : "rgb(215,127,57)",
               "text_color" : "rgb(215,127,57)"
            }
         },
         {
            "condition" : {
               "comp_value" : "104",
               "data_value" : "None",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "circle_color" : "rgb(55,124,62)",
               "dyn_line_color" : "rgb(55,124,62)",
               "element_color" : "rgb(55,124,62)",
               "ellipse_color" : "rgb(55,124,62)",
               "line_color" : "rgb(55,124,62)",
               "poly_line_color" : "rgb(55,124,62)",
               "polygon_color" : "rgb(55,124,62)",
               "rect_color" : "rgb(55,124,62)",
               "text_color" : "rgb(55,124,62)"
            }
         }
      ],
      "PR_TOPO_RED" : [
         {
            "condition" : {
               "comp_value" : "2",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "circle_color" : "rgb(213, 81, 71)",
               "dyn_line_color" : "rgb(213, 81, 71)",
               "element_color" : "rgb(213, 81, 71)",
               "ellipse_color" : "rgb(213, 81, 71)",
               "line_color" : "rgb(213, 81, 71)",
               "poly_line_color" : "rgb(213, 81, 71)",
               "polygon_color" : "rgb(213, 81, 71)",
               "rect_color" : "rgb(213, 81, 71)",
               "text_color" : "rgb(213, 81, 71)"
            }
         },
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "circle_color" : "Pink",
               "dyn_line_color" : "Pink",
               "element_color" : "Pink",
               "ellipse_color" : "Pink",
               "line_color" : "Pink",
               "poly_line_color" : "Pink",
               "polygon_color" : "Pink",
               "rect_color" : "Pink",
               "text_color" : "Pink"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "element_color" : "White",
               "line_color" : "White",
               "poly_line_color" : "White",
               "poly_line_dashed" : true
            }
         },
         {
            "condition" : {
               "comp_value" : "3",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "circle_color" : "White",
               "dyn_line_color" : "White",
               "element_color" : "White",
               "ellipse_color" : "White",
               "line_color" : "White",
               "poly_line_color" : "White",
               "polygon_color" : "White",
               "rect_color" : "White",
               "text_color" : "White"
            }
         },
         {
            "condition" : {
               "comp_value" : "3",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : ">",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "circle_color" : "rgb(213, 81, 71)",
               "dyn_line_color" : "rgb(213, 81, 71)",
               "element_color" : "rgb(213, 81, 71)",
               "ellipse_color" : "rgb(213, 81, 71)",
               "line_color" : "rgb(213, 81, 71)",
               "poly_line_color" : "rgb(213, 81, 71)",
               "polygon_color" : "rgb(213, 81, 71)",
               "rect_color" : "rgb(213, 81, 71)",
               "text_color" : "rgb(213, 81, 71)"
            }
         }
      ],
      "PR_TOPO_SECTION" : [
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "circle_color" : "rgb(255,192,203)",
               "dyn_line_color" : "rgb(255,192,203)",
               "ellipse_color" : "rgb(255,192,203)",
               "line_color" : "rgb(255,192,203)",
               "poly_line_color" : "rgb(255,192,203)",
               "polygon_color" : "rgb(255,192,203)",
               "rect_color" : "rgb(255,192,203)",
               "text_color" : "rgb(255,192,203)"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "circle_color" : "rgb(213,81,71)",
               "dyn_line_color" : "rgb(213,81,71)",
               "ellipse_color" : "rgb(213,81,71)",
               "line_color" : "rgb(213,81,71)",
               "poly_line_color" : "rgb(213,81,71)",
               "polygon_color" : "rgb(213,81,71)",
               "rect_color" : "rgb(213,81,71)",
               "text_color" : "rgb(213,81,71)"
            }
         },
         {
            "condition" : {
               "comp_value" : "2",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "circle_color" : "rgb(55,124,62)",
               "dyn_line_color" : "rgb(55,124,62)",
               "ellipse_color" : "rgb(55,124,62)",
               "line_color" : "rgb(55,124,62)",
               "poly_line_color" : "rgb(55,124,62)",
               "polygon_color" : "rgb(55,124,62)",
               "rect_color" : "rgb(55,124,62)",
               "text_color" : "rgb(55,124,62)"
            }
         },
         {
            "condition" : {
               "comp_value" : "4",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "circle_color" : "rgb(252,136,239)",
               "dyn_line_color" : "rgb(252,136,239)",
               "ellipse_color" : "rgb(252,136,239)",
               "line_color" : "rgb(252,136,239)",
               "poly_line_color" : "rgb(252,136,239)",
               "polygon_color" : "rgb(252,136,239)",
               "rect_color" : "rgb(252,136,239)",
               "text_color" : "rgb(252,136,239)"
            }
         },
         {
            "condition" : {
               "comp_value" : "4",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : ">",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "circle_color" : "rgb(55,124,62)",
               "dyn_line_color" : "rgb(55,124,62)",
               "ellipse_color" : "rgb(55,124,62)",
               "line_color" : "rgb(55,124,62)",
               "poly_line_color" : "rgb(55,124,62)",
               "polygon_color" : "rgb(55,124,62)",
               "rect_color" : "rgb(55,124,62)",
               "text_color" : "rgb(55,124,62)"
            }
         },
         {
            "condition" : {
               "comp_value" : "3",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "circle_color" : "rgb(226,184,80)",
               "dyn_line_color" : "rgb(226,184,80)",
               "ellipse_color" : "rgb(226,184,80)",
               "line_color" : "rgb(226,184,80)",
               "poly_line_color" : "rgb(226,184,80)",
               "polygon_color" : "rgb(226,184,80)",
               "rect_color" : "rgb(226,184,80)",
               "text_color" : "rgb(226,184,80)"
            }
         },
         {
            "condition" : {
               "comp_value" : "101",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "circle_color" : "rgb(255,192,203)",
               "dyn_line_color" : "rgb(255,192,203)",
               "element_color" : "rgb(255,192,203)",
               "ellipse_color" : "rgb(255,192,203)",
               "line_color" : "rgb(255,192,203)",
               "poly_line_color" : "rgb(255,192,203)",
               "polygon_color" : "rgb(255,192,203)",
               "rect_color" : "rgb(255,192,203)",
               "text_color" : "rgb(255,192,203)"
            }
         },
         {
            "condition" : {
               "comp_value" : "102",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "circle_color" : "rgb(213,81,71)",
               "dyn_line_color" : "rgb(213,81,71)",
               "element_color" : "rgb(213,81,71)",
               "ellipse_color" : "rgb(213,81,71)",
               "line_color" : "rgb(213,81,71)",
               "poly_line_color" : "rgb(213,81,71)",
               "polygon_color" : "rgb(213,81,71)",
               "rect_color" : "rgb(213,81,71)",
               "text_color" : "rgb(213,81,71)"
            }
         },
         {
            "condition" : {
               "comp_value" : "103",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "circle_color" : "rgb(215,127,57)",
               "dyn_line_color" : "rgb(215,127,57)",
               "element_color" : "rgb(215,127,57)",
               "ellipse_color" : "rgb(215,127,57)",
               "line_color" : "rgb(215,127,57)",
               "poly_line_color" : "rgb(215,127,57)",
               "polygon_color" : "rgb(215,127,57)",
               "rect_color" : "rgb(215,127,57)",
               "text_color" : "rgb(215,127,57)"
            }
         },
         {
            "condition" : {
               "comp_value" : "104",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "circle_color" : "rgb(55,124,62)",
               "dyn_line_color" : "rgb(55,124,62)",
               "element_color" : "rgb(55,124,62)",
               "ellipse_color" : "rgb(55,124,62)",
               "line_color" : "rgb(55,124,62)",
               "poly_line_color" : "rgb(55,124,62)",
               "polygon_color" : "rgb(55,124,62)",
               "rect_color" : "rgb(55,124,62)",
               "text_color" : "rgb(55,124,62)"
            }
         }
      ],
      "PR_TOPO_TEST" : [
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "element_color" : "Indigo"
            }
         },
         {
            "condition" : {
               "comp_value" : "2",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "element_color" : "Red"
            }
         }
      ],
      "PR_TOPO_YELL" : [
         {
            "condition" : {
               "comp_value" : "0",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "circle_color" : "Pink",
               "dyn_line_color" : "Pink",
               "element_color" : "Pink",
               "ellipse_color" : "Pink",
               "line_color" : "Pink",
               "poly_line_color" : "Pink",
               "polygon_color" : "Pink",
               "rect_color" : "Pink",
               "text_color" : "Pink"
            }
         },
         {
            "condition" : {
               "comp_value" : "1",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : true
            },
            "presentation" : {
               "circle_color" : "White",
               "dyn_line_color" : "White",
               "element_color" : "White",
               "ellipse_color" : "White",
               "line_color" : "White",
               "poly_line_color" : "White",
               "poly_line_dashed" : true,
               "polygon_color" : "White",
               "rect_color" : "White",
               "text_color" : "White"
            }
         },
         {
            "condition" : {
               "comp_value" : "2",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "circle_color" : "rgb(255,255,0)",
               "dyn_line_color" : "rgb(255,255,0)",
               "element_color" : "rgb(255,255,0)",
               "ellipse_color" : "rgb(255,255,0)",
               "line_color" : "rgb(255,255,0)",
               "poly_line_color" : "rgb(255,255,0)",
               "polygon_color" : "rgb(255,255,0)",
               "rect_color" : "rgb(255,255,0)",
               "text_color" : "rgb(255,255,0)"
            }
         },
         {
            "condition" : {
               "comp_value" : "3",
               "data_value" : "NW_SECTION_NAME",
               "expression_value" : "",
               "operator" : "=",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "circle_color" : "White",
               "dyn_line_color" : "White",
               "element_color" : "White",
               "ellipse_color" : "White",
               "line_color" : "White",
               "poly_line_color" : "White",
               "polygon_color" : "White",
               "rect_color" : "White",
               "text_color" : "White"
            }
         },
         {
            "condition" : {
               "comp_value" : "3",
               "data_value" : "NW_SECTION_STATE",
               "expression_value" : "",
               "operator" : ">",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "circle_color" : "rgb(255,255,0)",
               "dyn_line_color" : "rgb(255,255,0)",
               "element_color" : "rgb(255,255,0)",
               "ellipse_color" : "rgb(255,255,0)",
               "line_color" : "rgb(255,255,0)",
               "poly_line_color" : "rgb(255,255,0)",
               "polygon_color" : "rgb(255,255,0)",
               "rect_color" : "rgb(255,255,0)",
               "text_color" : "rgb(255,255,0)"
            }
         }
      ],
      "pr_test_meas" : [
         {
            "condition" : {
               "comp_value" : "40",
               "data_value" : "CURRENT_VALUE",
               "expression_value" : "",
               "operator" : ">",
               "stop_if_evaluated" : false
            },
            "presentation" : {
               "text_color" : "Gold"
            }
         }
      ]
   },
   "PresentationRuleTable" : {
      "InfoCommandOff" : "COMMAND",
      "InfoCommandOn" : "COMMAND",
      "PR_ACCUMULATOR" : "ACCUMULATOR",
      "PR_ALARM" : "ALARM",
      "PR_AR_VISIBLE" : "INDICATION",
      "PR_BLOCK" : "INDICATION",
      "PR_BM_RULE" : "INDICATION",
      "PR_CAT" : "INDICATION",
      "PR_CAT_N" : "INDICATION",
      "PR_CMD_LIST" : "COMMAND",
      "PR_CMD_VISIBLE" : "COMMAND",
      "PR_COMLINE" : "COMLINE",
      "PR_COMMAND" : "COMMAND",
      "PR_DI_LIST" : "INDICATION",
      "PR_DOOR_SLD" : "INDICATION",
      "PR_EPR" : "ACCUMULATOR",
      "PR_EVENT" : "EVENT",
      "PR_FEP_HDR" : "FRONTEND",
      "PR_FRONT_END" : "FRONTEND",
      "PR_HDS_MOD" : "HDS_CONFIG_TABLE",
      "PR_HTR_GEN" : "HOOTER",
      "PR_INDICATION" : "INDICATION",
      "PR_IND_LIST" : "INDICATION",
      "PR_IND_TEST" : "INDICATION",
      "PR_IND_TESTT" : "INDICATION",
      "PR_IR" : "ACCUMULATOR",
      "PR_KVAR_DOWN" : "MEASURAND",
      "PR_KVAR_UP" : "MEASURAND",
      "PR_LEG_BLOCK" : "INDICATION",
      "PR_LEG_NOT_UPDATE" : "INDICATION",
      "PR_LEG_UNACK" : "INDICATION",
      "PR_LR_IND" : "INDICATION",
      "PR_MANUAL" : "INDICATION",
      "PR_MEASURAND" : "MEASURAND",
      "PR_MEAS_LIST" : "MEASURAND",
      "PR_MEAS_SLD" : "MEASURAND",
      "PR_MEAS_UNACK" : "MEASURAND",
      "PR_MMI" : "MMI",
      "PR_MODEM" : "INDICATION",
      "PR_NOT_UPDATED" : "INDICATION",
      "PR_NW_SEC_STATE" : "TOPO_SECTION_TABLE",
      "PR_ON_VISIBLE" : "INDICATION",
      "PR_PB" : "INDICATION",
      "PR_POWER_VISIBLE" : "INDICATION",
      "PR_PRINTER" : "PRINTER",
      "PR_RELAY_IND" : "INDICATION",
      "PR_RTU" : "RTU",
      "PR_RTU_LR" : "INDICATION",
      "PR_RTU_OPR" : "RTU",
      "PR_SECTION_STATE" : "TOPO_SECTION_TABLE",
      "PR_SERVER_RUNMODE" : "SERVER_PEERS",
      "PR_SERVER_TIMESYNC" : "SERVER_PEERS",
      "PR_SETPOINT" : "SETPOINT",
      "PR_STRING_INPUT" : "STRINGINPUT",
      "PR_STRING_OUTPUT" : "STRINGOUTPUT",
      "PR_SYMBOL" : "INDICATION",
      "PR_TCH" : "INDICATION",
      "PR_TCH_VISIBLE" : "INDICATION",
      "PR_TEXT_ONE" : "INDICATION",
      "PR_TEXT_THREE" : "INDICATION",
      "PR_TEXT_TWO" : "INDICATION",
      "PR_TEXT_ZERO" : "INDICATION",
      "PR_TOPO_BLUE" : "TOPO_SECTION_TABLE",
      "PR_TOPO_BROWN" : "TOPO_SECTION_TABLE",
      "PR_TOPO_GREEN" : "TOPO_SECTION_TABLE",
      "PR_TOPO_MEG" : "TOPO_SECTION_TABLE",
      "PR_TOPO_NEG" : "TOPO_SECTION_TABLE",
      "PR_TOPO_RED" : "TOPO_SECTION_TABLE",
      "PR_TOPO_SECTION" : "TOPO_SECTION_TABLE",
      "PR_TOPO_TEST" : "TOPO_SECTION_TABLE",
      "PR_TOPO_YELL" : "TOPO_SECTION_TABLE",
      "pr_test_meas" : "MEASURAND"
   },
   "StaticSymbolTable" : {
      "Symtab_136" : [
         "\n<rect class=\"S_0\" bbox=\"34,31,332,339\" layer=\"0,0,0,0\" x=\"34\" y=\"31\" rx=\"0\" ry=\"0\" width=\"332\" height=\"339\" fill=\"rgb(225,225,225)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"43,39,315,322\" layer=\"0,0,0,0\" x=\"43\" y=\"39\" rx=\"0\" ry=\"0\" width=\"315\" height=\"322\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"241,286,96,49\" layer=\"0,0,0,0\" x=\"241\" y=\"286\" rx=\"0\" ry=\"0\" width=\"96\" height=\"49\" fill=\"rgb(255,255,255)\" opacity=\"1\" transform=\"rotate(0,289,310)\"></rect>\n<rect class=\"S_0\" bbox=\"65,288,161,41\" layer=\"0,0,0,0\" x=\"65\" y=\"288\" rx=\"0\" ry=\"0\" width=\"161\" height=\"41\" fill=\"rgb(255,255,255)\" opacity=\"1\" transform=\"rotate(0,145,308)\"></rect>\n<rect class=\"S_0\" bbox=\"72,149,257,100\" layer=\"0,0,0,0\" x=\"72\" y=\"149\" rx=\"0\" ry=\"0\" width=\"257\" height=\"100\" fill=\"rgb(165,42,0)\" opacity=\"1\" transform=\"rotate(0,200,199)\"></rect>\n<rect class=\"S_0\" bbox=\"74,70,254,41\" layer=\"0,0,0,0\" x=\"74\" y=\"70\" rx=\"0\" ry=\"0\" width=\"254\" height=\"41\" fill=\"rgb(255,255,255)\" opacity=\"1\" transform=\"rotate(0,201,90)\"></rect>\n<line class=\"S_0\" bbox=\"330,60,0,64\" layer=\"0,0,0,0\" x1=\"330\" y1=\"60\" x2=\"330\" y2=\"124\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"342,278,0,64\" layer=\"0,0,0,0\" x1=\"342\" y1=\"278\" x2=\"342\" y2=\"342\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<rect class=\"S_0\" bbox=\"242,285,96,50\" layer=\"0,0,0,0\" x=\"242\" y=\"285\" rx=\"0\" ry=\"0\" width=\"96\" height=\"50\" fill=\"transparent\" opacity=\"1\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,290,310)\"></rect>\n<line class=\"S_0\" bbox=\"238,278,0,64\" layer=\"0,0,0,0\" x1=\"238\" y1=\"278\" x2=\"238\" y2=\"342\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"142,288,0,44\" layer=\"0,0,0,0\" x1=\"142\" y1=\"288\" x2=\"142\" y2=\"332\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"290,289,0,44\" layer=\"0,0,0,0\" x1=\"290\" y1=\"289\" x2=\"290\" y2=\"333\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"182,289,0,44\" layer=\"0,0,0,0\" x1=\"182\" y1=\"289\" x2=\"182\" y2=\"333\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"101,289,0,44\" layer=\"0,0,0,0\" x1=\"101\" y1=\"289\" x2=\"101\" y2=\"333\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"224,278,0,64\" layer=\"0,0,0,0\" x1=\"224\" y1=\"278\" x2=\"224\" y2=\"342\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"61,278,0,64\" layer=\"0,0,0,0\" x1=\"61\" y1=\"278\" x2=\"61\" y2=\"342\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<rect class=\"S_0\" bbox=\"61,285,163,50\" layer=\"0,0,0,0\" x=\"61\" y=\"285\" rx=\"0\" ry=\"0\" width=\"163\" height=\"50\" fill=\"transparent\" opacity=\"1\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,142,310)\"></rect>\n<rect class=\"S_0\" bbox=\"70,149,260,100\" layer=\"0,0,0,0\" x=\"70\" y=\"149\" rx=\"0\" ry=\"0\" width=\"260\" height=\"100\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,199)\"></rect>\n<line class=\"S_0\" bbox=\"150,70,0,44\" layer=\"0,0,0,0\" x1=\"150\" y1=\"70\" x2=\"150\" y2=\"114\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"289,71,0,44\" layer=\"0,0,0,0\" x1=\"289\" y1=\"71\" x2=\"289\" y2=\"115\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"245,68,0,44\" layer=\"0,0,0,0\" x1=\"245\" y1=\"68\" x2=\"245\" y2=\"112\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"200,71,0,44\" layer=\"0,0,0,0\" x1=\"200\" y1=\"71\" x2=\"200\" y2=\"115\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"110,71,0,44\" layer=\"0,0,0,0\" x1=\"110\" y1=\"71\" x2=\"110\" y2=\"115\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"70,60,0,64\" layer=\"0,0,0,0\" x1=\"70\" y1=\"60\" x2=\"70\" y2=\"124\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<rect class=\"S_0\" bbox=\"70,67,260,50\" layer=\"0,0,0,0\" x=\"70\" y=\"67\" rx=\"0\" ry=\"0\" width=\"260\" height=\"50\" fill=\"transparent\" opacity=\"1\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,92)\"></rect>"
      ],
      "Symtab_138" : [
         "\n<rect class=\"S_0\" bbox=\"34,31,332,339\" layer=\"0,0,0,0\" x=\"34\" y=\"31\" rx=\"0\" ry=\"0\" width=\"332\" height=\"339\" fill=\"rgb(225,225,225)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"43,39,315,322\" layer=\"0,0,0,0\" x=\"43\" y=\"39\" rx=\"0\" ry=\"0\" width=\"315\" height=\"322\" fill=\"rgb(0,147,0)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"241,286,96,49\" layer=\"0,0,0,0\" x=\"241\" y=\"286\" rx=\"0\" ry=\"0\" width=\"96\" height=\"49\" fill=\"rgb(255,255,255)\" opacity=\"1\" transform=\"rotate(0,289,310)\"></rect>\n<rect class=\"S_0\" bbox=\"65,288,161,41\" layer=\"0,0,0,0\" x=\"65\" y=\"288\" rx=\"0\" ry=\"0\" width=\"161\" height=\"41\" fill=\"rgb(255,255,255)\" opacity=\"1\" transform=\"rotate(0,145,308)\"></rect>\n<rect class=\"S_0\" bbox=\"72,149,257,100\" layer=\"0,0,0,0\" x=\"72\" y=\"149\" rx=\"0\" ry=\"0\" width=\"257\" height=\"100\" fill=\"rgb(165,42,0)\" opacity=\"1\" transform=\"rotate(0,200,199)\"></rect>\n<rect class=\"S_0\" bbox=\"74,70,254,41\" layer=\"0,0,0,0\" x=\"74\" y=\"70\" rx=\"0\" ry=\"0\" width=\"254\" height=\"41\" fill=\"rgb(255,255,255)\" opacity=\"1\" transform=\"rotate(0,201,90)\"></rect>\n<line class=\"S_0\" bbox=\"330,60,0,64\" layer=\"0,0,0,0\" x1=\"330\" y1=\"60\" x2=\"330\" y2=\"124\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"342,278,0,64\" layer=\"0,0,0,0\" x1=\"342\" y1=\"278\" x2=\"342\" y2=\"342\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<rect class=\"S_0\" bbox=\"242,285,96,50\" layer=\"0,0,0,0\" x=\"242\" y=\"285\" rx=\"0\" ry=\"0\" width=\"96\" height=\"50\" fill=\"transparent\" opacity=\"1\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,290,310)\"></rect>\n<line class=\"S_0\" bbox=\"238,278,0,64\" layer=\"0,0,0,0\" x1=\"238\" y1=\"278\" x2=\"238\" y2=\"342\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"142,288,0,44\" layer=\"0,0,0,0\" x1=\"142\" y1=\"288\" x2=\"142\" y2=\"332\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"290,289,0,44\" layer=\"0,0,0,0\" x1=\"290\" y1=\"289\" x2=\"290\" y2=\"333\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"182,289,0,44\" layer=\"0,0,0,0\" x1=\"182\" y1=\"289\" x2=\"182\" y2=\"333\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"101,289,0,44\" layer=\"0,0,0,0\" x1=\"101\" y1=\"289\" x2=\"101\" y2=\"333\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"224,278,0,64\" layer=\"0,0,0,0\" x1=\"224\" y1=\"278\" x2=\"224\" y2=\"342\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"61,278,0,64\" layer=\"0,0,0,0\" x1=\"61\" y1=\"278\" x2=\"61\" y2=\"342\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<rect class=\"S_0\" bbox=\"61,285,163,50\" layer=\"0,0,0,0\" x=\"61\" y=\"285\" rx=\"0\" ry=\"0\" width=\"163\" height=\"50\" fill=\"transparent\" opacity=\"1\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,142,310)\"></rect>\n<rect class=\"S_0\" bbox=\"70,149,260,100\" layer=\"0,0,0,0\" x=\"70\" y=\"149\" rx=\"0\" ry=\"0\" width=\"260\" height=\"100\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,199)\"></rect>\n<line class=\"S_0\" bbox=\"150,70,0,44\" layer=\"0,0,0,0\" x1=\"150\" y1=\"70\" x2=\"150\" y2=\"114\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"289,71,0,44\" layer=\"0,0,0,0\" x1=\"289\" y1=\"71\" x2=\"289\" y2=\"115\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"245,68,0,44\" layer=\"0,0,0,0\" x1=\"245\" y1=\"68\" x2=\"245\" y2=\"112\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"200,71,0,44\" layer=\"0,0,0,0\" x1=\"200\" y1=\"71\" x2=\"200\" y2=\"115\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"110,71,0,44\" layer=\"0,0,0,0\" x1=\"110\" y1=\"71\" x2=\"110\" y2=\"115\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"70,60,0,64\" layer=\"0,0,0,0\" x1=\"70\" y1=\"60\" x2=\"70\" y2=\"124\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<rect class=\"S_0\" bbox=\"70,67,260,50\" layer=\"0,0,0,0\" x=\"70\" y=\"67\" rx=\"0\" ry=\"0\" width=\"260\" height=\"50\" fill=\"transparent\" opacity=\"1\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,92)\"></rect>"
      ],
      "Symtab_144" : [
         "\n<rect class=\"S_0\" bbox=\"34,31,332,339\" layer=\"0,0,0,0\" x=\"34\" y=\"31\" rx=\"0\" ry=\"0\" width=\"332\" height=\"339\" fill=\"rgb(201,190,180)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"53,51,294,298\" layer=\"0,0,0,0\" x=\"53\" y=\"51\" rx=\"0\" ry=\"0\" width=\"294\" height=\"298\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"64,60,271,30\" layer=\"0,0,0,0\" x=\"64\" y=\"60\" rx=\"0\" ry=\"0\" width=\"271\" height=\"30\" fill=\"rgb(5,104,138)\" opacity=\"1\" transform=\"rotate(0,199,75)\"></rect>\n<rect class=\"S_0\" bbox=\"77,110,247,85\" layer=\"0,0,0,0\" x=\"77\" y=\"110\" rx=\"0\" ry=\"0\" width=\"247\" height=\"85\" fill=\"rgb(132,197,76)\" opacity=\"1\" transform=\"rotate(0,200,152)\"></rect>\n<text class=\"S_0\" bbox=\"81,177,190,64\" text-anchor=\"start\" pointer-events=\"none\" layer=\"0,0,0,0\" x=\"81\" y=\"177\" fill=\"rgb(0,0,0)\" opacity=\"1\" font-size=\"48pt\" font-family=\"LCD ITC-Normal \" font-weight=\"400\" font-style=\"normal\" transform=\"rotate(0,81,177)\">&#49;&#51;&#50;&#46;&#53;</text>\n\n<rect class=\"S_0\" bbox=\"76,276,43,43\" layer=\"0,0,0,0\" x=\"76\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,97,297)\"></rect>\n<rect class=\"S_0\" bbox=\"79,279,37,37\" layer=\"0,0,0,0\" x=\"79\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,97,297)\"></rect>\n<rect class=\"S_0\" bbox=\"126,276,43,43\" layer=\"0,0,0,0\" x=\"126\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,147,297)\"></rect>\n<rect class=\"S_0\" bbox=\"129,279,37,37\" layer=\"0,0,0,0\" x=\"129\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,147,297)\"></rect>\n<rect class=\"S_0\" bbox=\"175,276,43,43\" layer=\"0,0,0,0\" x=\"175\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,196,297)\"></rect>\n<rect class=\"S_0\" bbox=\"178,279,37,37\" layer=\"0,0,0,0\" x=\"178\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,196,297)\"></rect>\n<rect class=\"S_0\" bbox=\"225,276,43,43\" layer=\"0,0,0,0\" x=\"225\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,246,297)\"></rect>\n<rect class=\"S_0\" bbox=\"228,279,37,37\" layer=\"0,0,0,0\" x=\"228\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,246,297)\"></rect>\n<rect class=\"S_0\" bbox=\"275,276,43,43\" layer=\"0,0,0,0\" x=\"275\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,296,297)\"></rect>\n<rect class=\"S_0\" bbox=\"278,279,37,37\" layer=\"0,0,0,0\" x=\"278\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,296,297)\"></rect>"
      ],
      "Symtab_148" : [
         "\n<rect class=\"S_0\" bbox=\"34,31,332,339\" layer=\"0,0,0,0\" x=\"34\" y=\"31\" rx=\"0\" ry=\"0\" width=\"332\" height=\"339\" fill=\"rgb(201,190,180)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"53,51,294,298\" layer=\"0,0,0,0\" x=\"53\" y=\"51\" rx=\"0\" ry=\"0\" width=\"294\" height=\"298\" fill=\"rgb(231,236,234)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"64,60,271,30\" layer=\"0,0,0,0\" x=\"64\" y=\"60\" rx=\"0\" ry=\"0\" width=\"271\" height=\"30\" fill=\"rgb(5,104,138)\" opacity=\"1\" transform=\"rotate(0,199,75)\"></rect>\n<rect class=\"S_0\" bbox=\"77,110,247,85\" layer=\"0,0,0,0\" x=\"77\" y=\"110\" rx=\"0\" ry=\"0\" width=\"247\" height=\"85\" fill=\"rgb(132,197,76)\" opacity=\"1\" transform=\"rotate(0,200,152)\"></rect>\n<text class=\"S_0\" bbox=\"81,177,190,64\" text-anchor=\"start\" pointer-events=\"none\" layer=\"0,0,0,0\" x=\"81\" y=\"177\" fill=\"rgb(0,0,0)\" opacity=\"1\" font-size=\"48pt\" font-family=\"LCD ITC-Normal \" font-weight=\"400\" font-style=\"normal\" transform=\"rotate(0,81,177)\">&#49;&#51;&#50;&#46;&#53;</text>\n\n<rect class=\"S_0\" bbox=\"76,276,43,43\" layer=\"0,0,0,0\" x=\"76\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,97,297)\"></rect>\n<rect class=\"S_0\" bbox=\"79,279,37,37\" layer=\"0,0,0,0\" x=\"79\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,97,297)\"></rect>\n<rect class=\"S_0\" bbox=\"126,276,43,43\" layer=\"0,0,0,0\" x=\"126\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,147,297)\"></rect>\n<rect class=\"S_0\" bbox=\"129,279,37,37\" layer=\"0,0,0,0\" x=\"129\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,147,297)\"></rect>\n<rect class=\"S_0\" bbox=\"175,276,43,43\" layer=\"0,0,0,0\" x=\"175\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,196,297)\"></rect>\n<rect class=\"S_0\" bbox=\"178,279,37,37\" layer=\"0,0,0,0\" x=\"178\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,196,297)\"></rect>\n<rect class=\"S_0\" bbox=\"225,276,43,43\" layer=\"0,0,0,0\" x=\"225\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,246,297)\"></rect>\n<rect class=\"S_0\" bbox=\"228,279,37,37\" layer=\"0,0,0,0\" x=\"228\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,246,297)\"></rect>\n<rect class=\"S_0\" bbox=\"275,276,43,43\" layer=\"0,0,0,0\" x=\"275\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,296,297)\"></rect>\n<rect class=\"S_0\" bbox=\"278,279,37,37\" layer=\"0,0,0,0\" x=\"278\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,296,297)\"></rect>"
      ],
      "Symtab_162" : [
         "\n<rect class=\"S_0\" bbox=\"124,32,152,336\" layer=\"0,0,0,0\" x=\"124\" y=\"32\" rx=\"0\" ry=\"0\" width=\"152\" height=\"336\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n\n<ellipse class=\"S_0\" bbox=\"165,324,24,24\" layer=\"0,0,0,0\" cx=\"177\" cy=\"336\" rx=\"12\" ry=\"12\" fill=\"rgb(0,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"203,324,24,24\" layer=\"0,0,0,0\" cx=\"215\" cy=\"336\" rx=\"12\" ry=\"12\" fill=\"rgb(0,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"241,324,24,24\" layer=\"0,0,0,0\" cx=\"253\" cy=\"336\" rx=\"12\" ry=\"12\" fill=\"rgb(0,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,99,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"108\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,124,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"133\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,149,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"158\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,174,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"183\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,276,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"285\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,251,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"260\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,226,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"235\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,201,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"210\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,99,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"108\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,124,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"133\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,149,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"158\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,174,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"183\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,276,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"285\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,251,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"260\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,226,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"235\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,201,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"210\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"141,54,18,18\" layer=\"0,0,0,0\" cx=\"150\" cy=\"63\" rx=\"9\" ry=\"9\" fill=\"rgb(139,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"141,79,18,18\" layer=\"0,0,0,0\" cx=\"150\" cy=\"88\" rx=\"9\" ry=\"9\" fill=\"rgb(255,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"141,104,18,18\" layer=\"0,0,0,0\" cx=\"150\" cy=\"113\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>"
      ],
      "Symtab_163" : [
         "\n<rect class=\"S_0\" bbox=\"124,32,152,336\" layer=\"0,0,0,0\" x=\"124\" y=\"32\" rx=\"0\" ry=\"0\" width=\"152\" height=\"336\" fill=\"rgb(127,127,127)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n\n<ellipse class=\"S_0\" bbox=\"165,324,24,24\" layer=\"0,0,0,0\" cx=\"177\" cy=\"336\" rx=\"12\" ry=\"12\" fill=\"rgb(0,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"203,324,24,24\" layer=\"0,0,0,0\" cx=\"215\" cy=\"336\" rx=\"12\" ry=\"12\" fill=\"rgb(0,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"241,324,24,24\" layer=\"0,0,0,0\" cx=\"253\" cy=\"336\" rx=\"12\" ry=\"12\" fill=\"rgb(0,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,99,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"108\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,124,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"133\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,149,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"158\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,174,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"183\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,276,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"285\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,251,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"260\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,226,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"235\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,201,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"210\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,99,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"108\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,124,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"133\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,149,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"158\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,174,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"183\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,276,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"285\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,251,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"260\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,226,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"235\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,201,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"210\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"141,54,18,18\" layer=\"0,0,0,0\" cx=\"150\" cy=\"63\" rx=\"9\" ry=\"9\" fill=\"rgb(255,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"141,79,18,18\" layer=\"0,0,0,0\" cx=\"150\" cy=\"88\" rx=\"9\" ry=\"9\" fill=\"rgb(255,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"141,104,18,18\" layer=\"0,0,0,0\" cx=\"150\" cy=\"113\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>"
      ],
      "Symtab_308" : [ "" ],
      "Symtab_310" : [
         "\n<rect class=\"S_0\" bbox=\"189,73,22,255\" layer=\"0,0,0,0\" x=\"189\" y=\"73\" rx=\"0\" ry=\"0\" width=\"22\" height=\"255\" fill=\"rgb(226,184,80)\" opacity=\"1\" transform=\"rotate(315,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"190,73,22,255\" layer=\"0,0,0,0\" x=\"190\" y=\"73\" rx=\"0\" ry=\"0\" width=\"22\" height=\"255\" fill=\"rgb(226,184,80)\" opacity=\"1\" transform=\"rotate(45,201,200)\"></rect>"
      ],
      "Symtab_532" : [
         "\n\n<circle class=\"S_0\" bbox=\"103,120,198,198\" layer=\"0,0,0,0\" cx=\"202\" cy=\"219\" r=\"99\" fill=\"rgb(255,255,255)\" opacity=\"1\"></circle>\n\n<circle class=\"S_0\" bbox=\"120,137,164,164\" layer=\"0,0,0,0\" cx=\"202\" cy=\"219\" r=\"82\" fill=\"rgb(51,51,51)\" opacity=\"1\"></circle>\n<line class=\"S_0\" bbox=\"185,253,61,61\" layer=\"0,0,0,0\" x1=\"185\" y1=\"253\" x2=\"246\" y2=\"192\" stroke-width=\"20\" stroke=\"rgb(255,255,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"195,252,42,-42\" layer=\"0,0,0,0\" x1=\"195\" y1=\"252\" x2=\"153\" y2=\"210\" stroke-width=\"20\" stroke=\"rgb(255,255,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"334,163,74,-74\" layer=\"0,0,0,0\" x1=\"334\" y1=\"163\" x2=\"260\" y2=\"89\" stroke-width=\"22\" stroke=\"rgb(255,255,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"69,159,73,73\" layer=\"0,0,0,0\" x1=\"69\" y1=\"159\" x2=\"142\" y2=\"86\" stroke-width=\"22\" stroke=\"rgb(255,255,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>"
      ],
      "Symtab_566" : [
         "\n<rect class=\"S_0\" bbox=\"189,73,22,255\" layer=\"0,0,0,0\" x=\"189\" y=\"73\" rx=\"0\" ry=\"0\" width=\"22\" height=\"255\" fill=\"rgb(125,196,254)\" opacity=\"1\" transform=\"rotate(315,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"190,73,22,255\" layer=\"0,0,0,0\" x=\"190\" y=\"73\" rx=\"0\" ry=\"0\" width=\"22\" height=\"255\" fill=\"rgb(125,196,254)\" opacity=\"1\" transform=\"rotate(45,201,200)\"></rect>"
      ],
      "Symtab_567" : [
         "\n<line class=\"S_0\" bbox=\"9,200,32,0\" layer=\"0,0,0,0\" x1=\"9\" y1=\"200\" x2=\"41\" y2=\"200\" stroke-width=\"64\" stroke=\"rgb(255,255,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"109,200,32,0\" layer=\"0,0,0,0\" x1=\"109\" y1=\"200\" x2=\"141\" y2=\"200\" stroke-width=\"64\" stroke=\"rgb(255,255,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"159,200,32,0\" layer=\"0,0,0,0\" x1=\"159\" y1=\"200\" x2=\"191\" y2=\"200\" stroke-width=\"64\" stroke=\"rgb(255,255,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"209,200,32,0\" layer=\"0,0,0,0\" x1=\"209\" y1=\"200\" x2=\"241\" y2=\"200\" stroke-width=\"64\" stroke=\"rgb(255,255,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"259,200,32,0\" layer=\"0,0,0,0\" x1=\"259\" y1=\"200\" x2=\"291\" y2=\"200\" stroke-width=\"64\" stroke=\"rgb(255,255,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"309,200,32,0\" layer=\"0,0,0,0\" x1=\"309\" y1=\"200\" x2=\"341\" y2=\"200\" stroke-width=\"64\" stroke=\"rgb(255,255,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"359,200,32,0\" layer=\"0,0,0,0\" x1=\"359\" y1=\"200\" x2=\"391\" y2=\"200\" stroke-width=\"64\" stroke=\"rgb(255,255,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"59,200,32,0\" layer=\"0,0,0,0\" x1=\"59\" y1=\"200\" x2=\"91\" y2=\"200\" stroke-width=\"64\" stroke=\"rgb(255,255,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>"
      ],
      "Symtab_622" : [ "" ],
      "Symtab_627" : [ "" ],
      "Symtab_628" : [ "" ],
      "Symtab_629" : [ "" ],
      "Symtab_631" : [ "" ],
      "Symtab_632" : [ "" ],
      "Symtab_633" : [ "" ],
      "Symtab_634" : [ "" ],
      "Symtab_635" : [ "" ],
      "Symtab_636" : [ "" ],
      "Symtab_637" : [ "" ],
      "Symtab_638" : [ "" ],
      "Symtab_639" : [ "" ],
      "Symtab_640" : [ "" ],
      "Symtab_641" : [ "" ],
      "Symtab_642" : [ "" ],
      "Symtab_643" : [ "" ],
      "Symtab_644" : [ "" ],
      "Symtab_647" : [ "" ],
      "Symtab_648" : [ "" ],
      "Symtab_650" : [ "" ],
      "Symtab_85" : [
         "\n\n<circle class=\"S_0\" bbox=\"101,58,198,198\" layer=\"0,0,0,0\" cx=\"200\" cy=\"157\" r=\"99\" fill=\"transparent\" opacity=\"1\" stroke-width=\"25\" stroke=\"rgb(255,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>\n\n<circle class=\"S_0\" bbox=\"103,149,194,194\" layer=\"0,0,0,0\" cx=\"200\" cy=\"246\" r=\"97\" fill=\"transparent\" opacity=\"1\" stroke-width=\"25\" stroke=\"rgb(50,205,50)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>"
      ]
   },
   "SymbolTable" : {
      "Symtab_1" : [
         "\n<rect class=\"S_0\" bbox=\"34,31,332,339\" layer=\"0,0,0,0\" x=\"34\" y=\"31\" rx=\"0\" ry=\"0\" width=\"332\" height=\"339\" fill=\"rgb(201,190,180)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"53,51,294,298\" layer=\"0,0,0,0\" x=\"53\" y=\"51\" rx=\"0\" ry=\"0\" width=\"294\" height=\"298\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"64,60,271,30\" layer=\"0,0,0,0\" x=\"64\" y=\"60\" rx=\"0\" ry=\"0\" width=\"271\" height=\"30\" fill=\"rgb(5,104,138)\" opacity=\"1\" transform=\"rotate(0,199,75)\"></rect>\n<rect class=\"S_0\" bbox=\"77,110,247,85\" layer=\"0,0,0,0\" x=\"77\" y=\"110\" rx=\"0\" ry=\"0\" width=\"247\" height=\"85\" fill=\"rgb(132,197,76)\" opacity=\"1\" transform=\"rotate(0,200,152)\"></rect>\n<text class=\"S_0\" bbox=\"81,177,190,64\" text-anchor=\"start\" pointer-events=\"none\" layer=\"0,0,0,0\" x=\"81\" y=\"177\" fill=\"rgb(0,0,0)\" opacity=\"1\" font-size=\"48pt\" font-family=\"LCD ITC-Normal \" font-weight=\"400\" font-style=\"normal\" transform=\"rotate(0,81,177)\">&#49;&#51;&#50;&#46;&#53;</text>\n\n<rect class=\"S_0\" bbox=\"76,276,43,43\" layer=\"0,0,0,0\" x=\"76\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,97,297)\"></rect>\n<rect class=\"S_0\" bbox=\"79,279,37,37\" layer=\"0,0,0,0\" x=\"79\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,97,297)\"></rect>\n<rect class=\"S_0\" bbox=\"126,276,43,43\" layer=\"0,0,0,0\" x=\"126\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,147,297)\"></rect>\n<rect class=\"S_0\" bbox=\"129,279,37,37\" layer=\"0,0,0,0\" x=\"129\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,147,297)\"></rect>\n<rect class=\"S_0\" bbox=\"175,276,43,43\" layer=\"0,0,0,0\" x=\"175\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,196,297)\"></rect>\n<rect class=\"S_0\" bbox=\"178,279,37,37\" layer=\"0,0,0,0\" x=\"178\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,196,297)\"></rect>\n<rect class=\"S_0\" bbox=\"225,276,43,43\" layer=\"0,0,0,0\" x=\"225\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,246,297)\"></rect>\n<rect class=\"S_0\" bbox=\"228,279,37,37\" layer=\"0,0,0,0\" x=\"228\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,246,297)\"></rect>\n<rect class=\"S_0\" bbox=\"275,276,43,43\" layer=\"0,0,0,0\" x=\"275\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,296,297)\"></rect>\n<rect class=\"S_0\" bbox=\"278,279,37,37\" layer=\"0,0,0,0\" x=\"278\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,296,297)\"></rect>",
         "\n<rect class=\"S_0\" bbox=\"34,31,332,339\" layer=\"0,0,0,0\" x=\"34\" y=\"31\" rx=\"0\" ry=\"0\" width=\"332\" height=\"339\" fill=\"rgb(201,190,180)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"53,51,294,298\" layer=\"0,0,0,0\" x=\"53\" y=\"51\" rx=\"0\" ry=\"0\" width=\"294\" height=\"298\" fill=\"rgb(231,236,234)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"64,60,271,30\" layer=\"0,0,0,0\" x=\"64\" y=\"60\" rx=\"0\" ry=\"0\" width=\"271\" height=\"30\" fill=\"rgb(5,104,138)\" opacity=\"1\" transform=\"rotate(0,199,75)\"></rect>\n<rect class=\"S_0\" bbox=\"77,110,247,85\" layer=\"0,0,0,0\" x=\"77\" y=\"110\" rx=\"0\" ry=\"0\" width=\"247\" height=\"85\" fill=\"rgb(132,197,76)\" opacity=\"1\" transform=\"rotate(0,200,152)\"></rect>\n<text class=\"S_0\" bbox=\"81,177,190,64\" text-anchor=\"start\" pointer-events=\"none\" layer=\"0,0,0,0\" x=\"81\" y=\"177\" fill=\"rgb(0,0,0)\" opacity=\"1\" font-size=\"48pt\" font-family=\"LCD ITC-Normal \" font-weight=\"400\" font-style=\"normal\" transform=\"rotate(0,81,177)\">&#49;&#51;&#50;&#46;&#53;</text>\n\n<rect class=\"S_0\" bbox=\"76,276,43,43\" layer=\"0,0,0,0\" x=\"76\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,97,297)\"></rect>\n<rect class=\"S_0\" bbox=\"79,279,37,37\" layer=\"0,0,0,0\" x=\"79\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,97,297)\"></rect>\n<rect class=\"S_0\" bbox=\"126,276,43,43\" layer=\"0,0,0,0\" x=\"126\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,147,297)\"></rect>\n<rect class=\"S_0\" bbox=\"129,279,37,37\" layer=\"0,0,0,0\" x=\"129\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,147,297)\"></rect>\n<rect class=\"S_0\" bbox=\"175,276,43,43\" layer=\"0,0,0,0\" x=\"175\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,196,297)\"></rect>\n<rect class=\"S_0\" bbox=\"178,279,37,37\" layer=\"0,0,0,0\" x=\"178\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,196,297)\"></rect>\n<rect class=\"S_0\" bbox=\"225,276,43,43\" layer=\"0,0,0,0\" x=\"225\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,246,297)\"></rect>\n<rect class=\"S_0\" bbox=\"228,279,37,37\" layer=\"0,0,0,0\" x=\"228\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,246,297)\"></rect>\n<rect class=\"S_0\" bbox=\"275,276,43,43\" layer=\"0,0,0,0\" x=\"275\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,296,297)\"></rect>\n<rect class=\"S_0\" bbox=\"278,279,37,37\" layer=\"0,0,0,0\" x=\"278\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,296,297)\"></rect>",
         "\n<rect class=\"S_0\" bbox=\"34,31,332,339\" layer=\"0,0,0,0\" x=\"34\" y=\"31\" rx=\"0\" ry=\"0\" width=\"332\" height=\"339\" fill=\"rgb(201,190,180)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"53,51,294,298\" layer=\"0,0,0,0\" x=\"53\" y=\"51\" rx=\"0\" ry=\"0\" width=\"294\" height=\"298\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"64,60,271,30\" layer=\"0,0,0,0\" x=\"64\" y=\"60\" rx=\"0\" ry=\"0\" width=\"271\" height=\"30\" fill=\"rgb(5,104,138)\" opacity=\"1\" transform=\"rotate(0,199,75)\"></rect>\n<rect class=\"S_0\" bbox=\"77,110,247,85\" layer=\"0,0,0,0\" x=\"77\" y=\"110\" rx=\"0\" ry=\"0\" width=\"247\" height=\"85\" fill=\"rgb(132,197,76)\" opacity=\"1\" transform=\"rotate(0,200,152)\"></rect>\n<text class=\"S_0\" bbox=\"81,177,190,64\" text-anchor=\"start\" pointer-events=\"none\" layer=\"0,0,0,0\" x=\"81\" y=\"177\" fill=\"rgb(0,0,0)\" opacity=\"1\" font-size=\"48pt\" font-family=\"LCD ITC-Normal \" font-weight=\"400\" font-style=\"normal\" transform=\"rotate(0,81,177)\">&#49;&#51;&#50;&#46;&#53;</text>\n\n<rect class=\"S_0\" bbox=\"76,276,43,43\" layer=\"0,0,0,0\" x=\"76\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,97,297)\"></rect>\n<rect class=\"S_0\" bbox=\"79,279,37,37\" layer=\"0,0,0,0\" x=\"79\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,97,297)\"></rect>\n<rect class=\"S_0\" bbox=\"126,276,43,43\" layer=\"0,0,0,0\" x=\"126\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,147,297)\"></rect>\n<rect class=\"S_0\" bbox=\"129,279,37,37\" layer=\"0,0,0,0\" x=\"129\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,147,297)\"></rect>\n<rect class=\"S_0\" bbox=\"175,276,43,43\" layer=\"0,0,0,0\" x=\"175\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,196,297)\"></rect>\n<rect class=\"S_0\" bbox=\"178,279,37,37\" layer=\"0,0,0,0\" x=\"178\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,196,297)\"></rect>\n<rect class=\"S_0\" bbox=\"225,276,43,43\" layer=\"0,0,0,0\" x=\"225\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,246,297)\"></rect>\n<rect class=\"S_0\" bbox=\"228,279,37,37\" layer=\"0,0,0,0\" x=\"228\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,246,297)\"></rect>\n<rect class=\"S_0\" bbox=\"275,276,43,43\" layer=\"0,0,0,0\" x=\"275\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,296,297)\"></rect>\n<rect class=\"S_0\" bbox=\"278,279,37,37\" layer=\"0,0,0,0\" x=\"278\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,296,297)\"></rect>",
         "\n<rect class=\"S_0\" bbox=\"34,31,332,339\" layer=\"0,0,0,0\" x=\"34\" y=\"31\" rx=\"0\" ry=\"0\" width=\"332\" height=\"339\" fill=\"rgb(201,190,180)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"53,51,294,298\" layer=\"0,0,0,0\" x=\"53\" y=\"51\" rx=\"0\" ry=\"0\" width=\"294\" height=\"298\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"64,60,271,30\" layer=\"0,0,0,0\" x=\"64\" y=\"60\" rx=\"0\" ry=\"0\" width=\"271\" height=\"30\" fill=\"rgb(5,104,138)\" opacity=\"1\" transform=\"rotate(0,199,75)\"></rect>\n<rect class=\"S_0\" bbox=\"77,110,247,85\" layer=\"0,0,0,0\" x=\"77\" y=\"110\" rx=\"0\" ry=\"0\" width=\"247\" height=\"85\" fill=\"rgb(132,197,76)\" opacity=\"1\" transform=\"rotate(0,200,152)\"></rect>\n<text class=\"S_0\" bbox=\"81,177,190,64\" text-anchor=\"start\" pointer-events=\"none\" layer=\"0,0,0,0\" x=\"81\" y=\"177\" fill=\"rgb(0,0,0)\" opacity=\"1\" font-size=\"48pt\" font-family=\"LCD ITC-Normal \" font-weight=\"400\" font-style=\"normal\" transform=\"rotate(0,81,177)\">&#49;&#51;&#50;&#46;&#53;</text>\n\n<rect class=\"S_0\" bbox=\"76,276,43,43\" layer=\"0,0,0,0\" x=\"76\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,97,297)\"></rect>\n<rect class=\"S_0\" bbox=\"79,279,37,37\" layer=\"0,0,0,0\" x=\"79\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,97,297)\"></rect>\n<rect class=\"S_0\" bbox=\"126,276,43,43\" layer=\"0,0,0,0\" x=\"126\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,147,297)\"></rect>\n<rect class=\"S_0\" bbox=\"129,279,37,37\" layer=\"0,0,0,0\" x=\"129\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,147,297)\"></rect>\n<rect class=\"S_0\" bbox=\"175,276,43,43\" layer=\"0,0,0,0\" x=\"175\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,196,297)\"></rect>\n<rect class=\"S_0\" bbox=\"178,279,37,37\" layer=\"0,0,0,0\" x=\"178\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,196,297)\"></rect>\n<rect class=\"S_0\" bbox=\"225,276,43,43\" layer=\"0,0,0,0\" x=\"225\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,246,297)\"></rect>\n<rect class=\"S_0\" bbox=\"228,279,37,37\" layer=\"0,0,0,0\" x=\"228\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,246,297)\"></rect>\n<rect class=\"S_0\" bbox=\"275,276,43,43\" layer=\"0,0,0,0\" x=\"275\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,296,297)\"></rect>\n<rect class=\"S_0\" bbox=\"278,279,37,37\" layer=\"0,0,0,0\" x=\"278\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,296,297)\"></rect>",
         "\n<rect class=\"S_0\" bbox=\"34,31,332,339\" layer=\"0,0,0,0\" x=\"34\" y=\"31\" rx=\"0\" ry=\"0\" width=\"332\" height=\"339\" fill=\"rgb(201,190,180)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"53,51,294,298\" layer=\"0,0,0,0\" x=\"53\" y=\"51\" rx=\"0\" ry=\"0\" width=\"294\" height=\"298\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"64,60,271,30\" layer=\"0,0,0,0\" x=\"64\" y=\"60\" rx=\"0\" ry=\"0\" width=\"271\" height=\"30\" fill=\"rgb(5,104,138)\" opacity=\"1\" transform=\"rotate(0,199,75)\"></rect>\n<rect class=\"S_0\" bbox=\"77,110,247,85\" layer=\"0,0,0,0\" x=\"77\" y=\"110\" rx=\"0\" ry=\"0\" width=\"247\" height=\"85\" fill=\"rgb(132,197,76)\" opacity=\"1\" transform=\"rotate(0,200,152)\"></rect>\n<text class=\"S_0\" bbox=\"81,177,190,64\" text-anchor=\"start\" pointer-events=\"none\" layer=\"0,0,0,0\" x=\"81\" y=\"177\" fill=\"rgb(0,0,0)\" opacity=\"1\" font-size=\"48pt\" font-family=\"LCD ITC-Normal \" font-weight=\"400\" font-style=\"normal\" transform=\"rotate(0,81,177)\">&#49;&#51;&#50;&#46;&#53;</text>\n\n<rect class=\"S_0\" bbox=\"76,276,43,43\" layer=\"0,0,0,0\" x=\"76\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,97,297)\"></rect>\n<rect class=\"S_0\" bbox=\"79,279,37,37\" layer=\"0,0,0,0\" x=\"79\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,97,297)\"></rect>\n<rect class=\"S_0\" bbox=\"126,276,43,43\" layer=\"0,0,0,0\" x=\"126\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,147,297)\"></rect>\n<rect class=\"S_0\" bbox=\"129,279,37,37\" layer=\"0,0,0,0\" x=\"129\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,147,297)\"></rect>\n<rect class=\"S_0\" bbox=\"175,276,43,43\" layer=\"0,0,0,0\" x=\"175\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,196,297)\"></rect>\n<rect class=\"S_0\" bbox=\"178,279,37,37\" layer=\"0,0,0,0\" x=\"178\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,196,297)\"></rect>\n<rect class=\"S_0\" bbox=\"225,276,43,43\" layer=\"0,0,0,0\" x=\"225\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,246,297)\"></rect>\n<rect class=\"S_0\" bbox=\"228,279,37,37\" layer=\"0,0,0,0\" x=\"228\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,246,297)\"></rect>\n<rect class=\"S_0\" bbox=\"275,276,43,43\" layer=\"0,0,0,0\" x=\"275\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,296,297)\"></rect>\n<rect class=\"S_0\" bbox=\"278,279,37,37\" layer=\"0,0,0,0\" x=\"278\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,296,297)\"></rect>",
         "\n<rect class=\"S_0\" bbox=\"34,31,332,339\" layer=\"0,0,0,0\" x=\"34\" y=\"31\" rx=\"0\" ry=\"0\" width=\"332\" height=\"339\" fill=\"rgb(201,190,180)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"53,51,294,298\" layer=\"0,0,0,0\" x=\"53\" y=\"51\" rx=\"0\" ry=\"0\" width=\"294\" height=\"298\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"64,60,271,30\" layer=\"0,0,0,0\" x=\"64\" y=\"60\" rx=\"0\" ry=\"0\" width=\"271\" height=\"30\" fill=\"rgb(5,104,138)\" opacity=\"1\" transform=\"rotate(0,199,75)\"></rect>\n<rect class=\"S_0\" bbox=\"77,110,247,85\" layer=\"0,0,0,0\" x=\"77\" y=\"110\" rx=\"0\" ry=\"0\" width=\"247\" height=\"85\" fill=\"rgb(132,197,76)\" opacity=\"1\" transform=\"rotate(0,200,152)\"></rect>\n<text class=\"S_0\" bbox=\"81,177,190,64\" text-anchor=\"start\" pointer-events=\"none\" layer=\"0,0,0,0\" x=\"81\" y=\"177\" fill=\"rgb(0,0,0)\" opacity=\"1\" font-size=\"48pt\" font-family=\"LCD ITC-Normal \" font-weight=\"400\" font-style=\"normal\" transform=\"rotate(0,81,177)\">&#49;&#51;&#50;&#46;&#53;</text>\n\n<rect class=\"S_0\" bbox=\"76,276,43,43\" layer=\"0,0,0,0\" x=\"76\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,97,297)\"></rect>\n<rect class=\"S_0\" bbox=\"79,279,37,37\" layer=\"0,0,0,0\" x=\"79\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,97,297)\"></rect>\n<rect class=\"S_0\" bbox=\"126,276,43,43\" layer=\"0,0,0,0\" x=\"126\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,147,297)\"></rect>\n<rect class=\"S_0\" bbox=\"129,279,37,37\" layer=\"0,0,0,0\" x=\"129\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,147,297)\"></rect>\n<rect class=\"S_0\" bbox=\"175,276,43,43\" layer=\"0,0,0,0\" x=\"175\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,196,297)\"></rect>\n<rect class=\"S_0\" bbox=\"178,279,37,37\" layer=\"0,0,0,0\" x=\"178\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,196,297)\"></rect>\n<rect class=\"S_0\" bbox=\"225,276,43,43\" layer=\"0,0,0,0\" x=\"225\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,246,297)\"></rect>\n<rect class=\"S_0\" bbox=\"228,279,37,37\" layer=\"0,0,0,0\" x=\"228\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,246,297)\"></rect>\n<rect class=\"S_0\" bbox=\"275,276,43,43\" layer=\"0,0,0,0\" x=\"275\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,296,297)\"></rect>\n<rect class=\"S_0\" bbox=\"278,279,37,37\" layer=\"0,0,0,0\" x=\"278\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,296,297)\"></rect>",
         "\n<rect class=\"S_0\" bbox=\"34,31,332,339\" layer=\"0,0,0,0\" x=\"34\" y=\"31\" rx=\"0\" ry=\"0\" width=\"332\" height=\"339\" fill=\"rgb(201,190,180)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"53,51,294,298\" layer=\"0,0,0,0\" x=\"53\" y=\"51\" rx=\"0\" ry=\"0\" width=\"294\" height=\"298\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"64,60,271,30\" layer=\"0,0,0,0\" x=\"64\" y=\"60\" rx=\"0\" ry=\"0\" width=\"271\" height=\"30\" fill=\"rgb(5,104,138)\" opacity=\"1\" transform=\"rotate(0,199,75)\"></rect>\n<rect class=\"S_0\" bbox=\"77,110,247,85\" layer=\"0,0,0,0\" x=\"77\" y=\"110\" rx=\"0\" ry=\"0\" width=\"247\" height=\"85\" fill=\"rgb(132,197,76)\" opacity=\"1\" transform=\"rotate(0,200,152)\"></rect>\n<text class=\"S_0\" bbox=\"81,177,190,64\" text-anchor=\"start\" pointer-events=\"none\" layer=\"0,0,0,0\" x=\"81\" y=\"177\" fill=\"rgb(0,0,0)\" opacity=\"1\" font-size=\"48pt\" font-family=\"LCD ITC-Normal \" font-weight=\"400\" font-style=\"normal\" transform=\"rotate(0,81,177)\">&#49;&#51;&#50;&#46;&#53;</text>\n\n<rect class=\"S_0\" bbox=\"76,276,43,43\" layer=\"0,0,0,0\" x=\"76\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,97,297)\"></rect>\n<rect class=\"S_0\" bbox=\"79,279,37,37\" layer=\"0,0,0,0\" x=\"79\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,97,297)\"></rect>\n<rect class=\"S_0\" bbox=\"126,276,43,43\" layer=\"0,0,0,0\" x=\"126\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,147,297)\"></rect>\n<rect class=\"S_0\" bbox=\"129,279,37,37\" layer=\"0,0,0,0\" x=\"129\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,147,297)\"></rect>\n<rect class=\"S_0\" bbox=\"175,276,43,43\" layer=\"0,0,0,0\" x=\"175\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,196,297)\"></rect>\n<rect class=\"S_0\" bbox=\"178,279,37,37\" layer=\"0,0,0,0\" x=\"178\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,196,297)\"></rect>\n<rect class=\"S_0\" bbox=\"225,276,43,43\" layer=\"0,0,0,0\" x=\"225\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,246,297)\"></rect>\n<rect class=\"S_0\" bbox=\"228,279,37,37\" layer=\"0,0,0,0\" x=\"228\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,246,297)\"></rect>\n<rect class=\"S_0\" bbox=\"275,276,43,43\" layer=\"0,0,0,0\" x=\"275\" y=\"276\" rx=\"0\" ry=\"0\" width=\"43\" height=\"43\" fill=\"rgb(17,172,237)\" opacity=\"1\" transform=\"rotate(0,296,297)\"></rect>\n<rect class=\"S_0\" bbox=\"278,279,37,37\" layer=\"0,0,0,0\" x=\"278\" y=\"279\" rx=\"0\" ry=\"0\" width=\"37\" height=\"37\" fill=\"rgb(145,217,247)\" opacity=\"1\" transform=\"rotate(0,296,297)\"></rect>"
      ],
      "Symtab_113" : [
         "\n<polygon class=\"S_0\" bbox=\"121,85,161,229\" layer=\"0,0,0,0\" points=\"202,185 181,183 181,314 202,314 222,314 222,184 282,185 202,85 121,185 202,185 \" fill=\"rgb(128,0,128)\" opacity=\"1\"></polygon>",
         "\n<polygon class=\"S_0\" bbox=\"121,85,161,229\" layer=\"0,0,0,0\" points=\"202,185 181,183 181,314 202,314 222,314 222,184 282,185 202,85 121,185 202,185 \" fill=\"rgb(213,81,71)\" opacity=\"1\"></polygon>",
         "\n<polygon class=\"S_0\" bbox=\"112,87,161,229\" layer=\"0,0,0,0\" points=\"193,187 172,185 172,316 193,316 213,316 213,186 273,187 193,87 112,187 193,187 \" fill=\"rgb(55,124,62)\" opacity=\"1\"></polygon>",
         "\n<polygon class=\"S_0\" bbox=\"121,85,161,229\" layer=\"0,0,0,0\" points=\"202,185 181,183 181,314 202,314 222,314 222,184 282,185 202,85 121,185 202,185 \" fill=\"rgb(226,184,80)\" opacity=\"1\"></polygon>",
         "\n<polygon class=\"S_0\" bbox=\"121,85,161,229\" layer=\"0,0,0,0\" points=\"202,185 181,183 181,314 202,314 222,314 222,184 282,185 202,85 121,185 202,185 \" fill=\"rgb(128,0,128)\" opacity=\"1\"></polygon>",
         "\n<polygon class=\"S_0\" bbox=\"121,85,161,229\" layer=\"0,0,0,0\" points=\"202,185 181,183 181,314 202,314 222,314 222,184 282,185 202,85 121,185 202,185 \" fill=\"rgb(128,0,128)\" opacity=\"1\"></polygon>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>"
      ],
      "Symtab_114" : [
         "\n<polygon class=\"S_0\" bbox=\"119,95,160,210\" layer=\"0,0,0,0\" points=\"176,225 176,149 176,95 206,95 224,95 224,228 279,225 200,305 119,224 181,224 \" fill=\"rgb(128,0,128)\" opacity=\"1\"></polygon>",
         "\n<polygon class=\"S_0\" bbox=\"119,95,160,210\" layer=\"0,0,0,0\" points=\"176,225 176,146 176,95 206,95 224,95 224,228 279,225 200,305 119,224 181,224 \" fill=\"rgb(255,0,0)\" opacity=\"1\"></polygon>",
         "\n<polygon class=\"S_0\" bbox=\"119,95,160,210\" layer=\"0,0,0,0\" points=\"176,225 176,148 176,95 206,95 224,95 224,228 279,225 200,305 119,224 181,224 \" fill=\"rgb(55,124,62)\" opacity=\"1\"></polygon>",
         "\n<polygon class=\"S_0\" bbox=\"119,95,160,210\" layer=\"0,0,0,0\" points=\"176,225 176,150 176,95 206,95 224,95 224,228 279,225 200,305 119,224 181,224 \" fill=\"rgb(226,184,80)\" opacity=\"1\"></polygon>",
         "\n<polygon class=\"S_0\" bbox=\"119,95,160,210\" layer=\"0,0,0,0\" points=\"176,225 176,149 176,95 206,95 224,95 224,228 279,225 200,305 119,224 181,224 \" fill=\"rgb(128,0,128)\" opacity=\"1\"></polygon>",
         "\n<polygon class=\"S_0\" bbox=\"119,95,160,210\" layer=\"0,0,0,0\" points=\"176,225 176,149 176,95 206,95 224,95 224,228 279,225 200,305 119,224 181,224 \" fill=\"rgb(128,0,128)\" opacity=\"1\"></polygon>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>"
      ],
      "Symtab_14" : [
         "\n\n<ellipse class=\"S_0\" bbox=\"140,140,120,120\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" rx=\"60\" ry=\"60\" fill=\"rgb(255,0,0)\" opacity=\"1\"></ellipse>",
         "\n\n<ellipse class=\"S_0\" bbox=\"140,140,120,120\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" rx=\"60\" ry=\"60\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>",
         "\n\n<ellipse class=\"S_0\" bbox=\"140,140,120,120\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" rx=\"60\" ry=\"60\" fill=\"rgb(255,0,0)\" opacity=\"1\"></ellipse>",
         "\n\n<ellipse class=\"S_0\" bbox=\"140,140,120,120\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" rx=\"60\" ry=\"60\" fill=\"rgb(255,0,0)\" opacity=\"1\"></ellipse>",
         "\n\n<ellipse class=\"S_0\" bbox=\"140,140,120,120\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" rx=\"60\" ry=\"60\" fill=\"rgb(255,0,0)\" opacity=\"1\"></ellipse>",
         "\n\n<ellipse class=\"S_0\" bbox=\"140,140,120,120\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" rx=\"60\" ry=\"60\" fill=\"rgb(255,0,0)\" opacity=\"1\"></ellipse>",
         "\n\n<ellipse class=\"S_0\" bbox=\"140,140,120,120\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" rx=\"60\" ry=\"60\" fill=\"rgb(255,0,0)\" opacity=\"1\"></ellipse>"
      ],
      "Symtab_17" : [
         "\n<rect class=\"S_0\" bbox=\"268,7,26,90\" layer=\"0,0,0,0\" x=\"268\" y=\"7\" rx=\"0\" ry=\"0\" width=\"26\" height=\"90\" fill=\"rgb(0,0,0)\" opacity=\"1\" transform=\"rotate(329,281,52)\"></rect>\n\n<circle class=\"S_0\" bbox=\"270,139,122,122\" layer=\"0,0,0,0\" cx=\"331\" cy=\"200\" r=\"61\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>\n\n<circle class=\"S_0\" bbox=\"299,168,64,64\" layer=\"0,0,0,0\" cx=\"331\" cy=\"200\" r=\"32\" fill=\"rgb(255,255,255)\" opacity=\"1\"></circle>\n<rect class=\"S_0\" bbox=\"71,90,219,44\" layer=\"0,0,0,0\" x=\"71\" y=\"90\" rx=\"0\" ry=\"0\" width=\"219\" height=\"44\" fill=\"rgb(0,0,0)\" opacity=\"1\" transform=\"rotate(329,180,112)\"></rect>\n\n<circle class=\"S_0\" bbox=\"9,139,122,122\" layer=\"0,0,0,0\" cx=\"70\" cy=\"200\" r=\"61\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>\n\n<circle class=\"S_0\" bbox=\"38,168,64,64\" layer=\"0,0,0,0\" cx=\"70\" cy=\"200\" r=\"32\" fill=\"rgb(255,255,255)\" opacity=\"1\"></circle>",
         "\n\n<circle class=\"S_0\" bbox=\"9,139,122,122\" layer=\"0,0,0,0\" cx=\"70\" cy=\"200\" r=\"61\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>\n\n<circle class=\"S_0\" bbox=\"38,168,64,64\" layer=\"0,0,0,0\" cx=\"70\" cy=\"200\" r=\"32\" fill=\"rgb(255,255,255)\" opacity=\"1\"></circle>\n\n<circle class=\"S_0\" bbox=\"270,139,122,122\" layer=\"0,0,0,0\" cx=\"331\" cy=\"200\" r=\"61\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>\n\n<circle class=\"S_0\" bbox=\"299,168,64,64\" layer=\"0,0,0,0\" cx=\"331\" cy=\"200\" r=\"32\" fill=\"rgb(255,255,255)\" opacity=\"1\"></circle>\n<rect class=\"S_0\" bbox=\"97,178,206,44\" layer=\"0,0,0,0\" x=\"97\" y=\"178\" rx=\"0\" ry=\"0\" width=\"206\" height=\"44\" fill=\"rgb(0,0,0)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>",
         "\n<rect class=\"S_0\" bbox=\"268,7,26,90\" layer=\"0,0,0,0\" x=\"268\" y=\"7\" rx=\"0\" ry=\"0\" width=\"26\" height=\"90\" fill=\"rgb(0,0,0)\" opacity=\"1\" transform=\"rotate(329,281,52)\"></rect>\n\n<circle class=\"S_0\" bbox=\"270,139,122,122\" layer=\"0,0,0,0\" cx=\"331\" cy=\"200\" r=\"61\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>\n\n<circle class=\"S_0\" bbox=\"299,168,64,64\" layer=\"0,0,0,0\" cx=\"331\" cy=\"200\" r=\"32\" fill=\"rgb(255,255,255)\" opacity=\"1\"></circle>\n<rect class=\"S_0\" bbox=\"71,90,219,44\" layer=\"0,0,0,0\" x=\"71\" y=\"90\" rx=\"0\" ry=\"0\" width=\"219\" height=\"44\" fill=\"rgb(0,0,0)\" opacity=\"1\" transform=\"rotate(329,180,112)\"></rect>\n\n<circle class=\"S_0\" bbox=\"9,139,122,122\" layer=\"0,0,0,0\" cx=\"70\" cy=\"200\" r=\"61\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>\n\n<circle class=\"S_0\" bbox=\"38,168,64,64\" layer=\"0,0,0,0\" cx=\"70\" cy=\"200\" r=\"32\" fill=\"rgb(255,255,255)\" opacity=\"1\"></circle>",
         "\n\n<circle class=\"S_0\" bbox=\"9,139,122,122\" layer=\"0,0,0,0\" cx=\"70\" cy=\"200\" r=\"61\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>\n\n<circle class=\"S_0\" bbox=\"38,168,64,64\" layer=\"0,0,0,0\" cx=\"70\" cy=\"200\" r=\"32\" fill=\"rgb(255,255,255)\" opacity=\"1\"></circle>\n\n<circle class=\"S_0\" bbox=\"270,139,122,122\" layer=\"0,0,0,0\" cx=\"331\" cy=\"200\" r=\"61\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>\n\n<circle class=\"S_0\" bbox=\"299,168,64,64\" layer=\"0,0,0,0\" cx=\"331\" cy=\"200\" r=\"32\" fill=\"rgb(255,255,255)\" opacity=\"1\"></circle>\n<rect class=\"S_0\" bbox=\"97,178,206,44\" layer=\"0,0,0,0\" x=\"97\" y=\"178\" rx=\"0\" ry=\"0\" width=\"206\" height=\"44\" fill=\"rgb(0,0,0)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>"
      ],
      "Symtab_21" : [
         "\n<polygon class=\"S_0\" bbox=\"115,118,172,171\" layer=\"0,0,0,0\" points=\"115,119 287,118 287,289 115,289 \" fill=\"rgb(51,51,51)\" opacity=\"1\"></polygon>\n<polygon class=\"S_0\" bbox=\"105,204,192,96\" layer=\"0,0,0,0\" points=\"105,204 297,204 297,300 105,300 \" fill=\"rgb(255,192,203)\" opacity=\"1\"></polygon>\n<rect class=\"S_0\" bbox=\"189,13,24,195\" layer=\"0,0,0,0\" x=\"189\" y=\"13\" rx=\"0\" ry=\"0\" width=\"24\" height=\"195\" fill=\"rgb(255,192,203)\" opacity=\"1\" transform=\"rotate(90,201,110)\"></rect>\n<rect class=\"S_0\" bbox=\"103,105,20,195\" layer=\"0,0,0,0\" x=\"103\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(255,192,203)\" opacity=\"1\" transform=\"rotate(0,113,202)\"></rect>\n<rect class=\"S_0\" bbox=\"278,105,20,195\" layer=\"0,0,0,0\" x=\"278\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(255,192,203)\" opacity=\"1\" transform=\"rotate(0,288,202)\"></rect>\n<rect class=\"S_0\" bbox=\"189,190,24,195\" layer=\"0,0,0,0\" x=\"189\" y=\"190\" rx=\"0\" ry=\"0\" width=\"24\" height=\"195\" fill=\"rgb(255,192,203)\" opacity=\"1\" transform=\"rotate(90,201,287)\"></rect>",
         "\n<polygon class=\"S_0\" bbox=\"115,118,172,171\" layer=\"0,0,0,0\" points=\"115,119 287,118 287,289 115,289 \" fill=\"rgb(51,51,51)\" opacity=\"1\"></polygon>\n<polygon class=\"S_0\" bbox=\"105,204,192,96\" layer=\"0,0,0,0\" points=\"105,204 297,204 297,300 105,300 \" fill=\"rgb(255,192,203)\" opacity=\"1\"></polygon>\n<rect class=\"S_0\" bbox=\"189,13,24,195\" layer=\"0,0,0,0\" x=\"189\" y=\"13\" rx=\"0\" ry=\"0\" width=\"24\" height=\"195\" fill=\"rgb(255,192,203)\" opacity=\"1\" transform=\"rotate(90,201,110)\"></rect>\n<rect class=\"S_0\" bbox=\"103,105,20,195\" layer=\"0,0,0,0\" x=\"103\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(255,192,203)\" opacity=\"1\" transform=\"rotate(0,113,202)\"></rect>\n<rect class=\"S_0\" bbox=\"278,105,20,195\" layer=\"0,0,0,0\" x=\"278\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(255,192,203)\" opacity=\"1\" transform=\"rotate(0,288,202)\"></rect>\n<rect class=\"S_0\" bbox=\"189,190,24,195\" layer=\"0,0,0,0\" x=\"189\" y=\"190\" rx=\"0\" ry=\"0\" width=\"24\" height=\"195\" fill=\"rgb(255,192,203)\" opacity=\"1\" transform=\"rotate(90,201,287)\"></rect>",
         "\n<polygon class=\"S_0\" bbox=\"115,118,172,171\" layer=\"0,0,0,0\" points=\"115,119 287,118 287,289 115,289 \" fill=\"rgb(51,51,51)\" opacity=\"1\"></polygon>\n<polygon class=\"S_0\" bbox=\"105,204,192,96\" layer=\"0,0,0,0\" points=\"105,204 297,204 297,300 105,300 \" fill=\"rgb(255,192,203)\" opacity=\"1\"></polygon>\n<rect class=\"S_0\" bbox=\"189,13,24,195\" layer=\"0,0,0,0\" x=\"189\" y=\"13\" rx=\"0\" ry=\"0\" width=\"24\" height=\"195\" fill=\"rgb(255,192,203)\" opacity=\"1\" transform=\"rotate(90,201,110)\"></rect>\n<rect class=\"S_0\" bbox=\"103,105,20,195\" layer=\"0,0,0,0\" x=\"103\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(255,192,203)\" opacity=\"1\" transform=\"rotate(0,113,202)\"></rect>\n<rect class=\"S_0\" bbox=\"278,105,20,195\" layer=\"0,0,0,0\" x=\"278\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(255,192,203)\" opacity=\"1\" transform=\"rotate(0,288,202)\"></rect>\n<rect class=\"S_0\" bbox=\"189,190,24,195\" layer=\"0,0,0,0\" x=\"189\" y=\"190\" rx=\"0\" ry=\"0\" width=\"24\" height=\"195\" fill=\"rgb(255,192,203)\" opacity=\"1\" transform=\"rotate(90,201,287)\"></rect>",
         "\n<polygon class=\"S_0\" bbox=\"115,118,172,171\" layer=\"0,0,0,0\" points=\"115,119 287,118 287,289 115,289 \" fill=\"rgb(51,51,51)\" opacity=\"1\"></polygon>\n<polygon class=\"S_0\" bbox=\"105,204,192,96\" layer=\"0,0,0,0\" points=\"105,204 297,204 297,300 105,300 \" fill=\"rgb(255,192,203)\" opacity=\"1\"></polygon>\n<rect class=\"S_0\" bbox=\"189,13,24,195\" layer=\"0,0,0,0\" x=\"189\" y=\"13\" rx=\"0\" ry=\"0\" width=\"24\" height=\"195\" fill=\"rgb(255,192,203)\" opacity=\"1\" transform=\"rotate(90,201,110)\"></rect>\n<rect class=\"S_0\" bbox=\"103,105,20,195\" layer=\"0,0,0,0\" x=\"103\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(255,192,203)\" opacity=\"1\" transform=\"rotate(0,113,202)\"></rect>\n<rect class=\"S_0\" bbox=\"278,105,20,195\" layer=\"0,0,0,0\" x=\"278\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(255,192,203)\" opacity=\"1\" transform=\"rotate(0,288,202)\"></rect>\n<rect class=\"S_0\" bbox=\"189,190,24,195\" layer=\"0,0,0,0\" x=\"189\" y=\"190\" rx=\"0\" ry=\"0\" width=\"24\" height=\"195\" fill=\"rgb(255,192,203)\" opacity=\"1\" transform=\"rotate(90,201,287)\"></rect>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>"
      ],
      "Symtab_217" : [
         "\n<polygon class=\"S_0\" bbox=\"115,118,172,171\" layer=\"0,0,0,0\" points=\"115,119 287,118 287,289 115,289 \" fill=\"rgb(51,51,51)\" opacity=\"1\"></polygon>\n<polygon class=\"S_0\" bbox=\"105,204,192,96\" layer=\"0,0,0,0\" points=\"105,204 297,204 297,300 105,300 \" fill=\"rgb(255,192,203)\" opacity=\"1\"></polygon>\n<rect class=\"S_0\" bbox=\"189,13,24,195\" layer=\"0,0,0,0\" x=\"189\" y=\"13\" rx=\"0\" ry=\"0\" width=\"24\" height=\"195\" fill=\"rgb(255,192,203)\" opacity=\"1\" transform=\"rotate(90,201,110)\"></rect>\n<rect class=\"S_0\" bbox=\"103,105,20,195\" layer=\"0,0,0,0\" x=\"103\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(255,192,203)\" opacity=\"1\" transform=\"rotate(0,113,202)\"></rect>\n<rect class=\"S_0\" bbox=\"278,105,20,195\" layer=\"0,0,0,0\" x=\"278\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(255,192,203)\" opacity=\"1\" transform=\"rotate(0,288,202)\"></rect>\n<rect class=\"S_0\" bbox=\"189,190,24,195\" layer=\"0,0,0,0\" x=\"189\" y=\"190\" rx=\"0\" ry=\"0\" width=\"24\" height=\"195\" fill=\"rgb(255,192,203)\" opacity=\"1\" transform=\"rotate(90,201,287)\"></rect>",
         "\n<polygon class=\"S_0\" bbox=\"115,118,172,171\" layer=\"0,0,0,0\" points=\"115,119 287,118 287,289 115,289 \" fill=\"rgb(51,51,51)\" opacity=\"1\"></polygon>\n<rect class=\"S_0\" bbox=\"103,105,20,17\" layer=\"0,0,0,0\" x=\"103\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"17\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,113,113)\"></rect>\n<rect class=\"S_0\" bbox=\"278,105,20,195\" layer=\"0,0,0,0\" x=\"278\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,288,202)\"></rect>\n<rect class=\"S_0\" bbox=\"103,105,20,195\" layer=\"0,0,0,0\" x=\"103\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,113,202)\"></rect>\n<rect class=\"S_0\" bbox=\"189,13,24,195\" layer=\"0,0,0,0\" x=\"189\" y=\"13\" rx=\"0\" ry=\"0\" width=\"24\" height=\"195\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(90,201,110)\"></rect>\n<rect class=\"S_0\" bbox=\"189,194,24,195\" layer=\"0,0,0,0\" x=\"189\" y=\"194\" rx=\"0\" ry=\"0\" width=\"24\" height=\"195\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(90,201,291)\"></rect>",
         "\n<polygon class=\"S_0\" bbox=\"101,103,197,195\" layer=\"0,0,0,0\" points=\"101,103 298,103 298,298 101,298 \" fill=\"rgb(55,124,62)\" opacity=\"1\"></polygon>\n<rect class=\"S_0\" bbox=\"102,103,197,24\" layer=\"0,0,0,0\" x=\"102\" y=\"103\" rx=\"0\" ry=\"0\" width=\"197\" height=\"24\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(0,200,115)\"></rect>\n<rect class=\"S_0\" bbox=\"275,104,24,185\" layer=\"0,0,0,0\" x=\"275\" y=\"104\" rx=\"0\" ry=\"0\" width=\"24\" height=\"185\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(0,287,196)\"></rect>\n<rect class=\"S_0\" bbox=\"111,274,188,24\" layer=\"0,0,0,0\" x=\"111\" y=\"274\" rx=\"0\" ry=\"0\" width=\"188\" height=\"24\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(0,205,286)\"></rect>\n<rect class=\"S_0\" bbox=\"102,104,24,194\" layer=\"0,0,0,0\" x=\"102\" y=\"104\" rx=\"0\" ry=\"0\" width=\"24\" height=\"194\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(0,114,201)\"></rect>",
         "\n<polygon class=\"S_0\" bbox=\"115,118,172,171\" layer=\"0,0,0,0\" points=\"115,119 287,118 287,289 115,289 \" fill=\"rgb(51,51,51)\" opacity=\"1\"></polygon>\n<polygon class=\"S_0\" bbox=\"106,204,192,96\" layer=\"0,0,0,0\" points=\"106,204 298,204 298,300 106,300 \" fill=\"rgb(55,124,62)\" opacity=\"1\"></polygon>\n<rect class=\"S_0\" bbox=\"189,13,24,195\" layer=\"0,0,0,0\" x=\"189\" y=\"13\" rx=\"0\" ry=\"0\" width=\"24\" height=\"195\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(90,201,110)\"></rect>\n<rect class=\"S_0\" bbox=\"103,105,20,195\" layer=\"0,0,0,0\" x=\"103\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(0,113,202)\"></rect>\n<rect class=\"S_0\" bbox=\"278,105,20,195\" layer=\"0,0,0,0\" x=\"278\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(0,288,202)\"></rect>\n<rect class=\"S_0\" bbox=\"189,191,24,195\" layer=\"0,0,0,0\" x=\"189\" y=\"191\" rx=\"0\" ry=\"0\" width=\"24\" height=\"195\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(90,201,288)\"></rect>",
         "\n<rect class=\"S_0\" bbox=\"101,116,200,171\" layer=\"0,0,0,0\" x=\"101\" y=\"116\" rx=\"0\" ry=\"0\" width=\"200\" height=\"171\" fill=\"rgb(51,51,51)\" opacity=\"1\" transform=\"rotate(0,201,201)\"></rect>\n<rect class=\"S_0\" bbox=\"290,103,20,195\" layer=\"0,0,0,0\" x=\"290\" y=\"103\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(211,80,70)\" opacity=\"1\" transform=\"rotate(0,300,200)\"></rect>\n<rect class=\"S_0\" bbox=\"90,103,20,195\" layer=\"0,0,0,0\" x=\"90\" y=\"103\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(211,80,70)\" opacity=\"1\" transform=\"rotate(0,100,200)\"></rect>\n<rect class=\"S_0\" bbox=\"190,3,20,220\" layer=\"0,0,0,0\" x=\"190\" y=\"3\" rx=\"0\" ry=\"0\" width=\"20\" height=\"220\" fill=\"rgb(211,80,70)\" opacity=\"1\" transform=\"rotate(90,200,113)\"></rect>\n<rect class=\"S_0\" bbox=\"190,178,20,220\" layer=\"0,0,0,0\" x=\"190\" y=\"178\" rx=\"0\" ry=\"0\" width=\"20\" height=\"220\" fill=\"rgb(211,80,70)\" opacity=\"1\" transform=\"rotate(90,200,288)\"></rect>",
         "\n<rect class=\"S_0\" bbox=\"101,116,200,171\" layer=\"0,0,0,0\" x=\"101\" y=\"116\" rx=\"0\" ry=\"0\" width=\"200\" height=\"171\" fill=\"rgb(51,51,51)\" opacity=\"1\" transform=\"rotate(0,201,201)\"></rect>\n<rect class=\"S_0\" bbox=\"290,103,20,195\" layer=\"0,0,0,0\" x=\"290\" y=\"103\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(211,80,70)\" opacity=\"1\" transform=\"rotate(0,300,200)\"></rect>\n<rect class=\"S_0\" bbox=\"90,103,20,195\" layer=\"0,0,0,0\" x=\"90\" y=\"103\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(211,80,70)\" opacity=\"1\" transform=\"rotate(0,100,200)\"></rect>\n<rect class=\"S_0\" bbox=\"190,3,20,220\" layer=\"0,0,0,0\" x=\"190\" y=\"3\" rx=\"0\" ry=\"0\" width=\"20\" height=\"220\" fill=\"rgb(211,80,70)\" opacity=\"1\" transform=\"rotate(90,200,113)\"></rect>\n<rect class=\"S_0\" bbox=\"190,178,20,220\" layer=\"0,0,0,0\" x=\"190\" y=\"178\" rx=\"0\" ry=\"0\" width=\"20\" height=\"220\" fill=\"rgb(211,80,70)\" opacity=\"1\" transform=\"rotate(90,200,288)\"></rect>",
         "\n<rect class=\"S_0\" bbox=\"101,116,200,171\" layer=\"0,0,0,0\" x=\"101\" y=\"116\" rx=\"0\" ry=\"0\" width=\"200\" height=\"171\" fill=\"rgb(51,51,51)\" opacity=\"1\" transform=\"rotate(0,201,201)\"></rect>\n<rect class=\"S_0\" bbox=\"290,103,20,195\" layer=\"0,0,0,0\" x=\"290\" y=\"103\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(211,80,70)\" opacity=\"1\" transform=\"rotate(0,300,200)\"></rect>\n<rect class=\"S_0\" bbox=\"90,103,20,195\" layer=\"0,0,0,0\" x=\"90\" y=\"103\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(211,80,70)\" opacity=\"1\" transform=\"rotate(0,100,200)\"></rect>\n<rect class=\"S_0\" bbox=\"190,3,20,220\" layer=\"0,0,0,0\" x=\"190\" y=\"3\" rx=\"0\" ry=\"0\" width=\"20\" height=\"220\" fill=\"rgb(211,80,70)\" opacity=\"1\" transform=\"rotate(90,200,113)\"></rect>\n<rect class=\"S_0\" bbox=\"190,178,20,220\" layer=\"0,0,0,0\" x=\"190\" y=\"178\" rx=\"0\" ry=\"0\" width=\"20\" height=\"220\" fill=\"rgb(211,80,70)\" opacity=\"1\" transform=\"rotate(90,200,288)\"></rect>"
      ],
      "Symtab_218" : [
         "\n<rect class=\"S_0\" bbox=\"168,55,65,290\" layer=\"0,0,0,0\" x=\"168\" y=\"55\" rx=\"0\" ry=\"0\" width=\"65\" height=\"290\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(315,200,200)\"></rect>\n\n<circle class=\"S_0\" bbox=\"126,126,148,148\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" r=\"74\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"168,55,65,290\" layer=\"0,0,0,0\" x=\"168\" y=\"55\" rx=\"0\" ry=\"0\" width=\"65\" height=\"290\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n\n<circle class=\"S_0\" bbox=\"126,126,148,148\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" r=\"74\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"55,168,290,65\" layer=\"0,0,0,0\" x=\"55\" y=\"168\" rx=\"0\" ry=\"0\" width=\"290\" height=\"65\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n\n<circle class=\"S_0\" bbox=\"126,126,148,148\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" r=\"74\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"168,55,65,290\" layer=\"0,0,0,0\" x=\"168\" y=\"55\" rx=\"0\" ry=\"0\" width=\"65\" height=\"290\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(315,200,200)\"></rect>\n\n<circle class=\"S_0\" bbox=\"126,126,148,148\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" r=\"74\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"168,55,65,290\" layer=\"0,0,0,0\" x=\"168\" y=\"55\" rx=\"0\" ry=\"0\" width=\"65\" height=\"290\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(315,200,200)\"></rect>\n\n<circle class=\"S_0\" bbox=\"126,126,148,148\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" r=\"74\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"168,55,65,290\" layer=\"0,0,0,0\" x=\"168\" y=\"55\" rx=\"0\" ry=\"0\" width=\"65\" height=\"290\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(315,200,200)\"></rect>\n\n<circle class=\"S_0\" bbox=\"126,126,148,148\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" r=\"74\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"168,55,65,290\" layer=\"0,0,0,0\" x=\"168\" y=\"55\" rx=\"0\" ry=\"0\" width=\"65\" height=\"290\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(315,200,200)\"></rect>\n\n<circle class=\"S_0\" bbox=\"126,126,148,148\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" r=\"74\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>"
      ],
      "Symtab_219" : [
         "\n<rect class=\"S_0\" bbox=\"168,55,65,290\" layer=\"0,0,0,0\" x=\"168\" y=\"55\" rx=\"0\" ry=\"0\" width=\"65\" height=\"290\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(315,200,200)\"></rect>\n\n<circle class=\"S_0\" bbox=\"126,126,148,148\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" r=\"74\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"55,168,290,65\" layer=\"0,0,0,0\" x=\"55\" y=\"168\" rx=\"0\" ry=\"0\" width=\"290\" height=\"65\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n\n<circle class=\"S_0\" bbox=\"126,126,148,148\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" r=\"74\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"168,55,65,290\" layer=\"0,0,0,0\" x=\"168\" y=\"55\" rx=\"0\" ry=\"0\" width=\"65\" height=\"290\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n\n<circle class=\"S_0\" bbox=\"126,126,148,148\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" r=\"74\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"168,55,65,290\" layer=\"0,0,0,0\" x=\"168\" y=\"55\" rx=\"0\" ry=\"0\" width=\"65\" height=\"290\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(315,200,200)\"></rect>\n\n<circle class=\"S_0\" bbox=\"126,126,148,148\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" r=\"74\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"168,55,65,290\" layer=\"0,0,0,0\" x=\"168\" y=\"55\" rx=\"0\" ry=\"0\" width=\"65\" height=\"290\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(315,200,200)\"></rect>\n\n<circle class=\"S_0\" bbox=\"126,126,148,148\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" r=\"74\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"168,55,65,290\" layer=\"0,0,0,0\" x=\"168\" y=\"55\" rx=\"0\" ry=\"0\" width=\"65\" height=\"290\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(315,200,200)\"></rect>\n\n<circle class=\"S_0\" bbox=\"126,126,148,148\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" r=\"74\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"168,55,65,290\" layer=\"0,0,0,0\" x=\"168\" y=\"55\" rx=\"0\" ry=\"0\" width=\"65\" height=\"290\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(315,200,200)\"></rect>\n\n<circle class=\"S_0\" bbox=\"126,126,148,148\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" r=\"74\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>"
      ],
      "Symtab_22" : [
         "\n<polygon class=\"S_0\" bbox=\"101,103,197,195\" layer=\"0,0,0,0\" points=\"101,103 298,103 298,298 101,298 \" fill=\"rgb(55,124,62)\" opacity=\"1\"></polygon>\n<rect class=\"S_0\" bbox=\"102,103,197,24\" layer=\"0,0,0,0\" x=\"102\" y=\"103\" rx=\"0\" ry=\"0\" width=\"197\" height=\"24\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(0,200,115)\"></rect>\n<rect class=\"S_0\" bbox=\"275,104,24,185\" layer=\"0,0,0,0\" x=\"275\" y=\"104\" rx=\"0\" ry=\"0\" width=\"24\" height=\"185\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(0,287,196)\"></rect>\n<rect class=\"S_0\" bbox=\"111,274,188,24\" layer=\"0,0,0,0\" x=\"111\" y=\"274\" rx=\"0\" ry=\"0\" width=\"188\" height=\"24\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(0,205,286)\"></rect>\n<rect class=\"S_0\" bbox=\"102,104,24,194\" layer=\"0,0,0,0\" x=\"102\" y=\"104\" rx=\"0\" ry=\"0\" width=\"24\" height=\"194\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(0,114,201)\"></rect>",
         "\n<polygon class=\"S_0\" bbox=\"101,103,197,195\" layer=\"0,0,0,0\" points=\"101,103 298,103 298,298 101,298 \" fill=\"rgb(55,124,62)\" opacity=\"1\"></polygon>\n<rect class=\"S_0\" bbox=\"102,103,197,24\" layer=\"0,0,0,0\" x=\"102\" y=\"103\" rx=\"0\" ry=\"0\" width=\"197\" height=\"24\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(0,200,115)\"></rect>\n<rect class=\"S_0\" bbox=\"275,104,24,185\" layer=\"0,0,0,0\" x=\"275\" y=\"104\" rx=\"0\" ry=\"0\" width=\"24\" height=\"185\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(0,287,196)\"></rect>\n<rect class=\"S_0\" bbox=\"111,274,188,24\" layer=\"0,0,0,0\" x=\"111\" y=\"274\" rx=\"0\" ry=\"0\" width=\"188\" height=\"24\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(0,205,286)\"></rect>\n<rect class=\"S_0\" bbox=\"102,104,24,194\" layer=\"0,0,0,0\" x=\"102\" y=\"104\" rx=\"0\" ry=\"0\" width=\"24\" height=\"194\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(0,114,201)\"></rect>",
         "\n<polygon class=\"S_0\" bbox=\"101,103,197,195\" layer=\"0,0,0,0\" points=\"101,103 298,103 298,298 101,298 \" fill=\"rgb(55,124,62)\" opacity=\"1\"></polygon>\n<rect class=\"S_0\" bbox=\"102,103,197,24\" layer=\"0,0,0,0\" x=\"102\" y=\"103\" rx=\"0\" ry=\"0\" width=\"197\" height=\"24\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(0,200,115)\"></rect>\n<rect class=\"S_0\" bbox=\"275,104,24,185\" layer=\"0,0,0,0\" x=\"275\" y=\"104\" rx=\"0\" ry=\"0\" width=\"24\" height=\"185\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(0,287,196)\"></rect>\n<rect class=\"S_0\" bbox=\"111,274,188,24\" layer=\"0,0,0,0\" x=\"111\" y=\"274\" rx=\"0\" ry=\"0\" width=\"188\" height=\"24\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(0,205,286)\"></rect>\n<rect class=\"S_0\" bbox=\"102,104,24,194\" layer=\"0,0,0,0\" x=\"102\" y=\"104\" rx=\"0\" ry=\"0\" width=\"24\" height=\"194\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(0,114,201)\"></rect>",
         "\n<polygon class=\"S_0\" bbox=\"45,87,309,227\" layer=\"0,0,0,0\" points=\"45,314 354,314 291,87 107,87 \" fill=\"rgb(0,255,255)\" opacity=\"1\"></polygon>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>"
      ],
      "Symtab_23" : [
         "\n<polygon class=\"S_0\" bbox=\"115,118,172,171\" layer=\"0,0,0,0\" points=\"115,119 287,118 287,289 115,289 \" fill=\"rgb(51,51,51)\" opacity=\"1\"></polygon>\n<rect class=\"S_0\" bbox=\"103,105,20,17\" layer=\"0,0,0,0\" x=\"103\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"17\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,113,113)\"></rect>\n<rect class=\"S_0\" bbox=\"278,105,20,195\" layer=\"0,0,0,0\" x=\"278\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,288,202)\"></rect>\n<rect class=\"S_0\" bbox=\"103,105,20,195\" layer=\"0,0,0,0\" x=\"103\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,113,202)\"></rect>\n<rect class=\"S_0\" bbox=\"189,13,24,195\" layer=\"0,0,0,0\" x=\"189\" y=\"13\" rx=\"0\" ry=\"0\" width=\"24\" height=\"195\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(90,201,110)\"></rect>\n<rect class=\"S_0\" bbox=\"189,194,24,195\" layer=\"0,0,0,0\" x=\"189\" y=\"194\" rx=\"0\" ry=\"0\" width=\"24\" height=\"195\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(90,201,291)\"></rect>",
         "\n<polygon class=\"S_0\" bbox=\"115,118,172,171\" layer=\"0,0,0,0\" points=\"115,119 287,118 287,289 115,289 \" fill=\"rgb(51,51,51)\" opacity=\"1\"></polygon>\n<rect class=\"S_0\" bbox=\"103,105,20,17\" layer=\"0,0,0,0\" x=\"103\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"17\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,113,113)\"></rect>\n<rect class=\"S_0\" bbox=\"278,105,20,195\" layer=\"0,0,0,0\" x=\"278\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,288,202)\"></rect>\n<rect class=\"S_0\" bbox=\"103,105,20,195\" layer=\"0,0,0,0\" x=\"103\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,113,202)\"></rect>\n<rect class=\"S_0\" bbox=\"189,13,24,195\" layer=\"0,0,0,0\" x=\"189\" y=\"13\" rx=\"0\" ry=\"0\" width=\"24\" height=\"195\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(90,201,110)\"></rect>\n<rect class=\"S_0\" bbox=\"189,194,24,195\" layer=\"0,0,0,0\" x=\"189\" y=\"194\" rx=\"0\" ry=\"0\" width=\"24\" height=\"195\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(90,201,291)\"></rect>",
         "\n<polygon class=\"S_0\" bbox=\"115,118,172,171\" layer=\"0,0,0,0\" points=\"115,119 287,118 287,289 115,289 \" fill=\"rgb(51,51,51)\" opacity=\"1\"></polygon>\n<rect class=\"S_0\" bbox=\"103,105,20,17\" layer=\"0,0,0,0\" x=\"103\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"17\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,113,113)\"></rect>\n<rect class=\"S_0\" bbox=\"278,105,20,195\" layer=\"0,0,0,0\" x=\"278\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,288,202)\"></rect>\n<rect class=\"S_0\" bbox=\"103,105,20,195\" layer=\"0,0,0,0\" x=\"103\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,113,202)\"></rect>\n<rect class=\"S_0\" bbox=\"189,13,24,195\" layer=\"0,0,0,0\" x=\"189\" y=\"13\" rx=\"0\" ry=\"0\" width=\"24\" height=\"195\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(90,201,110)\"></rect>\n<rect class=\"S_0\" bbox=\"189,194,24,195\" layer=\"0,0,0,0\" x=\"189\" y=\"194\" rx=\"0\" ry=\"0\" width=\"24\" height=\"195\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(90,201,291)\"></rect>",
         "\n\n<circle class=\"S_0\" bbox=\"94,94,212,212\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" r=\"106\" fill=\"rgb(255,255,0)\" opacity=\"1\" stroke-width=\"1\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>\n<text class=\"S_0\" bbox=\"172,238,72,96\" text-anchor=\"start\" pointer-events=\"none\" layer=\"0,0,0,0\" x=\"172\" y=\"238\" fill=\"rgb(0,0,0)\" opacity=\"1\" font-size=\"72pt\" font-family=\"Tahoma \" font-weight=\"700\" font-style=\"normal\" transform=\"rotate(0,172,238)\">&#71;</text>\n",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>"
      ],
      "Symtab_24" : [
         "\n<rect class=\"S_0\" bbox=\"189,73,22,255\" layer=\"0,0,0,0\" x=\"189\" y=\"73\" rx=\"0\" ry=\"0\" width=\"22\" height=\"255\" fill=\"rgb(226,184,80)\" opacity=\"1\" transform=\"rotate(315,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"190,73,22,255\" layer=\"0,0,0,0\" x=\"190\" y=\"73\" rx=\"0\" ry=\"0\" width=\"22\" height=\"255\" fill=\"rgb(226,184,80)\" opacity=\"1\" transform=\"rotate(45,201,200)\"></rect>",
         "\n<rect class=\"S_0\" bbox=\"189,73,22,255\" layer=\"0,0,0,0\" x=\"189\" y=\"73\" rx=\"0\" ry=\"0\" width=\"22\" height=\"255\" fill=\"rgb(226,184,80)\" opacity=\"1\" transform=\"rotate(315,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"190,73,22,255\" layer=\"0,0,0,0\" x=\"190\" y=\"73\" rx=\"0\" ry=\"0\" width=\"22\" height=\"255\" fill=\"rgb(226,184,80)\" opacity=\"1\" transform=\"rotate(45,201,200)\"></rect>",
         "\n<rect class=\"S_0\" bbox=\"189,73,22,255\" layer=\"0,0,0,0\" x=\"189\" y=\"73\" rx=\"0\" ry=\"0\" width=\"22\" height=\"255\" fill=\"rgb(226,184,80)\" opacity=\"1\" transform=\"rotate(315,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"190,73,22,255\" layer=\"0,0,0,0\" x=\"190\" y=\"73\" rx=\"0\" ry=\"0\" width=\"22\" height=\"255\" fill=\"rgb(226,184,80)\" opacity=\"1\" transform=\"rotate(45,201,200)\"></rect>",
         "\n<rect class=\"S_0\" bbox=\"189,73,22,255\" layer=\"0,0,0,0\" x=\"189\" y=\"73\" rx=\"0\" ry=\"0\" width=\"22\" height=\"255\" fill=\"rgb(226,184,80)\" opacity=\"1\" transform=\"rotate(315,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"190,73,22,255\" layer=\"0,0,0,0\" x=\"190\" y=\"73\" rx=\"0\" ry=\"0\" width=\"22\" height=\"255\" fill=\"rgb(226,184,80)\" opacity=\"1\" transform=\"rotate(45,201,200)\"></rect>",
         "\n<rect class=\"S_0\" bbox=\"189,73,22,255\" layer=\"0,0,0,0\" x=\"189\" y=\"73\" rx=\"0\" ry=\"0\" width=\"22\" height=\"255\" fill=\"rgb(125,196,254)\" opacity=\"1\" transform=\"rotate(315,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"190,73,22,255\" layer=\"0,0,0,0\" x=\"190\" y=\"73\" rx=\"0\" ry=\"0\" width=\"22\" height=\"255\" fill=\"rgb(125,196,254)\" opacity=\"1\" transform=\"rotate(45,201,200)\"></rect>",
         "\n<rect class=\"S_0\" bbox=\"189,73,22,255\" layer=\"0,0,0,0\" x=\"189\" y=\"73\" rx=\"0\" ry=\"0\" width=\"22\" height=\"255\" fill=\"rgb(125,196,254)\" opacity=\"1\" transform=\"rotate(315,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"190,73,22,255\" layer=\"0,0,0,0\" x=\"190\" y=\"73\" rx=\"0\" ry=\"0\" width=\"22\" height=\"255\" fill=\"rgb(125,196,254)\" opacity=\"1\" transform=\"rotate(45,201,200)\"></rect>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>"
      ],
      "Symtab_28" : [
         "\n<polygon class=\"S_0\" bbox=\"115,118,172,171\" layer=\"0,0,0,0\" points=\"115,119 287,118 287,289 115,289 \" fill=\"rgb(51,51,51)\" opacity=\"1\"></polygon>\n<polygon class=\"S_0\" bbox=\"106,204,192,96\" layer=\"0,0,0,0\" points=\"106,204 298,204 298,300 106,300 \" fill=\"rgb(55,124,62)\" opacity=\"1\"></polygon>\n<rect class=\"S_0\" bbox=\"189,13,24,195\" layer=\"0,0,0,0\" x=\"189\" y=\"13\" rx=\"0\" ry=\"0\" width=\"24\" height=\"195\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(90,201,110)\"></rect>\n<rect class=\"S_0\" bbox=\"103,105,20,195\" layer=\"0,0,0,0\" x=\"103\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(0,113,202)\"></rect>\n<rect class=\"S_0\" bbox=\"278,105,20,195\" layer=\"0,0,0,0\" x=\"278\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(0,288,202)\"></rect>\n<rect class=\"S_0\" bbox=\"189,191,24,195\" layer=\"0,0,0,0\" x=\"189\" y=\"191\" rx=\"0\" ry=\"0\" width=\"24\" height=\"195\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(90,201,288)\"></rect>",
         "\n<polygon class=\"S_0\" bbox=\"115,118,172,171\" layer=\"0,0,0,0\" points=\"115,119 287,118 287,289 115,289 \" fill=\"rgb(51,51,51)\" opacity=\"1\"></polygon>\n<polygon class=\"S_0\" bbox=\"106,204,192,96\" layer=\"0,0,0,0\" points=\"106,204 298,204 298,300 106,300 \" fill=\"rgb(55,124,62)\" opacity=\"1\"></polygon>\n<rect class=\"S_0\" bbox=\"189,13,24,195\" layer=\"0,0,0,0\" x=\"189\" y=\"13\" rx=\"0\" ry=\"0\" width=\"24\" height=\"195\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(90,201,110)\"></rect>\n<rect class=\"S_0\" bbox=\"103,105,20,195\" layer=\"0,0,0,0\" x=\"103\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(0,113,202)\"></rect>\n<rect class=\"S_0\" bbox=\"278,105,20,195\" layer=\"0,0,0,0\" x=\"278\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(0,288,202)\"></rect>\n<rect class=\"S_0\" bbox=\"189,191,24,195\" layer=\"0,0,0,0\" x=\"189\" y=\"191\" rx=\"0\" ry=\"0\" width=\"24\" height=\"195\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(90,201,288)\"></rect>",
         "\n<polygon class=\"S_0\" bbox=\"115,118,172,171\" layer=\"0,0,0,0\" points=\"115,119 287,118 287,289 115,289 \" fill=\"rgb(51,51,51)\" opacity=\"1\"></polygon>\n<polygon class=\"S_0\" bbox=\"106,204,192,96\" layer=\"0,0,0,0\" points=\"106,204 298,204 298,300 106,300 \" fill=\"rgb(55,124,62)\" opacity=\"1\"></polygon>\n<rect class=\"S_0\" bbox=\"189,13,24,195\" layer=\"0,0,0,0\" x=\"189\" y=\"13\" rx=\"0\" ry=\"0\" width=\"24\" height=\"195\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(90,201,110)\"></rect>\n<rect class=\"S_0\" bbox=\"103,105,20,195\" layer=\"0,0,0,0\" x=\"103\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(0,113,202)\"></rect>\n<rect class=\"S_0\" bbox=\"278,105,20,195\" layer=\"0,0,0,0\" x=\"278\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(0,288,202)\"></rect>\n<rect class=\"S_0\" bbox=\"189,191,24,195\" layer=\"0,0,0,0\" x=\"189\" y=\"191\" rx=\"0\" ry=\"0\" width=\"24\" height=\"195\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(90,201,288)\"></rect>",
         "\n<polygon class=\"S_0\" bbox=\"115,118,172,171\" layer=\"0,0,0,0\" points=\"115,119 287,118 287,289 115,289 \" fill=\"rgb(51,51,51)\" opacity=\"1\"></polygon>\n<polygon class=\"S_0\" bbox=\"106,204,192,96\" layer=\"0,0,0,0\" points=\"106,204 298,204 298,300 106,300 \" fill=\"rgb(55,124,62)\" opacity=\"1\"></polygon>\n<rect class=\"S_0\" bbox=\"189,13,24,195\" layer=\"0,0,0,0\" x=\"189\" y=\"13\" rx=\"0\" ry=\"0\" width=\"24\" height=\"195\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(90,201,110)\"></rect>\n<rect class=\"S_0\" bbox=\"103,105,20,195\" layer=\"0,0,0,0\" x=\"103\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(0,113,202)\"></rect>\n<rect class=\"S_0\" bbox=\"278,105,20,195\" layer=\"0,0,0,0\" x=\"278\" y=\"105\" rx=\"0\" ry=\"0\" width=\"20\" height=\"195\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(0,288,202)\"></rect>\n<rect class=\"S_0\" bbox=\"189,191,24,195\" layer=\"0,0,0,0\" x=\"189\" y=\"191\" rx=\"0\" ry=\"0\" width=\"24\" height=\"195\" fill=\"rgb(55,124,62)\" opacity=\"1\" transform=\"rotate(90,201,288)\"></rect>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>"
      ],
      "Symtab_3" : [
         "\n<rect class=\"S_0\" bbox=\"124,32,152,336\" layer=\"0,0,0,0\" x=\"124\" y=\"32\" rx=\"0\" ry=\"0\" width=\"152\" height=\"336\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n\n<ellipse class=\"S_0\" bbox=\"165,324,24,24\" layer=\"0,0,0,0\" cx=\"177\" cy=\"336\" rx=\"12\" ry=\"12\" fill=\"rgb(0,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"203,324,24,24\" layer=\"0,0,0,0\" cx=\"215\" cy=\"336\" rx=\"12\" ry=\"12\" fill=\"rgb(0,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"241,324,24,24\" layer=\"0,0,0,0\" cx=\"253\" cy=\"336\" rx=\"12\" ry=\"12\" fill=\"rgb(0,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,99,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"108\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,124,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"133\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,149,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"158\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,174,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"183\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,276,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"285\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,251,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"260\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,226,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"235\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,201,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"210\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,99,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"108\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,124,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"133\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,149,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"158\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,174,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"183\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,276,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"285\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,251,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"260\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,226,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"235\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,201,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"210\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"141,54,18,18\" layer=\"0,0,0,0\" cx=\"150\" cy=\"63\" rx=\"9\" ry=\"9\" fill=\"rgb(139,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"141,79,18,18\" layer=\"0,0,0,0\" cx=\"150\" cy=\"88\" rx=\"9\" ry=\"9\" fill=\"rgb(255,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"141,104,18,18\" layer=\"0,0,0,0\" cx=\"150\" cy=\"113\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>",
         "\n<rect class=\"S_0\" bbox=\"124,32,152,336\" layer=\"0,0,0,0\" x=\"124\" y=\"32\" rx=\"0\" ry=\"0\" width=\"152\" height=\"336\" fill=\"rgb(127,127,127)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n\n<ellipse class=\"S_0\" bbox=\"165,324,24,24\" layer=\"0,0,0,0\" cx=\"177\" cy=\"336\" rx=\"12\" ry=\"12\" fill=\"rgb(0,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"203,324,24,24\" layer=\"0,0,0,0\" cx=\"215\" cy=\"336\" rx=\"12\" ry=\"12\" fill=\"rgb(0,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"241,324,24,24\" layer=\"0,0,0,0\" cx=\"253\" cy=\"336\" rx=\"12\" ry=\"12\" fill=\"rgb(0,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,99,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"108\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,124,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"133\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,149,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"158\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,174,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"183\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,276,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"285\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,251,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"260\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,226,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"235\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,201,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"210\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,99,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"108\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,124,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"133\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,149,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"158\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,174,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"183\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,276,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"285\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,251,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"260\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,226,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"235\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,201,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"210\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"141,54,18,18\" layer=\"0,0,0,0\" cx=\"150\" cy=\"63\" rx=\"9\" ry=\"9\" fill=\"rgb(255,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"141,79,18,18\" layer=\"0,0,0,0\" cx=\"150\" cy=\"88\" rx=\"9\" ry=\"9\" fill=\"rgb(255,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"141,104,18,18\" layer=\"0,0,0,0\" cx=\"150\" cy=\"113\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>",
         "\n<rect class=\"S_0\" bbox=\"124,32,152,336\" layer=\"0,0,0,0\" x=\"124\" y=\"32\" rx=\"0\" ry=\"0\" width=\"152\" height=\"336\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n\n<ellipse class=\"S_0\" bbox=\"165,324,24,24\" layer=\"0,0,0,0\" cx=\"177\" cy=\"336\" rx=\"12\" ry=\"12\" fill=\"rgb(0,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"203,324,24,24\" layer=\"0,0,0,0\" cx=\"215\" cy=\"336\" rx=\"12\" ry=\"12\" fill=\"rgb(0,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"241,324,24,24\" layer=\"0,0,0,0\" cx=\"253\" cy=\"336\" rx=\"12\" ry=\"12\" fill=\"rgb(0,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,99,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"108\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,124,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"133\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,149,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"158\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,174,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"183\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,276,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"285\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,251,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"260\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,226,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"235\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,201,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"210\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,99,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"108\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,124,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"133\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,149,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"158\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,174,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"183\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,276,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"285\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,251,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"260\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,226,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"235\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,201,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"210\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"141,54,18,18\" layer=\"0,0,0,0\" cx=\"150\" cy=\"63\" rx=\"9\" ry=\"9\" fill=\"rgb(139,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"141,79,18,18\" layer=\"0,0,0,0\" cx=\"150\" cy=\"88\" rx=\"9\" ry=\"9\" fill=\"rgb(255,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"141,104,18,18\" layer=\"0,0,0,0\" cx=\"150\" cy=\"113\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>",
         "\n<rect class=\"S_0\" bbox=\"124,32,152,336\" layer=\"0,0,0,0\" x=\"124\" y=\"32\" rx=\"0\" ry=\"0\" width=\"152\" height=\"336\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n\n<ellipse class=\"S_0\" bbox=\"165,324,24,24\" layer=\"0,0,0,0\" cx=\"177\" cy=\"336\" rx=\"12\" ry=\"12\" fill=\"rgb(0,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"203,324,24,24\" layer=\"0,0,0,0\" cx=\"215\" cy=\"336\" rx=\"12\" ry=\"12\" fill=\"rgb(0,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"241,324,24,24\" layer=\"0,0,0,0\" cx=\"253\" cy=\"336\" rx=\"12\" ry=\"12\" fill=\"rgb(0,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,99,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"108\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,124,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"133\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,149,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"158\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,174,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"183\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,276,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"285\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,251,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"260\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,226,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"235\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,201,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"210\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,99,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"108\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,124,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"133\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,149,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"158\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,174,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"183\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,276,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"285\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,251,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"260\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,226,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"235\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,201,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"210\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"141,54,18,18\" layer=\"0,0,0,0\" cx=\"150\" cy=\"63\" rx=\"9\" ry=\"9\" fill=\"rgb(139,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"141,79,18,18\" layer=\"0,0,0,0\" cx=\"150\" cy=\"88\" rx=\"9\" ry=\"9\" fill=\"rgb(255,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"141,104,18,18\" layer=\"0,0,0,0\" cx=\"150\" cy=\"113\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>",
         "\n<rect class=\"S_0\" bbox=\"124,32,152,336\" layer=\"0,0,0,0\" x=\"124\" y=\"32\" rx=\"0\" ry=\"0\" width=\"152\" height=\"336\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n\n<ellipse class=\"S_0\" bbox=\"165,324,24,24\" layer=\"0,0,0,0\" cx=\"177\" cy=\"336\" rx=\"12\" ry=\"12\" fill=\"rgb(0,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"203,324,24,24\" layer=\"0,0,0,0\" cx=\"215\" cy=\"336\" rx=\"12\" ry=\"12\" fill=\"rgb(0,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"241,324,24,24\" layer=\"0,0,0,0\" cx=\"253\" cy=\"336\" rx=\"12\" ry=\"12\" fill=\"rgb(0,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,99,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"108\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,124,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"133\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,149,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"158\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,174,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"183\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,276,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"285\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,251,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"260\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,226,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"235\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,201,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"210\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,99,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"108\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,124,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"133\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,149,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"158\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,174,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"183\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,276,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"285\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,251,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"260\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,226,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"235\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,201,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"210\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"141,54,18,18\" layer=\"0,0,0,0\" cx=\"150\" cy=\"63\" rx=\"9\" ry=\"9\" fill=\"rgb(139,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"141,79,18,18\" layer=\"0,0,0,0\" cx=\"150\" cy=\"88\" rx=\"9\" ry=\"9\" fill=\"rgb(255,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"141,104,18,18\" layer=\"0,0,0,0\" cx=\"150\" cy=\"113\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>",
         "\n<rect class=\"S_0\" bbox=\"124,32,152,336\" layer=\"0,0,0,0\" x=\"124\" y=\"32\" rx=\"0\" ry=\"0\" width=\"152\" height=\"336\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n\n<ellipse class=\"S_0\" bbox=\"165,324,24,24\" layer=\"0,0,0,0\" cx=\"177\" cy=\"336\" rx=\"12\" ry=\"12\" fill=\"rgb(0,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"203,324,24,24\" layer=\"0,0,0,0\" cx=\"215\" cy=\"336\" rx=\"12\" ry=\"12\" fill=\"rgb(0,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"241,324,24,24\" layer=\"0,0,0,0\" cx=\"253\" cy=\"336\" rx=\"12\" ry=\"12\" fill=\"rgb(0,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,99,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"108\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,124,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"133\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,149,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"158\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,174,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"183\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,276,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"285\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,251,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"260\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,226,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"235\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,201,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"210\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,99,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"108\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,124,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"133\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,149,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"158\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,174,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"183\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,276,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"285\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,251,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"260\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,226,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"235\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,201,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"210\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"141,54,18,18\" layer=\"0,0,0,0\" cx=\"150\" cy=\"63\" rx=\"9\" ry=\"9\" fill=\"rgb(139,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"141,79,18,18\" layer=\"0,0,0,0\" cx=\"150\" cy=\"88\" rx=\"9\" ry=\"9\" fill=\"rgb(255,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"141,104,18,18\" layer=\"0,0,0,0\" cx=\"150\" cy=\"113\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>",
         "\n<rect class=\"S_0\" bbox=\"124,32,152,336\" layer=\"0,0,0,0\" x=\"124\" y=\"32\" rx=\"0\" ry=\"0\" width=\"152\" height=\"336\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n\n<ellipse class=\"S_0\" bbox=\"165,324,24,24\" layer=\"0,0,0,0\" cx=\"177\" cy=\"336\" rx=\"12\" ry=\"12\" fill=\"rgb(0,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"203,324,24,24\" layer=\"0,0,0,0\" cx=\"215\" cy=\"336\" rx=\"12\" ry=\"12\" fill=\"rgb(0,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"241,324,24,24\" layer=\"0,0,0,0\" cx=\"253\" cy=\"336\" rx=\"12\" ry=\"12\" fill=\"rgb(0,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,99,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"108\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,124,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"133\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,149,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"158\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,174,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"183\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,276,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"285\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,251,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"260\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,226,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"235\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"201,201,18,18\" layer=\"0,0,0,0\" cx=\"210\" cy=\"210\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,99,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"108\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,124,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"133\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,149,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"158\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,174,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"183\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,276,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"285\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,251,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"260\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,226,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"235\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"225,201,18,18\" layer=\"0,0,0,0\" cx=\"234\" cy=\"210\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"141,54,18,18\" layer=\"0,0,0,0\" cx=\"150\" cy=\"63\" rx=\"9\" ry=\"9\" fill=\"rgb(139,0,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"141,79,18,18\" layer=\"0,0,0,0\" cx=\"150\" cy=\"88\" rx=\"9\" ry=\"9\" fill=\"rgb(255,255,0)\" opacity=\"1\"></ellipse>\n\n<ellipse class=\"S_0\" bbox=\"141,104,18,18\" layer=\"0,0,0,0\" cx=\"150\" cy=\"113\" rx=\"9\" ry=\"9\" fill=\"rgb(0,255,0)\" opacity=\"1\"></ellipse>"
      ],
      "Symtab_4" : [
         "\n<rect class=\"S_0\" bbox=\"34,31,332,339\" layer=\"0,0,0,0\" x=\"34\" y=\"31\" rx=\"0\" ry=\"0\" width=\"332\" height=\"339\" fill=\"rgb(225,225,225)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"43,39,315,322\" layer=\"0,0,0,0\" x=\"43\" y=\"39\" rx=\"0\" ry=\"0\" width=\"315\" height=\"322\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"241,286,96,49\" layer=\"0,0,0,0\" x=\"241\" y=\"286\" rx=\"0\" ry=\"0\" width=\"96\" height=\"49\" fill=\"rgb(255,255,255)\" opacity=\"1\" transform=\"rotate(0,289,310)\"></rect>\n<rect class=\"S_0\" bbox=\"65,288,161,41\" layer=\"0,0,0,0\" x=\"65\" y=\"288\" rx=\"0\" ry=\"0\" width=\"161\" height=\"41\" fill=\"rgb(255,255,255)\" opacity=\"1\" transform=\"rotate(0,145,308)\"></rect>\n<rect class=\"S_0\" bbox=\"72,149,257,100\" layer=\"0,0,0,0\" x=\"72\" y=\"149\" rx=\"0\" ry=\"0\" width=\"257\" height=\"100\" fill=\"rgb(165,42,0)\" opacity=\"1\" transform=\"rotate(0,200,199)\"></rect>\n<rect class=\"S_0\" bbox=\"74,70,254,41\" layer=\"0,0,0,0\" x=\"74\" y=\"70\" rx=\"0\" ry=\"0\" width=\"254\" height=\"41\" fill=\"rgb(255,255,255)\" opacity=\"1\" transform=\"rotate(0,201,90)\"></rect>\n<line class=\"S_0\" bbox=\"330,60,0,64\" layer=\"0,0,0,0\" x1=\"330\" y1=\"60\" x2=\"330\" y2=\"124\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"342,278,0,64\" layer=\"0,0,0,0\" x1=\"342\" y1=\"278\" x2=\"342\" y2=\"342\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<rect class=\"S_0\" bbox=\"242,285,96,50\" layer=\"0,0,0,0\" x=\"242\" y=\"285\" rx=\"0\" ry=\"0\" width=\"96\" height=\"50\" fill=\"transparent\" opacity=\"1\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,290,310)\"></rect>\n<line class=\"S_0\" bbox=\"238,278,0,64\" layer=\"0,0,0,0\" x1=\"238\" y1=\"278\" x2=\"238\" y2=\"342\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"142,288,0,44\" layer=\"0,0,0,0\" x1=\"142\" y1=\"288\" x2=\"142\" y2=\"332\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"290,289,0,44\" layer=\"0,0,0,0\" x1=\"290\" y1=\"289\" x2=\"290\" y2=\"333\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"182,289,0,44\" layer=\"0,0,0,0\" x1=\"182\" y1=\"289\" x2=\"182\" y2=\"333\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"101,289,0,44\" layer=\"0,0,0,0\" x1=\"101\" y1=\"289\" x2=\"101\" y2=\"333\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"224,278,0,64\" layer=\"0,0,0,0\" x1=\"224\" y1=\"278\" x2=\"224\" y2=\"342\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"61,278,0,64\" layer=\"0,0,0,0\" x1=\"61\" y1=\"278\" x2=\"61\" y2=\"342\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<rect class=\"S_0\" bbox=\"61,285,163,50\" layer=\"0,0,0,0\" x=\"61\" y=\"285\" rx=\"0\" ry=\"0\" width=\"163\" height=\"50\" fill=\"transparent\" opacity=\"1\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,142,310)\"></rect>\n<rect class=\"S_0\" bbox=\"70,149,260,100\" layer=\"0,0,0,0\" x=\"70\" y=\"149\" rx=\"0\" ry=\"0\" width=\"260\" height=\"100\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,199)\"></rect>\n<line class=\"S_0\" bbox=\"150,70,0,44\" layer=\"0,0,0,0\" x1=\"150\" y1=\"70\" x2=\"150\" y2=\"114\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"289,71,0,44\" layer=\"0,0,0,0\" x1=\"289\" y1=\"71\" x2=\"289\" y2=\"115\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"245,68,0,44\" layer=\"0,0,0,0\" x1=\"245\" y1=\"68\" x2=\"245\" y2=\"112\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"200,71,0,44\" layer=\"0,0,0,0\" x1=\"200\" y1=\"71\" x2=\"200\" y2=\"115\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"110,71,0,44\" layer=\"0,0,0,0\" x1=\"110\" y1=\"71\" x2=\"110\" y2=\"115\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"70,60,0,64\" layer=\"0,0,0,0\" x1=\"70\" y1=\"60\" x2=\"70\" y2=\"124\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<rect class=\"S_0\" bbox=\"70,67,260,50\" layer=\"0,0,0,0\" x=\"70\" y=\"67\" rx=\"0\" ry=\"0\" width=\"260\" height=\"50\" fill=\"transparent\" opacity=\"1\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,92)\"></rect>",
         "\n<rect class=\"S_0\" bbox=\"34,31,332,339\" layer=\"0,0,0,0\" x=\"34\" y=\"31\" rx=\"0\" ry=\"0\" width=\"332\" height=\"339\" fill=\"rgb(225,225,225)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"43,39,315,322\" layer=\"0,0,0,0\" x=\"43\" y=\"39\" rx=\"0\" ry=\"0\" width=\"315\" height=\"322\" fill=\"rgb(0,147,0)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"241,286,96,49\" layer=\"0,0,0,0\" x=\"241\" y=\"286\" rx=\"0\" ry=\"0\" width=\"96\" height=\"49\" fill=\"rgb(255,255,255)\" opacity=\"1\" transform=\"rotate(0,289,310)\"></rect>\n<rect class=\"S_0\" bbox=\"65,288,161,41\" layer=\"0,0,0,0\" x=\"65\" y=\"288\" rx=\"0\" ry=\"0\" width=\"161\" height=\"41\" fill=\"rgb(255,255,255)\" opacity=\"1\" transform=\"rotate(0,145,308)\"></rect>\n<rect class=\"S_0\" bbox=\"72,149,257,100\" layer=\"0,0,0,0\" x=\"72\" y=\"149\" rx=\"0\" ry=\"0\" width=\"257\" height=\"100\" fill=\"rgb(165,42,0)\" opacity=\"1\" transform=\"rotate(0,200,199)\"></rect>\n<rect class=\"S_0\" bbox=\"74,70,254,41\" layer=\"0,0,0,0\" x=\"74\" y=\"70\" rx=\"0\" ry=\"0\" width=\"254\" height=\"41\" fill=\"rgb(255,255,255)\" opacity=\"1\" transform=\"rotate(0,201,90)\"></rect>\n<line class=\"S_0\" bbox=\"330,60,0,64\" layer=\"0,0,0,0\" x1=\"330\" y1=\"60\" x2=\"330\" y2=\"124\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"342,278,0,64\" layer=\"0,0,0,0\" x1=\"342\" y1=\"278\" x2=\"342\" y2=\"342\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<rect class=\"S_0\" bbox=\"242,285,96,50\" layer=\"0,0,0,0\" x=\"242\" y=\"285\" rx=\"0\" ry=\"0\" width=\"96\" height=\"50\" fill=\"transparent\" opacity=\"1\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,290,310)\"></rect>\n<line class=\"S_0\" bbox=\"238,278,0,64\" layer=\"0,0,0,0\" x1=\"238\" y1=\"278\" x2=\"238\" y2=\"342\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"142,288,0,44\" layer=\"0,0,0,0\" x1=\"142\" y1=\"288\" x2=\"142\" y2=\"332\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"290,289,0,44\" layer=\"0,0,0,0\" x1=\"290\" y1=\"289\" x2=\"290\" y2=\"333\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"182,289,0,44\" layer=\"0,0,0,0\" x1=\"182\" y1=\"289\" x2=\"182\" y2=\"333\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"101,289,0,44\" layer=\"0,0,0,0\" x1=\"101\" y1=\"289\" x2=\"101\" y2=\"333\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"224,278,0,64\" layer=\"0,0,0,0\" x1=\"224\" y1=\"278\" x2=\"224\" y2=\"342\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"61,278,0,64\" layer=\"0,0,0,0\" x1=\"61\" y1=\"278\" x2=\"61\" y2=\"342\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<rect class=\"S_0\" bbox=\"61,285,163,50\" layer=\"0,0,0,0\" x=\"61\" y=\"285\" rx=\"0\" ry=\"0\" width=\"163\" height=\"50\" fill=\"transparent\" opacity=\"1\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,142,310)\"></rect>\n<rect class=\"S_0\" bbox=\"70,149,260,100\" layer=\"0,0,0,0\" x=\"70\" y=\"149\" rx=\"0\" ry=\"0\" width=\"260\" height=\"100\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,199)\"></rect>\n<line class=\"S_0\" bbox=\"150,70,0,44\" layer=\"0,0,0,0\" x1=\"150\" y1=\"70\" x2=\"150\" y2=\"114\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"289,71,0,44\" layer=\"0,0,0,0\" x1=\"289\" y1=\"71\" x2=\"289\" y2=\"115\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"245,68,0,44\" layer=\"0,0,0,0\" x1=\"245\" y1=\"68\" x2=\"245\" y2=\"112\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"200,71,0,44\" layer=\"0,0,0,0\" x1=\"200\" y1=\"71\" x2=\"200\" y2=\"115\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"110,71,0,44\" layer=\"0,0,0,0\" x1=\"110\" y1=\"71\" x2=\"110\" y2=\"115\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"70,60,0,64\" layer=\"0,0,0,0\" x1=\"70\" y1=\"60\" x2=\"70\" y2=\"124\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<rect class=\"S_0\" bbox=\"70,67,260,50\" layer=\"0,0,0,0\" x=\"70\" y=\"67\" rx=\"0\" ry=\"0\" width=\"260\" height=\"50\" fill=\"transparent\" opacity=\"1\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,92)\"></rect>",
         "\n<rect class=\"S_0\" bbox=\"34,31,332,339\" layer=\"0,0,0,0\" x=\"34\" y=\"31\" rx=\"0\" ry=\"0\" width=\"332\" height=\"339\" fill=\"rgb(225,225,225)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"42,39,315,322\" layer=\"0,0,0,0\" x=\"42\" y=\"39\" rx=\"0\" ry=\"0\" width=\"315\" height=\"322\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,199,200)\"></rect>\n<rect class=\"S_0\" bbox=\"241,286,96,49\" layer=\"0,0,0,0\" x=\"241\" y=\"286\" rx=\"0\" ry=\"0\" width=\"96\" height=\"49\" fill=\"rgb(255,255,255)\" opacity=\"1\" transform=\"rotate(0,289,310)\"></rect>\n<rect class=\"S_0\" bbox=\"65,288,161,41\" layer=\"0,0,0,0\" x=\"65\" y=\"288\" rx=\"0\" ry=\"0\" width=\"161\" height=\"41\" fill=\"rgb(255,255,255)\" opacity=\"1\" transform=\"rotate(0,145,308)\"></rect>\n<rect class=\"S_0\" bbox=\"74,70,254,41\" layer=\"0,0,0,0\" x=\"74\" y=\"70\" rx=\"0\" ry=\"0\" width=\"254\" height=\"41\" fill=\"rgb(255,255,255)\" opacity=\"1\" transform=\"rotate(0,201,90)\"></rect>\n<rect class=\"S_0\" bbox=\"70,67,260,50\" layer=\"0,0,0,0\" x=\"70\" y=\"67\" rx=\"0\" ry=\"0\" width=\"260\" height=\"50\" fill=\"transparent\" opacity=\"1\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,92)\"></rect>\n<line class=\"S_0\" bbox=\"70,60,0,64\" layer=\"0,0,0,0\" x1=\"70\" y1=\"60\" x2=\"70\" y2=\"124\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"110,71,0,44\" layer=\"0,0,0,0\" x1=\"110\" y1=\"71\" x2=\"110\" y2=\"115\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"200,71,0,44\" layer=\"0,0,0,0\" x1=\"200\" y1=\"71\" x2=\"200\" y2=\"115\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"245,68,0,44\" layer=\"0,0,0,0\" x1=\"245\" y1=\"68\" x2=\"245\" y2=\"112\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"289,71,0,44\" layer=\"0,0,0,0\" x1=\"289\" y1=\"71\" x2=\"289\" y2=\"115\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"150,70,0,44\" layer=\"0,0,0,0\" x1=\"150\" y1=\"70\" x2=\"150\" y2=\"114\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<rect class=\"S_0\" bbox=\"61,285,163,50\" layer=\"0,0,0,0\" x=\"61\" y=\"285\" rx=\"0\" ry=\"0\" width=\"163\" height=\"50\" fill=\"transparent\" opacity=\"1\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,142,310)\"></rect>\n<line class=\"S_0\" bbox=\"61,278,0,64\" layer=\"0,0,0,0\" x1=\"61\" y1=\"278\" x2=\"61\" y2=\"342\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"224,278,0,64\" layer=\"0,0,0,0\" x1=\"224\" y1=\"278\" x2=\"224\" y2=\"342\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"101,289,0,44\" layer=\"0,0,0,0\" x1=\"101\" y1=\"289\" x2=\"101\" y2=\"333\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"182,289,0,44\" layer=\"0,0,0,0\" x1=\"182\" y1=\"289\" x2=\"182\" y2=\"333\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"290,289,0,44\" layer=\"0,0,0,0\" x1=\"290\" y1=\"289\" x2=\"290\" y2=\"333\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"142,288,0,44\" layer=\"0,0,0,0\" x1=\"142\" y1=\"288\" x2=\"142\" y2=\"332\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"238,278,0,64\" layer=\"0,0,0,0\" x1=\"238\" y1=\"278\" x2=\"238\" y2=\"342\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<rect class=\"S_0\" bbox=\"242,285,96,50\" layer=\"0,0,0,0\" x=\"242\" y=\"285\" rx=\"0\" ry=\"0\" width=\"96\" height=\"50\" fill=\"transparent\" opacity=\"1\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,290,310)\"></rect>\n<rect class=\"S_0\" bbox=\"72,149,257,100\" layer=\"0,0,0,0\" x=\"72\" y=\"149\" rx=\"0\" ry=\"0\" width=\"257\" height=\"100\" fill=\"rgb(165,42,0)\" opacity=\"1\" transform=\"rotate(0,200,199)\"></rect>\n<line class=\"S_0\" bbox=\"330,60,0,64\" layer=\"0,0,0,0\" x1=\"330\" y1=\"60\" x2=\"330\" y2=\"124\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<rect class=\"S_0\" bbox=\"70,149,260,100\" layer=\"0,0,0,0\" x=\"70\" y=\"149\" rx=\"0\" ry=\"0\" width=\"260\" height=\"100\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,199)\"></rect>\n<line class=\"S_0\" bbox=\"342,278,0,64\" layer=\"0,0,0,0\" x1=\"342\" y1=\"278\" x2=\"342\" y2=\"342\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>",
         "\n<rect class=\"S_0\" bbox=\"34,31,332,339\" layer=\"0,0,0,0\" x=\"34\" y=\"31\" rx=\"0\" ry=\"0\" width=\"332\" height=\"339\" fill=\"rgb(225,225,225)\" opacity=\"1\" transform=\"rotate(0,200,200)\"></rect>\n<rect class=\"S_0\" bbox=\"42,39,315,322\" layer=\"0,0,0,0\" x=\"42\" y=\"39\" rx=\"0\" ry=\"0\" width=\"315\" height=\"322\" fill=\"rgb(255,0,0)\" opacity=\"1\" transform=\"rotate(0,199,200)\"></rect>\n<rect class=\"S_0\" bbox=\"65,288,161,41\" layer=\"0,0,0,0\" x=\"65\" y=\"288\" rx=\"0\" ry=\"0\" width=\"161\" height=\"41\" fill=\"rgb(255,255,255)\" opacity=\"1\" transform=\"rotate(0,145,308)\"></rect>\n<rect class=\"S_0\" bbox=\"241,286,96,49\" layer=\"0,0,0,0\" x=\"241\" y=\"286\" rx=\"0\" ry=\"0\" width=\"96\" height=\"49\" fill=\"rgb(255,255,255)\" opacity=\"1\" transform=\"rotate(0,289,310)\"></rect>\n<rect class=\"S_0\" bbox=\"74,70,254,41\" layer=\"0,0,0,0\" x=\"74\" y=\"70\" rx=\"0\" ry=\"0\" width=\"254\" height=\"41\" fill=\"rgb(255,255,255)\" opacity=\"1\" transform=\"rotate(0,201,90)\"></rect>\n<line class=\"S_0\" bbox=\"342,278,0,64\" layer=\"0,0,0,0\" x1=\"342\" y1=\"278\" x2=\"342\" y2=\"342\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<rect class=\"S_0\" bbox=\"70,149,260,100\" layer=\"0,0,0,0\" x=\"70\" y=\"149\" rx=\"0\" ry=\"0\" width=\"260\" height=\"100\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,199)\"></rect>\n<line class=\"S_0\" bbox=\"330,60,0,64\" layer=\"0,0,0,0\" x1=\"330\" y1=\"60\" x2=\"330\" y2=\"124\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<rect class=\"S_0\" bbox=\"72,149,257,100\" layer=\"0,0,0,0\" x=\"72\" y=\"149\" rx=\"0\" ry=\"0\" width=\"257\" height=\"100\" fill=\"rgb(165,42,0)\" opacity=\"1\" transform=\"rotate(0,200,199)\"></rect>\n<rect class=\"S_0\" bbox=\"242,285,96,50\" layer=\"0,0,0,0\" x=\"242\" y=\"285\" rx=\"0\" ry=\"0\" width=\"96\" height=\"50\" fill=\"transparent\" opacity=\"1\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,290,310)\"></rect>\n<line class=\"S_0\" bbox=\"238,278,0,64\" layer=\"0,0,0,0\" x1=\"238\" y1=\"278\" x2=\"238\" y2=\"342\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"142,288,0,44\" layer=\"0,0,0,0\" x1=\"142\" y1=\"288\" x2=\"142\" y2=\"332\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"290,289,0,44\" layer=\"0,0,0,0\" x1=\"290\" y1=\"289\" x2=\"290\" y2=\"333\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"182,289,0,44\" layer=\"0,0,0,0\" x1=\"182\" y1=\"289\" x2=\"182\" y2=\"333\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"101,289,0,44\" layer=\"0,0,0,0\" x1=\"101\" y1=\"289\" x2=\"101\" y2=\"333\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"224,278,0,64\" layer=\"0,0,0,0\" x1=\"224\" y1=\"278\" x2=\"224\" y2=\"342\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"61,278,0,64\" layer=\"0,0,0,0\" x1=\"61\" y1=\"278\" x2=\"61\" y2=\"342\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<rect class=\"S_0\" bbox=\"61,285,163,50\" layer=\"0,0,0,0\" x=\"61\" y=\"285\" rx=\"0\" ry=\"0\" width=\"163\" height=\"50\" fill=\"transparent\" opacity=\"1\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,142,310)\"></rect>\n<line class=\"S_0\" bbox=\"150,70,0,44\" layer=\"0,0,0,0\" x1=\"150\" y1=\"70\" x2=\"150\" y2=\"114\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"289,71,0,44\" layer=\"0,0,0,0\" x1=\"289\" y1=\"71\" x2=\"289\" y2=\"115\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"245,68,0,44\" layer=\"0,0,0,0\" x1=\"245\" y1=\"68\" x2=\"245\" y2=\"112\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"200,71,0,44\" layer=\"0,0,0,0\" x1=\"200\" y1=\"71\" x2=\"200\" y2=\"115\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"110,71,0,44\" layer=\"0,0,0,0\" x1=\"110\" y1=\"71\" x2=\"110\" y2=\"115\" stroke-width=\"8\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<line class=\"S_0\" bbox=\"70,60,0,64\" layer=\"0,0,0,0\" x1=\"70\" y1=\"60\" x2=\"70\" y2=\"124\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n<rect class=\"S_0\" bbox=\"70,67,260,50\" layer=\"0,0,0,0\" x=\"70\" y=\"67\" rx=\"0\" ry=\"0\" width=\"260\" height=\"50\" fill=\"transparent\" opacity=\"1\" stroke-width=\"14\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,92)\"></rect>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>"
      ],
      "Symtab_70" : [
         "",
         "\n<polygon class=\"S_0\" bbox=\"140,116,120,168\" layer=\"0,0,0,0\" points=\"202,176 182,176 182,284 201,284 216,284 216,176 260,176 200,116 140,176 202,176 \" fill=\"rgb(55,124,62)\" opacity=\"1\"></polygon>",
         "",
         "",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>"
      ],
      "Symtab_71" : [
         "\n<polygon class=\"S_0\" bbox=\"142,119,117,163\" layer=\"0,0,0,0\" points=\"183,225 183,146 183,119 198,119 216,119 216,224 259,224 201,282 142,224 197,224 \" fill=\"rgb(55,124,62)\" opacity=\"1\"></polygon>",
         "\n<polygon class=\"S_0\" bbox=\"142,119,117,163\" layer=\"0,0,0,0\" points=\"183,225 183,146 183,119 198,119 216,119 216,224 259,224 201,282 142,224 197,224 \" fill=\"rgb(55,124,62)\" opacity=\"1\"></polygon>",
         "\n<polygon class=\"S_0\" bbox=\"142,119,117,163\" layer=\"0,0,0,0\" points=\"183,225 183,146 183,119 198,119 216,119 216,224 259,224 201,282 142,224 197,224 \" fill=\"rgb(55,124,62)\" opacity=\"1\"></polygon>",
         "\n<polygon class=\"S_0\" bbox=\"142,119,117,163\" layer=\"0,0,0,0\" points=\"183,225 183,146 183,119 198,119 216,119 216,224 259,224 201,282 142,224 197,224 \" fill=\"rgb(55,124,62)\" opacity=\"1\"></polygon>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>"
      ],
      "Symtab_81" : [
         "\n<rect class=\"S_0\" bbox=\"168,55,65,290\" layer=\"0,0,0,0\" x=\"168\" y=\"55\" rx=\"0\" ry=\"0\" width=\"65\" height=\"290\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(315,200,200)\"></rect>\n\n<circle class=\"S_0\" bbox=\"126,126,148,148\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" r=\"74\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"168,55,65,290\" layer=\"0,0,0,0\" x=\"168\" y=\"55\" rx=\"0\" ry=\"0\" width=\"65\" height=\"290\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(315,200,200)\"></rect>\n\n<circle class=\"S_0\" bbox=\"126,126,148,148\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" r=\"74\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"168,55,65,290\" layer=\"0,0,0,0\" x=\"168\" y=\"55\" rx=\"0\" ry=\"0\" width=\"65\" height=\"290\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(315,200,200)\"></rect>\n\n<circle class=\"S_0\" bbox=\"126,126,148,148\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" r=\"74\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"168,55,65,290\" layer=\"0,0,0,0\" x=\"168\" y=\"55\" rx=\"0\" ry=\"0\" width=\"65\" height=\"290\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(315,200,200)\"></rect>\n\n<circle class=\"S_0\" bbox=\"126,126,148,148\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" r=\"74\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"168,55,65,290\" layer=\"0,0,0,0\" x=\"168\" y=\"55\" rx=\"0\" ry=\"0\" width=\"65\" height=\"290\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(315,200,200)\"></rect>\n\n<circle class=\"S_0\" bbox=\"126,126,148,148\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" r=\"74\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>"
      ],
      "Symtab_82" : [
         "\n<rect class=\"S_0\" bbox=\"55,168,290,65\" layer=\"0,0,0,0\" x=\"55\" y=\"168\" rx=\"0\" ry=\"0\" width=\"290\" height=\"65\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n\n<circle class=\"S_0\" bbox=\"126,126,148,148\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" r=\"74\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"55,168,290,65\" layer=\"0,0,0,0\" x=\"55\" y=\"168\" rx=\"0\" ry=\"0\" width=\"290\" height=\"65\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n\n<circle class=\"S_0\" bbox=\"126,126,148,148\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" r=\"74\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"55,168,290,65\" layer=\"0,0,0,0\" x=\"55\" y=\"168\" rx=\"0\" ry=\"0\" width=\"290\" height=\"65\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n\n<circle class=\"S_0\" bbox=\"126,126,148,148\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" r=\"74\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"55,168,290,65\" layer=\"0,0,0,0\" x=\"55\" y=\"168\" rx=\"0\" ry=\"0\" width=\"290\" height=\"65\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n\n<circle class=\"S_0\" bbox=\"126,126,148,148\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" r=\"74\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>"
      ],
      "Symtab_83" : [
         "\n<rect class=\"S_0\" bbox=\"168,55,65,290\" layer=\"0,0,0,0\" x=\"168\" y=\"55\" rx=\"0\" ry=\"0\" width=\"65\" height=\"290\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n\n<circle class=\"S_0\" bbox=\"126,126,148,148\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" r=\"74\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"168,55,65,290\" layer=\"0,0,0,0\" x=\"168\" y=\"55\" rx=\"0\" ry=\"0\" width=\"65\" height=\"290\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n\n<circle class=\"S_0\" bbox=\"126,126,148,148\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" r=\"74\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"168,55,65,290\" layer=\"0,0,0,0\" x=\"168\" y=\"55\" rx=\"0\" ry=\"0\" width=\"65\" height=\"290\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n\n<circle class=\"S_0\" bbox=\"126,126,148,148\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" r=\"74\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"168,55,65,290\" layer=\"0,0,0,0\" x=\"168\" y=\"55\" rx=\"0\" ry=\"0\" width=\"65\" height=\"290\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n\n<circle class=\"S_0\" bbox=\"126,126,148,148\" layer=\"0,0,0,0\" cx=\"200\" cy=\"200\" r=\"74\" fill=\"rgb(55,124,62)\" opacity=\"1\" stroke-width=\"2\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>",
         "\n<rect class=\"S_0\" bbox=\"130,129,140,142\" layer=\"0,0,0,0\" x=\"130\" y=\"129\" rx=\"0\" ry=\"0\" width=\"140\" height=\"142\" fill=\"transparent\" opacity=\"1\" stroke-width=\"4\" stroke=\"rgb(0,0,0)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\" transform=\"rotate(0,200,200)\"></rect>\n<line class=\"S_0\" bbox=\"131,196,139,0\" layer=\"0,0,0,0\" x1=\"131\" y1=\"196\" x2=\"270\" y2=\"196\" stroke-width=\"10\" stroke=\"rgb(0,0,255)\" stroke-dasharray=\"1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0\"></line>\n\n<circle class=\"S_0\" bbox=\"270,268,4,4\" layer=\"0,0,0,0\" cx=\"272\" cy=\"270\" r=\"2\" fill=\"rgb(0,0,0)\" opacity=\"1\"></circle>"
      ]
   },
   "TextTable" : {
      "50_BF_IND" : {
         "0" : "?",
         "1" : "50BF",
         "2" : "N"
      },
      "A-P-N" : {
         "0" : "P",
         "1" : "A",
         "2" : "P"
      },
      "AC FAIL" : {
         "1" : "",
         "2" : "AC FAIL"
      },
      "ACCESSIBILITY_ STATE" : {
         "0" : "UNACKNOWLEDGED",
         "1" : "ACKNOWLEDGED",
         "2" : "INACCESSIBLE",
         "3" : "UNACKNOWLEDGED"
      },
      "ACCUMULATOR_TYPE" : {
         "0" : "Acquired Analog",
         "1" : "Acquired Digital",
         "2" : "Manual",
         "3" : "Calculated"
      },
      "ACT-PASS" : {
         "0" : "PASSIVE",
         "1" : "ACTIVE",
         "2" : "PASSIVE"
      },
      "ALARM" : {
         "0" : "N/A",
         "1" : "ALARM",
         "2" : "NORMAL",
         "3" : "N/A"
      },
      "ALARM_STATE" : {
         "0" : "LOW LOW ALARM",
         "1" : "LOW ALARM",
         "2" : "NORMAL",
         "3" : "HIGH ALARM",
         "4" : "HIGH HIGH ALARM"
      },
      "ALARM_STATUS" : {
         "1" : "In Alarm",
         "2" : "Not in Alarm"
      },
      "AUTO_RECLOSER" : {
         "0" : "?",
         "1" : "AR",
         "2" : "N"
      },
      "AVAILABILITY_STATUS" : {
         "0" : "NDEF",
         "1" : "AVAILABLE",
         "2" : "NOT AVAILABLE",
         "3" : "NDEF"
      },
      "AVAILABLE_STATUS" : {
         "0" : "NOT AVAILABLE",
         "1" : "AVAILABLE"
      },
      "BATTERY" : {
         "0" : "N/A",
         "1" : "FAIL",
         "2" : "MAIN"
      },
      "BATTERY_STANDBY" : {
         "1" : "STANDBY",
         "2" : "MAIN"
      },
      "BAY_STATUS" : {
         "0" : "FREE",
         "1" : "BUSY",
         "2" : "ERROR"
      },
      "BLOCKED_FLAGS" : {
         "0" : "NO",
         "1" : "YES"
      },
      "BLOCKED_STATUS" : {
         "1" : "Blocked",
         "2" : "Not Blocked"
      },
      "CARD_STATUS" : {
         "0" : "FREE",
         "1" : "USED"
      },
      "CB_VALUE" : {
         "0" : "TRANSIT",
         "1" : "OPEN",
         "2" : "CLOSED",
         "3" : "ERROR"
      },
      "CHARGE_MODE" : {
         "0" : "N/A",
         "1" : "Boost",
         "2" : "Float"
      },
      "CMD_CONTROL" : {
         "0" : "COMMAND ASSIGNED",
         "1" : "COMMAND NOT ASSIGNED"
      },
      "CMPT_STATUS" : {
         "0" : "INVALID",
         "101" : "REGISTERED",
         "102" : "QUEUEING",
         "103" : "PREPARING FOR LOADING",
         "104" : "READY FOR LOADING",
         "105" : "LOADING",
         "106" : "INTERRUPTED",
         "107" : "LOADED",
         "108" : "READY TO EXIT BAY",
         "109" : "EXITED BAY"
      },
      "COMMAND_BLOCKED_STS" : {
         "0" : "NO",
         "1" : "YES",
         "2" : "YES"
      },
      "COMMAND_MODE" : {
         "0" : "MONOLOGUE",
         "1" : "DIALOGUE"
      },
      "COMMAND_STATUS" : {
         "0" : "FREE",
         "1" : "IN PROGRESS"
      },
      "COMMAND_VALUE" : {
         "0" : "CLOSE",
         "1" : "OPEN",
         "2" : "CLOSE"
      },
      "COM_INTERFACE_TYPE" : {
         "0" : "TCP/IP",
         "1" : "SERIAL",
         "10" : "61850",
         "11" : "UDP",
         "2" : "TCP/IP",
         "3" : "GE FANUC",
         "4" : "DDE",
         "5" : "MOXA",
         "6" : "OPC",
         "8" : "SPA",
         "9" : "API"
      },
      "CONNECTION_STATUS" : {
         "0" : "NOT CONNECTED",
         "1" : "CONNECTED",
         "2" : "NOT CONNECTED"
      },
      "CONTROL_AUTH" : {
         "0" : "UNKNOWN",
         "1" : "BCC",
         "2" : "OCC"
      },
      "CONT_IND_MODE" : {
         "0" : "",
         "1" : "SEP",
         "2" : "JOINT",
         "3" : ""
      },
      "CPU1_STATE" : {
         "14" : "STANDBY",
         "15" : "MASTER"
      },
      "CPU2_STATE" : {
         "14" : "MASTER",
         "15" : "STANDBY"
      },
      "CPU_STATE" : {
         "0" : "STANDBY",
         "1" : "MAIN",
         "2" : "STANDBY"
      },
      "CPU_STATUS" : {
         "0" : "OFF LINE",
         "1" : "MASTER",
         "2" : "STANDBY"
      },
      "CRNT_RETN" : {
         "0" : "",
         "1" : "MET",
         "2" : "GND",
         "3" : ""
      },
      "CUR_MEM" : {
         "0" : "TRANSIT",
         "1" : "SYNCH",
         "2" : "ASYNCH",
         "3" : "ERROR"
      },
      "DC LOW" : {
         "1" : "",
         "2" : "DC LOW"
      },
      "DCU_OFFLINE" : {
         "0" : "OFFLINE",
         "1" : "ONLINE",
         "2" : "OFFLINE"
      },
      "DEV_MODE" : {
         "1" : "AUTO",
         "2" : "MANUAL"
      },
      "DOUBLEBIT_FLAGS" : {
         "0" : "UNK",
         "1" : "YES",
         "2" : "ERR"
      },
      "EF_IND" : {
         "0" : "",
         "1" : "EF",
         "2" : ""
      },
      "EQUIP_STATUS" : {
         "1" : "RUNNING",
         "2" : "STOPPED"
      },
      "ESD1_STATUS" : {
         "2" : "ESD 1 ACTIVE"
      },
      "ESD2_STATUS" : {
         "2" : "ESD 2 ACTIVE"
      },
      "ESD_ACTIVE" : {
         "0" : "NO",
         "1" : "YES",
         "2" : "NO",
         "3" : "ERROR"
      },
      "ESD_CONSOLE_STATUS" : {
         "2" : "ESD FROM CONSOLE DESK ACTIVE"
      },
      "ESD_SCADA_STATUS" : {
         "1" : "ESD FROM SCADA ACTIVE"
      },
      "FLAGS" : {
         "0" : "NO",
         "1" : "YES"
      },
      "FLOW_CONTROL_STATUS" : {
         "0" : "NDEF",
         "1" : "AUTO",
         "2" : "MANUAL",
         "3" : "NDEF"
      },
      "FLTR_SWTCH" : {
         "1" : "AUTO"
      },
      "FLTR_SWTCH2" : {
         "1" : "CONNECTED"
      },
      "FLTR_SWTCH3" : {
         "1" : "MANUAL"
      },
      "HDS_STATUS" : {
         "0" : "NOT CONNECTED",
         "1" : "SYNC. NOT STARTED",
         "2" : "SYNC. IN PROGRESS",
         "3" : "SYNC. COMPLETED",
         "4" : "SYNC. FAILED"
      },
      "HHALARM_STATE" : {
         "1" : "NORMAL",
         "2" : "HIHI"
      },
      "HI/NOR" : {
         "0" : "N/A",
         "1" : "HIGH",
         "2" : "NORMAL",
         "3" : "N/A"
      },
      "INDICATION_STATE" : {
         "0" : "TRANSIT",
         "1" : "ON",
         "2" : "OFF",
         "3" : "ERROR"
      },
      "INDICATION_TYPE" : {
         "0" : "Acquired Single Bit",
         "1" : "Acquired Double Bit",
         "2" : "Manual",
         "3" : "Calculated"
      },
      "IND_STATE_TO_MONITOR" : {
         "0" : "OFF",
         "1" : "ON"
      },
      "INSERVICE_STATUS" : {
         "0" : "OUT OF SERVICE",
         "1" : "IN SERVICE",
         "2" : "OUT OF SERVICE"
      },
      "INTERPRETER_STATUS" : {
         "0" : "INACTIVE",
         "1" : "READY",
         "2" : "EXECUTING",
         "3" : "CRASHED"
      },
      "IO_MIN_LIM" : {
         "0" : "",
         "1" : "5%",
         "2" : "10%"
      },
      "JNT_SET_PNT" : {
         "0" : "",
         "1" : "CURRENT",
         "2" : "POWER",
         "3" : ""
      },
      "L" : {
         "0" : "?",
         "1" : "L",
         "2" : "R"
      },
      "LO/NOR" : {
         "0" : "N/A",
         "1" : "LOW",
         "2" : "NORMAL",
         "3" : "N/A"
      },
      "LOCAL" : {
         "0" : "N/A",
         "1" : "LOCAL",
         "2" : "REMOTE",
         "3" : "N/A"
      },
      "LOCAL_PERMIT" : {
         "0" : "B",
         "1" : "P",
         "2" : "B"
      },
      "LOCKED_CLOSE" : {
         "0" : "LOCKED CLOSE",
         "1" : "LOCKED OPEN",
         "2" : "LOCKED OPEN"
      },
      "LOCKED_OPEN" : {
         "0" : "--",
         "1" : "LOCKED OPEN"
      },
      "LOGIC_STATUS" : {
         "0" : "DISABLE",
         "1" : "ENABLE",
         "2" : "DISABLE"
      },
      "LOGIC_STS" : {
         "0" : "ENABLED",
         "1" : "ENABLED",
         "2" : "DISABLED"
      },
      "LOW_HIGH" : {
         "1" : "HIGH",
         "2" : "LOW"
      },
      "LOW_NORMAL" : {
         "1" : "LOW",
         "2" : "NORMAL"
      },
      "MAIN_PSU" : {
         "0" : "",
         "1" : "",
         "2" : "PS1"
      },
      "MANOEUVER_DEVICE" : {
         "0" : "NOT APPLICABLE",
         "1" : "MCB",
         "2" : "VDU",
         "3" : "ERROR"
      },
      "MEASURAND_TYPE" : {
         "0" : "Acquired Analog",
         "1" : "Acquired Digital",
         "2" : "Manual",
         "3" : "Calculated"
      },
      "MMI_TYPE" : {
         "0" : "REMOTE",
         "1" : "LOCAL"
      },
      "MODE" : {
         "0" : "MANUAL",
         "1" : "AUTO"
      },
      "MOV_STATUS" : {
         "0" : "TRANSIT",
         "1" : "OPEN",
         "2" : "CLOSED"
      },
      "MTR" : {
         "0" : "NA",
         "1" : "MTR",
         "2" : "NRML"
      },
      "MTR_IND" : {
         "0" : "",
         "1" : "MTR",
         "2" : ""
      },
      "MVAR_ABS" : {
         "0" : "",
         "1" : "HIGH",
         "2" : "NORMAL"
      },
      "NC_DBL_BIT_FLAGS" : {
         "0" : "NDEF",
         "1" : "NO",
         "2" : "YES",
         "3" : "NDEF"
      },
      "NC_SGL_BIT_FLAGS" : {
         "0" : "YES",
         "1" : "NO",
         "2" : "NDEF",
         "3" : "NDEF"
      },
      "OCR_IND" : {
         "0" : "",
         "1" : "OC/EF",
         "2" : ""
      },
      "ON_OFF" : {
         "0" : "N/A",
         "1" : "ON",
         "2" : "OFF"
      },
      "OPERABLE_STATUS" : {
         "0" : "INOPERABLE",
         "1" : "OPERABLE",
         "2" : "INOPERABLE"
      },
      "OPERATED" : {
         "0" : "N/A",
         "1" : "OPERATED",
         "2" : "NORMAL",
         "3" : "N/A"
      },
      "P1" : {
         "0" : "P1",
         "1" : "P1",
         "2" : "P1",
         "3" : "P1"
      },
      "P2" : {
         "0" : "P2",
         "1" : "P2",
         "2" : "P2",
         "3" : "P2"
      },
      "P3" : {
         "0" : "P3",
         "1" : "P3",
         "2" : "P3",
         "3" : "P3"
      },
      "PLC_STATE" : {
         "0" : "UNDEFINED",
         "1" : "ONLINE",
         "2" : "STANDBY",
         "3" : "UNDEFINED"
      },
      "POINT_STATUS" : {
         "1" : "Updated from Field",
         "2" : "Manually Updated"
      },
      "POINT_TYPE" : {
         "0" : "MEASURAND",
         "1" : "INDICATION",
         "10" : "PLMS",
         "11" : "FRONT-END",
         "12" : "HDS",
         "13" : "PRINTER",
         "14" : "MMI",
         "2" : "ACCUMULATOR",
         "255" : "DEFAULT",
         "3" : "PULSE COMMAND",
         "4" : "SETPOINT",
         "5" : "STRING INPUT",
         "6" : "STRING OUTPUT",
         "7" : "COMMLINE",
         "8" : "RTU",
         "9" : "SCADA SYSTEM"
      },
      "POLE" : {
         "0" : "N/A",
         "1" : "ISOLATED",
         "2" : "CONNECTED",
         "3" : "ERROR"
      },
      "PRINTFILESTRING" : {
         "70" : "FILE",
         "83" : "STRING"
      },
      "PRINT_MESG_TYPE" : {
         "0" : "Default",
         "1" : "Process Event",
         "10" : "Default",
         "2" : "Control Event",
         "3" : "Process Report",
         "4" : "Control Report",
         "5" : "General String",
         "6" : "General Doc",
         "7" : "Default",
         "8" : "Default",
         "9" : "Default"
      },
      "PRIORITY" : {
         "101" : "P1",
         "102" : "P1",
         "103" : "P1",
         "104" : "P1",
         "111" : "P2",
         "112" : "P2",
         "113" : "P2",
         "114" : "P2",
         "121" : "P3",
         "122" : "P3",
         "123" : "P3",
         "124" : "P3",
         "91" : "P0",
         "92" : "P0"
      },
      "PRI_CPU_RUN_MOD" : {
         "0" : "OFFLINE",
         "11" : "STANDBY",
         "12" : "OFFLINE",
         "3" : "ONLINE",
         "7" : "ONLINE"
      },
      "PTCOM" : {
         "0" : "PTCOM OK",
         "1" : "PTCOM FAIL"
      },
      "PUMP_STATUS" : {
         "0" : "NDEF",
         "1" : "RUNNING",
         "2" : "STOPPED",
         "3" : "NDEF"
      },
      "PUMP_STATUS_I" : {
         "1" : "STOPPED",
         "2" : "RUNNING"
      },
      "PWR_DIR" : {
         "0" : "N/A",
         "1" : "NORMAL",
         "2" : "REVERSE",
         "3" : "ERROR"
      },
      "R" : {
         "0" : "?",
         "1" : "R",
         "2" : "L"
      },
      "RED_PSI" : {
         "0" : "",
         "1" : "PS2",
         "2" : ""
      },
      "RED_PSU" : {
         "0" : "",
         "1" : "",
         "2" : "PS2"
      },
      "RESET" : {
         "0" : "N/A",
         "1" : "RESET",
         "2" : "NORMAL",
         "3" : "N/A"
      },
      "RPC_CTR_MODE1" : {
         "1" : "VOLT"
      },
      "RPC_CTR_MODE2" : {
         "1" : "REA   PWR"
      },
      "RPC_CTR_MODE3" : {
         "1" : "OFF"
      },
      "RTU_CLOCK" : {
         "0" : "NOT SYNC",
         "1" : "SYNC",
         "2" : "NOT SYNC"
      },
      "RTU_DOOR" : {
         "0" : "CLOSED",
         "1" : "OPENED",
         "2" : "CLOSED"
      },
      "RTU_MODE" : {
         "0" : "N/A",
         "1" : "L",
         "2" : "R"
      },
      "RUN-M-N" : {
         "1" : "H",
         "2" : "S",
         "3" : "N",
         "4" : "F",
         "5" : "M"
      },
      "RUN_MODE" : {
         "0" : "UNKNOWN",
         "1" : "HOT",
         "2" : "STANDBY",
         "3" : "OFFLINE",
         "4" : "FAILOVER",
         "5" : "MAINTENANCE"
      },
      "SEALING_FLAG_STATUS" : {
         "0" : "",
         "6" : "SEALING",
         "7" : "SEALED"
      },
      "SEC_CPU_RUN_MOD" : {
         "0" : "OFFLINE",
         "11" : "ONLINE",
         "12" : "ONLINE",
         "3" : "OFFLINE",
         "7" : "STANDBY"
      },
      "SERVER_CON_STATUS" : {
         "0" : "NO",
         "1" : "YES",
         "255" : "INDETERMINATE"
      },
      "SIM_TEXT" : {
         "0" : "UNKNOWN",
         "1" : "SIM1",
         "2" : "SIM2",
         "3" : "UNKNOWN"
      },
      "SPRING" : {
         "0" : "NA",
         "1" : "SPRING DISCHARGE",
         "2" : "SPRING CHARGE"
      },
      "STATUS" : {
         "0" : "NOT OK",
         "1" : "OK",
         "2" : "NOT OK"
      },
      "STRINGINPUT_TYPE" : {
         "0" : "Acquired ASCII Text",
         "2" : "Manual",
         "3" : "Calculated"
      },
      "SUB_BANK" : {
         "1" : "NOT CONNECTED"
      },
      "SUMP_TANK_HIALARM" : {
         "0" : "SUMP TANK LEVEL HI",
         "1" : "SUMP TANK LEVEL HI",
         "2" : "SUMP TANK LEVEL HI",
         "3" : "SUMP TANK LEVEL HI"
      },
      "SUMP_TANK_HIHIALARM" : {
         "0" : "SUMP TANK LEVEL HI-HI",
         "1" : "SUMP TANK LEVEL HI-HI",
         "2" : "SUMP TANK LEVEL HI-HI",
         "3" : "SUMP TANK LEVEL HI-HI"
      },
      "SUMP_TANK_LOALARM" : {
         "0" : "SUMP TANK LEVEL LOW",
         "1" : "SUMP TANK LEVEL LOW",
         "2" : "SUMP TANK LEVEL LOW",
         "3" : "SUMP TANK LEVEL LOW"
      },
      "TABLE_SYNC_MODE" : {
         "0" : "NONE",
         "1" : "UPDATED TABLES",
         "2" : "ALL TABLES",
         "3" : "APPROVAL",
         "4" : "REJECTION"
      },
      "TANK_MODE" : {
         "0" : "Idle",
         "1" : "Receipt",
         "2" : "Dispatch",
         "3" : "Receipt & Dispatch"
      },
      "TANK_TYPE" : {
         "0" : "Horizontal",
         "1" : "Vertical",
         "2" : "Under Ground",
         "3" : "On Ground"
      },
      "TANK_VALVE" : {
         "0" : "Transit",
         "1" : "Open",
         "2" : "Close",
         "3" : "Error"
      },
      "TAP1" : {
         "1" : "1"
      },
      "TAP2" : {
         "1" : "2"
      },
      "TAP3" : {
         "1" : "3"
      },
      "TAP4" : {
         "1" : "4"
      },
      "TAP5" : {
         "1" : "5"
      },
      "TAP6" : {
         "1" : "6"
      },
      "TAS_FLAG" : {
         "0" : "DISABLE",
         "1" : "ENABLE"
      },
      "TCH" : {
         "0" : "",
         "1" : "",
         "2" : "TCH"
      },
      "TEST" : {
         "0" : "N/A",
         "1" : "SERVICE",
         "2" : "TEST",
         "3" : "N/A"
      },
      "TRIP" : {
         "0" : "N/A",
         "1" : "TRIP",
         "2" : "NORMAL"
      },
      "TYPE_OF_ACCUMULATOR" : {
         "0" : "ACQUIRED",
         "1" : "UNUSED",
         "2" : "CALCULATED",
         "3" : "MANUAL"
      },
      "TYPE_OF_COMMAND" : {
         "0" : "DOUBLEPULSE",
         "1" : "SINGLEPULSE",
         "2" : "RETRIGGERABLE",
         "3" : "LATCH"
      },
      "TYPE_OF_INDICATION" : {
         "0" : "SINGLE",
         "1" : "DOUBLE",
         "2" : "CALCULATED",
         "3" : "MANUAL"
      },
      "TYPE_OF_MEASURAND" : {
         "0" : "ANALOG",
         "1" : "DIGITAL",
         "2" : "PULSETRAIN"
      },
      "TYPE_OF_SETPOINT" : {
         "0" : "ANALOG",
         "1" : "DIGITAL"
      },
      "TYPE_OF_START" : {
         "1" : "WARM",
         "2" : "COLD",
         "3" : "MAINTENANCE"
      },
      "TYPE_OF_STRINGINP" : {
         "0" : "ASCII_NULL",
         "1" : "ASCII"
      },
      "TYPE_OF_STRINGOUT" : {
         "0" : "ASCII_NULL",
         "1" : "ASCII"
      },
      "UNHEALTHY" : {
         "0" : "N/A",
         "1" : "NORMAL",
         "2" : "FAIL"
      },
      "VALVE_STATUS" : {
         "1" : "OPEN",
         "2" : "CLOSED"
      },
      "VALVE_STATUS_I" : {
         "1" : "CLOSED",
         "2" : "OPEN"
      }
   }
}
