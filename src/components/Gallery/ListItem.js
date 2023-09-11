import { useState } from 'react';
import { List, Avatar } from 'antd';
import CardDescription from './CardDescription';

const ListItem = ({ dog }) => {
    const [showCard, setShowCard] = useState(false)
    const handleItemClick = () => { setShowCard(!showCard) }

    return (
        <List.Item key={dog.id} onClick={handleItemClick}>
            <List.Item.Meta
                avatar={<Avatar src={dog.url} size={'large'} />}
                title={<a>{dog['breeds'][0] ? dog['breeds'][0].name : 'Unknown'}</a>}
            />
            {showCard && (
                <CardDescription
                    dog={dog}
                    visible={showCard}
                    closer={handleItemClick}
                />
            )}
        </List.Item>
    )
}
export default ListItem;