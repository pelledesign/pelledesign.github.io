// move "checked": true, to the material to be used as start material


model =
{
    "materialgroups": [
        {
            "materials": [
                {
                    
                    "icon": "gold.png",
                    "multimaterials": [
                        "4+1"
                    ],
                    "name": "Gold"
                },
                {
                    "icon": "pink.png",
                    "multimaterials": [
                        "4+2"
                    ],
                    "name": "Pink"
                },
                {	"checked": true,
                    "icon": "silver.png",
                    "multimaterials": [
                        "4+3"
                    ],
                    "name": "Silver"
                }
            ],
            "name": "Main Color"
        },
        {
            "materials": [
                {
                    "icon": "gold.png",
                    "multimaterials": [
                        "8+6"
                    ],
                    "name": "Gold"
                },
                {
                    "checked": true,
                    "icon": "silver.png",
                    "multimaterials": [
                        "8+7"
                    ],
                    "name": "White"
                }
            ],
            "name": "Mesh Logo"
        },
        {
            "materials": [
                {
                    "checked": true,
                    "icon": "gold.png",
                    "multimaterials": [
                        "12+10"
                    ],
                    "name": "Gold"
                },
                {
                    "icon": "pink.png",
                    "multimaterials": [
                        "12+11"
                    ],
                    "name": "Pink"
                }
            ],
            "name": "Side Logo"
        },
        {
            "materials": [
                {
                    "checked": true,
                    "icon": "nylon%20weave.png",
                    "multimaterials": [
                        "14+13"
                    ],
                    "name": "Nylon Weave"
                }
            ],
            "name": "Head Band"
        },
        {
            "materials": [
                {
                    "icon": "gold-4.png",
                    "multimaterials": [
                        "18+15"
                    ],
                    "name": "Gold"
                },
                {
                    "icon": "pink-3.png",
                    "multimaterials": [
                        "18+16"
                    ],
                    "name": "Pink"
                },
                {
                    "checked": true,
                    "icon": "silver-2.png",
                    "multimaterials": [
                        "18+17"
                    ],
                    "name": "Silver"
                }
            ],
            "name": "Pop Color"
        }
    ],
    "products": [
        {
            "checked": true,
            "icon": "default.png",
            "materialgroups": [
                "Main Color",
                "Mesh Logo",
                "Side Logo",
                "Head Band",
                "Pop Color"
            ],
            "modelset": 1097,
            "name": "Default"
        }
    ],
    "studios": []
};
