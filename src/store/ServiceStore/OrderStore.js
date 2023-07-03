import { action, makeObservable, observable } from "mobx";

class OrderStore {
    pickUpAddress = {
        localAddress: "",
        state: "",
        district: "",
        postalCode: "",
        countryCode: "+91",
        phoneNumber: "",
    };
    dropAddress = {
        localAddress: "",
        state: "",
        district: "",
        postalCode: "",
        countryCode: "+91",
        phoneNumber: "",
    };
    packageDetail = {
        pickUpDate: new Date(),
        productType: "",
        shipmentValue: "",
        length: "",
        breadth: "",
        width: "",
        packageItem: ""
    };
    constructor() {
        makeObservable(this, {
            pickUpAddress: observable,
            dropAddress: observable,
            packageDetail: observable,
            setPickUpAddress: action,
            getPickUpAddress: action,
            setDropAddress: action,
            getDropAddress: action,
            setPackageDetail: action,
            getPackageDetail: action,
        })
    }

    setPickUpAddress(pickUpAddress) {
        this.pickUpAddress = pickUpAddress;
    }
    getPickUpAddress() {
        return this.pickUpAddress
    }

    setDropAddress(dropAddress) {
        this.dropAddress = dropAddress;
    }
    getDropAddress() {
        return this.dropAddress;
    }

    setPackageDetail(packageDetail) {
        this.packageDetail = packageDetail;
    }

    getPackageDetail() {
        return this.packageDetail;
    }
}

export default new OrderStore();