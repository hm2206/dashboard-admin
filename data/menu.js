import { Users, Database, Layers } from 'react-feather';

const menus =  [
    {
        key: "general",
        text: "layout.menu.auth.title",
        description: "layout.menu.auth.description",
        children: [
            {
                key: "/auth/people",
                text: "layout.menu.auth.people",
                info: "",
                type: "link",
                icon: <Database/>,
                children: []
            },
            {
                key: "/auth/users",
                text: "layout.menu.auth.users",
                info: "",
                type: "link",
                icon: <Users/>,
                children: []
            },
            {
                key: "/auth/roles",
                text: "layout.menu.auth.roles",
                info: "",
                type: "link",
                icon: <Layers/>,
                children: []
            }
        ]
    }
]

export default menus;