import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Marker, MarkerDocument } from "@markers/models/schemas/marker.schema";
import { Model } from "mongoose";

@Injectable()
export class MarkersService {
  constructor(
    @InjectModel(Marker.name)
    private readonly markerModel: Model<MarkerDocument>
  ) {
  }

  async findAll(): Promise<Marker[]> {
    return this.markerModel.find().exec();
  }

  async seed(): Promise<Marker[]> {
    const markers: Marker[] = [
      { position: { lat: -17.794292480, lng: -63.182411540 } },
      { position: { lat: -17.790659760, lng: -63.182865380 } },
      { position: { lat: -17.781582464, lng: -63.185831867 } },
      { position: { lat: -17.788148545, lng: -63.185114267 } },
      { position: { lat: -17.785357153, lng: -63.185665347 } },
      { position: { lat: -17.778185077, lng: -63.184142066 } },
      { position: { lat: -17.776020670, lng: -63.184446572 } },
      { position: { lat: -17.794579994, lng: -63.177116882 } },
      { position: { lat: -17.789939018, lng: -63.178019468 } },
      { position: { lat: -17.786272779, lng: -63.176783062 } },
      { position: { lat: -17.783682722, lng: -63.177156141 } },
      { position: { lat: -17.780675743, lng: -63.177550793 } },
      { position: { lat: -17.778567143, lng: -63.174563306 } },
      { position: { lat: -17.775934076, lng: -63.173536705 } },
      { position: { lat: -17.789532803, lng: -63.188003982 } },
      { position: { lat: -17.788732906, lng: -63.184537140 } },
      { position: { lat: -17.788268917, lng: -63.182486475 } },
      { position: { lat: -17.787766259, lng: -63.180354595 } },
      { position: { lat: -17.786702942, lng: -63.175806585 } },
      { position: { lat: -17.788520245, lng: -63.170507342 } },
      { position: { lat: -17.776231340, lng: -63.183353185 } },
      { position: { lat: -17.780504156, lng: -63.182962340 } },
      { position: { lat: -17.781698013, lng: -63.185099296 } },
      { position: { lat: -17.783475492, lng: -63.184867073 } },
      { position: { lat: -17.786908356, lng: -63.184478767 } },
      { position: { lat: -17.790431776, lng: -63.183093045 } },
      { position: { lat: -17.793278494, lng: -63.181382465 } },
      { position: { lat: -17.781852130, lng: -63.183081040 } },
      { position: { lat: -17.781516690, lng: -63.178130360 } },
      { position: { lat: -17.781219030, lng: -63.175686620 } },
      { position: { lat: -17.780950812, lng: -63.172974712 } },
      { position: { lat: -17.782349325, lng: -63.190498660 } },
      { position: { lat: -17.782046375, lng: -63.185396909 } },
      { position: { lat: -17.783191603, lng: -63.178353837 } },
      { position: { lat: -17.788510410, lng: -63.177367300 } },
      { position: { lat: -17.793149760, lng: -63.175865890 } },
      { position: { lat: -17.773788099, lng: -63.180036662 } },
      { position: { lat: -17.776494465, lng: -63.179745498 } },
      { position: { lat: -17.780995515, lng: -63.178802413 } },
      { position: { lat: -17.781159087, lng: -63.188531876 } },
      { position: { lat: -17.780965750, lng: -63.185712211 } },
      { position: { lat: -17.780565178, lng: -63.180518927 } },
      { position: { lat: -17.780350090, lng: -63.178333751 } },
      { position: { lat: -17.779386419, lng: -63.172302308 } },
      { position: { lat: -17.785069870, lng: -63.170568790 } },
      { position: { lat: -17.786982320, lng: -63.182153470 } },
      { position: { lat: -17.787714820, lng: -63.185844960 } },
      { position: { lat: -17.786590564, lng: -63.179705729 } },
      { position: { lat: -17.789436032, lng: -63.188602547 } },
      { position: { lat: -17.785774950, lng: -63.173953880 } },
      { position: { lat: -17.786161614, lng: -63.177475923 } },
    ];

    return this.markerModel.insertMany(markers);
  }
}
