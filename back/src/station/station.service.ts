import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StationEntity } from './station.entity';

@Injectable()
export class StationService {
    constructor(
        @InjectRepository(StationEntity)
        private usersRepository: Repository<StationEntity>,
      ) {}

    // TODO: Connect TypeORM

    async getAll(){
        return this.usersRepository.find()
    }
}



// return [
        //     {"name":"5586","lat":73.1105,"lon":61.3195,"depths":[{"depth":1,"salinity":31.3,"DOC":164.17},{"depth":25,"salinity":33.8,"DOC":174.17},{"depth":45,"salinity":34.1,"DOC":160.83},{"depth":55,"salinity":34.1,"DOC":130},{"depth":65,"salinity":34.2,"DOC":175.83},{"depth":75,"salinity":34.3,"DOC":166.67},{"depth":87,"salinity":34.3,"DOC":174.17}]},
        //     {"name":"5587","lat":74.7819,"lon":66.5903,"depths":[{"depth":1,"salinity":25.9,"DOC":314.17},{"depth":5,"salinity":25.9,"DOC":298.33},{"depth":18,"salinity":33.5,"DOC":156.67},{"depth":30,"salinity":33.9,"DOC":120.83},{"depth":60,"salinity":34,"DOC":123.33},{"depth":150,"salinity":34.3,"DOC":128.33},{"depth":186,"salinity":34.4,"DOC":140}]},
        //     {"name":"5588","lat":73.9047,"lon":72.9762,"depths":[{"depth":1,"salinity":19.9,"DOC":414.17},{"depth":5,"salinity":20.5,"DOC":575},{"depth":20,"salinity":30.7,"DOC":217.5},{"depth":27,"salinity":32.5,"DOC":146.67}]},
        //     {"name":"5590","lat":77.1743,"lon":114.6749,"depths":[{"depth":1,"salinity":32.2,"DOC":161.67},{"depth":17,"salinity":32.3,"DOC":159.17},{"depth":30,"salinity":33.2,"DOC":175.83},{"depth":50,"salinity":33.8,"DOC":166.67},{"depth":62,"salinity":33.9,"DOC":192.5}]},
        //     {"name":"5590-2","lat":77.1743,"lon":114.6749,"depths":[{"depth":1,"salinity":31.6,"DOC":195.83},{"depth":13,"salinity":32.3,"DOC":224.17},{"depth":24,"salinity":33.1,"DOC":158.33},{"depth":40,"salinity":33.8,"DOC":205.83}]},
        //     {"name":"5591-2","lat":75.4237,"lon":115.4092,"depths":[{"depth":1,"salinity":22.3,"DOC":355.83},{"depth":7,"salinity":22.4,"DOC":320},{"depth":13,"salinity":31.4,"DOC":270.83},{"depth":20,"salinity":33,"DOC":225.83},{"depth":41,"salinity":33.7,"DOC":205.83}]},
        //     {"name":"5592","lat":75.8082,"lon":130.4886,"depths":[{"depth":1,"salinity":25.7,"DOC":242.5},{"depth":10,"salinity":26.1,"DOC":260},{"depth":32,"salinity":33.4,"DOC":247.5},{"depth":43.5,"salinity":33.8,"DOC":210.83}]},
        //     {"name":"5592-2","lat":75.8082,"lon":130.4886,"depths":[{"depth":1,"salinity":17.9,"DOC":415},{"depth":20,"salinity":31.5,"DOC":213.33}]},{"name":"5596","lat":74.2625,"lon":130.4749,"depths":[{"depth":1,"salinity":21.8,"DOC":385.83},{"depth":22,"salinity":32.5,"DOC":156.67}]},
        //     {"name":"5596-2","lat":74.2625,"lon":130.4749,"depths":[{"depth":1,"salinity":6.6,"DOC":886.67}]},
        //     {"name":"5598","lat":71.4664,"lon":152.8994,"depths":[{"depth":1,"salinity":15.2,"DOC":311.67},{"depth":6,"salinity":15.2,"DOC":311.67},{"depth":9,"salinity":24.9,"DOC":285},{"depth":11,"salinity":25.1,"DOC":227.5}]},
        //     {"name":"5600","lat":72.3199,"lon":154.5133,"depths":[{"depth":1,"salinity":17.6,"DOC":253.33},{"depth":6,"salinity":17.5,"DOC":280.83},{"depth":9,"salinity":27,"DOC":221.67},{"depth":17.5,"salinity":30.1,"DOC":190}]},
        //     {"name":"5602","lat":73.2342,"lon":156.4292,"depths":[{"depth":1,"salinity":21.2,"DOC":260.83},{"depth":5,"salinity":21.8,"DOC":245},{"depth":10,"salinity":28.2,"DOC":462.5},{"depth":16,"salinity":29.6,"DOC":179.17},{"depth":20,"salinity":30.8,"DOC":165.83},{"depth":23,"salinity":32.6,"DOC":165}]},
        //     {"name":"5604","lat":74.0795,"lon":158.3475,"depths":[{"depth":1,"salinity":25.6,"DOC":236.67},{"depth":5,"salinity":26.2,"DOC":195.83},{"depth":11,"salinity":26.5,"DOC":200.83},{"depth":15,"salinity":31.7,"DOC":182.5},{"depth":20.5,"salinity":31.7,"DOC":171.67}]},
        //     {"name":"5605","lat":74.8733,"lon":160.1832,"depths":[{"depth":1,"salinity":29.1,"DOC":393.33},{"depth":10,"salinity":29.2,"DOC":526.67}]},{"name":"5606","lat":75.6362,"lon":161.9968,"depths":[{"depth":1,"salinity":30.1,"DOC":520}]},
        //     {"name":"5607","lat":76.1651,"lon":163.0543,"depths":[{"depth":0,"salinity":30,"DOC":363.33},{"depth":1,"salinity":30,"DOC":374.17},{"depth":10,"salinity":30.1,"DOC":501.67},{"depth":20,"salinity":30.2,"DOC":319.17},{"depth":30,"salinity":31.7,"DOC":186.67}]},
        //     {"name":"5612","lat":74.383,"lon":168.1917,"depths":[{"depth":1,"salinity":29.3,"DOC":156.67},{"depth":10,"salinity":29.3,"DOC":125.83},{"depth":20,"salinity":29.8,"DOC":129.17},{"depth":30,"salinity":31,"DOC":146.67}]},
        //     {"name":"5613","lat":73.3373,"lon":166.7887,"depths":[{"depth":1,"salinity":27.6,"DOC":505},{"depth":8,"salinity":27.6,"DOC":280},{"depth":15,"salinity":27.6,"DOC":219.17},{"depth":25,"salinity":29.8,"DOC":174.17}]},
        //     {"name":"5615","lat":72.3471,"lon":165.4402,"depths":[{"depth":1,"salinity":28.1,"DOC":179.17},{"depth":15,"salinity":28.1,"DOC":425},{"depth":23,"salinity":28.2,"DOC":222.5}]},
        //     {"name":"5617","lat":71.362,"lon":164.3406,"depths":[{"depth":1,"salinity":23.4,"DOC":470},{"depth":8,"salinity":28.2,"DOC":223.33},{"depth":13,"salinity":28.6,"DOC":216.67}]},
        //     {"name":"5619","lat":70.4342,"lon":163.0687,"depths":[{"depth":1,"salinity":17,"DOC":370},{"depth":8,"salinity":17.8,"DOC":317.5},{"depth":14,"salinity":26.6,"DOC":218.33}]},
        //     {"name":"5627","lat":73.4944,"lon":108.1808,"depths":[{"depth":1,"salinity":3.5,"DOC":727.5},{"depth":5,"salinity":4,"DOC":669.17},{"depth":11,"salinity":9.3,"DOC":551.67}]},
        //     {"name":"5629","lat":73.8665,"lon":109.2012,"depths":[{"depth":1,"salinity":11.1,"DOC":620},{"depth":5,"salinity":12.1,"DOC":525.83},{"depth":12,"salinity":14.9,"DOC":678.33},{"depth":18,"salinity":15.2,"DOC":623.33}]},
        //     {"name":"5630","lat":74.2542,"lon":110.3401,"depths":[{"depth":1,"salinity":17.1,"DOC":421.67},{"depth":5,"salinity":17.3,"DOC":500.83},{"depth":14,"salinity":19.2,"DOC":445},{"depth":20,"salinity":20.4,"DOC":470.83},{"depth":23,"salinity":25.4,"DOC":360}]},
        //     {"name":"5631","lat":74.5829,"lon":111.6707,"depths":[{"depth":1,"salinity":18.9,"DOC":424.17},{"depth":10,"salinity":19.2,"DOC":453.33},{"depth":18,"salinity":25.7,"DOC":422.5},{"depth":25,"salinity":31.3,"DOC":276.67}]},
        //     {"name":"5632","lat":74.8477,"lon":113.817,"depths":[{"depth":1,"salinity":21.9,"DOC":435},{"depth":10,"salinity":21.9,"DOC":375.83},{"depth":17,"salinity":30.9,"DOC":276.67},{"depth":22,"salinity":32.5,"DOC":459.17},{"depth":30,"salinity":33,"DOC":311.67}]},
        //     {"name":"5633","lat":76.3549,"lon":114.9411,"depths":[{"depth":1,"salinity":27.9,"DOC":261.67},{"depth":5,"salinity":27.9,"DOC":286.67},{"depth":10,"salinity":31.7,"DOC":255.83},{"depth":18,"salinity":32.7,"DOC":213.33},{"depth":35,"salinity":33.5,"DOC":220},{"depth":41,"salinity":33.5,"DOC":245}]},
        //     {"name":"5634","lat":77.6472,"lon":115.5372,"depths":[{"depth":1,"salinity":30.1,"DOC":232.5},{"depth":10,"salinity":30.1,"DOC":145.83},{"depth":18,"salinity":33.2,"DOC":458.33},{"depth":40,"salinity":34,"DOC":193.33},{"depth":80,"salinity":34.4,"DOC":174.17},{"depth":100,"salinity":34.5,"DOC":410},{"depth":175,"salinity":34.7,"DOC":162.5}]},
        //     {"name":"5641-2","lat":75.6071,"lon":63.6658,"depths":[{"depth":15,"salinity":34.1,"DOC":145.83}]},{"name":"5642","lat":75.686,"lon":63.7118,"depths":[{"depth":110,"salinity":34.4,"DOC":96.67}]}
        // ]