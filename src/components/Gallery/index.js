import React from 'react';
import { Spin, List, Row, Col } from 'antd';
import ListItem from './ListItem';
import { useGallery } from '../../hooks/useGallery';


const Gallery = () => {	
	const { data, waiting } = useGallery()

	return (
		waiting
			? (<Spin />)
			: (
				<Row>
					<Col span={20} offset={2}>
						<List
							itemLayout={'horizontal'}
							dataSource={data}
						>
							{
								data.map(dog => (
									<ListItem dog={dog} />
								))
							}
						</List>
					</Col>
				</Row>
			)
	)
}

export default Gallery