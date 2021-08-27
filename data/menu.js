import { Users, Database, Layers } from 'react-feather';

const menus =  [
    {
        key: "general",
        text: "Auth",
        description: "Personas, Usuarios, & Roles",
        children: [
            {
                key: "/auth/people",
                text: "Personas",
                info: "",
                type: "link",
                icon: <Database/>,
                children: []
            },
            {
                key: "/auth/users",
                text: "Usuarios",
                info: "",
                type: "link",
                icon: <Users/>,
                children: []
            },
            {
                key: "/auth/roles",
                text: "Roles",
                info: "",
                type: "link",
                icon: <Layers/>,
                children: []
            }
        ]
    }
]

export default menus;