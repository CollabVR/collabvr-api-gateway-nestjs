import { Injectable } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';

@Injectable()
export class AssetsService {
	assets = [
		{
			id: 'Dev Scene',
			image: 'https://picsum.photos/800',
		},
		{
			id: 'Environment 1',
			image: 'https://picsum.photos/800',
		},
		{
			id: 'Environment 2',
			image: 'https://picsum.photos/800',
		},
		{
			id: 'Environment 3',
			image: 'https://picsum.photos/800',
		},
	];

	create(createAssetDto: CreateAssetDto) {
		return 'This action adds a new asset';
	}

	findAll() {
		return this.assets;
	}

	findOne(id: string) {
		return this.assets.find((asset) => asset.id === id);
	}

	update(id: number, updateAssetDto: UpdateAssetDto) {
		return `This action updates a #${id} asset`;
	}

	remove(id: number) {
		return `This action removes a #${id} asset`;
	}
}
