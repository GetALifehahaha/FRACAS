import { Droplet } from 'lucide-react'
import React from 'react'
import { ButtonGroup } from '../ui/button-group'
import { Button } from '../ui/button'

const Title = ({title}: {title: string}) => {
    return (
        <div className='flex items-center gap-1'>
            <Droplet />
            <h1>{title}</h1>
        </div>
    )
}

const Avatar = ({name}: {name: string}) => {
    return (
        <div className='flex gap-2 items-center'>
            <div className='p-0.5 bg-blue-600 aspect-square w-6 flex items-center justify-center rounded-full'>
                <h5 className='uppercase font-bold text-white text-xs'>{name[0]}</h5>
            </div>
            <h5 className='text-sm font-medium'>{name}</h5>
        </div>
    )
}

const Header = () => {

    const dummyUser = {
        first_name: "Ahlan-nour",
        last_name: "Sencio"
    }

    const links = [
        {name: "Dashboard", link: ""},
        {name: "Flood History", link: ""},
        {name: "Reports", link: ""},
    ]

    const linkList = links.map(({name, link}, index) => 
        <Button 
            variant="link"
            key={index} onClick={() => console.log(link)}>
            {name}
        </Button>
    )

    return (
        <div className='flex justify-between p-2'>
            <Title title="FRACAS" />
            <ButtonGroup className='bg-white rounded-2xl ml-auto mr-8'>
                {linkList}
            </ButtonGroup>
            <Avatar name={`${dummyUser.first_name} ${dummyUser.last_name}`} />
        </div>
    )
}

export default Header