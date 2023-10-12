import { Injectable } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';

@Injectable()
export class AssetsService {
	assets = [
		{
			id: 'Dev Scene',
			image: 'https://firebasestorage.googleapis.com/v0/b/prueba-43bf8.appspot.com/o/vr-project%2Fenv-1.png?alt=media&token=47cb2b5a-3276-41b9-9bcd-88a038400715',
		},
		{
			id: 'Environment 1',
			image: 'https://firebasestorage.googleapis.com/v0/b/prueba-43bf8.appspot.com/o/vr-project%2Fenv-2.png?alt=media&token=9bdc23e7-1c85-4a63-a446-1b33eba2a184',
		},
		{
			id: 'Environment 2',
			image: 'https://firebasestorage.googleapis.com/v0/b/prueba-43bf8.appspot.com/o/vr-project%2Fenv-3.png?alt=media&token=e2ce1b03-e54c-4035-88ac-401cf7900b20 ',
		},
		{
			id: 'Environment 3',
			image: 'https://firebasestorage.googleapis.com/v0/b/prueba-43bf8.appspot.com/o/vr-project%2Fenv-4.png?alt=media&token=c36b59fb-44fa-4dd2-bbd0-6838fcf0b1e2 ',
		},
	];

	create(createAssetDto: CreateAssetDto) {
        this.assets.push(createAssetDto);
        return { message: 'Asset added successfully', data: createAssetDto };
    }

    findAll() {
        return this.assets;
    }

    findOne(id: string) {
        return this.assets.find((asset) => asset.id === id);
    }

    update(id: string, updateAssetDto: UpdateAssetDto) {
        const assetIndex = this.assets.findIndex((asset) => asset.id === id);
        if (assetIndex === -1) {
            return { message: `Asset with ID #${id} not found` };
        }
        // Assuming that the updateAssetDto contains the entire updated asset data. 
        // Otherwise, we would need to merge the existing asset with the updates.
        this.assets[assetIndex] = updateAssetDto;
        return { message: `Asset with ID #${id} updated successfully`, data: this.assets[assetIndex] };
    }

    remove(id: string) {
        const assetIndex = this.assets.findIndex((asset) => asset.id === id);
        if (assetIndex === -1) {
            return { message: `Asset with ID #${id} not found` };
        }
        const removedAsset = this.assets.splice(assetIndex, 1);
        return { message: `Asset with ID #${id} removed successfully`, data: removedAsset[0] };
    }
}
