import { Component, OnInit } from "@angular/core";
import { TecnologyService } from "src/app/services/tecnology.service";

@Component({
  selector: "app-tecnologies-list",
  templateUrl: "./tecnologies-list.component.html",
  styleUrls: ["./tecnologies-list.component.css"],
})
export class TecnologiesListComponent implements OnInit {
  search: string;
  typeFilters = [
    {
      name: "Ascendente",
      checked: true,
    },
  ];
  error: boolean = false;
  tecnologies = [];
  filterTecnogolies = [];
  total: number = 0;

  constructor(private tecnologyTecnology: TecnologyService) {
    this.getInfo();
  }

  getInfo() {
    this.tecnologyTecnology.getTecnologies().subscribe(
      (data) => {
        let types = [...data];
        // Paso cada una de las categorías a un array, ejem : ['Mobile', 'Back-end',..];
        let getTypes = this.uniqueKey(types, "type");
        this.setTypes(getTypes);
        let acs = this.orderData(data, "asc");
        this.tecnologies = acs;
        this.filterTecnogolies = acs;
        this.changeTotal(false);
      },
      (error) => {
        console.log(error);
        this.error = true;
      }
    );
  }

  uniqueKey(arr, key) {
    return [...new Map(arr.map((item) => [item[key], item.type])).values()];
  }

  orderData(data, type) {
    if (type === "asc") {
      return data.sort(
        (a, b) => 0 - (a.tech.toLowerCase() > b.tech.toLowerCase() ? -1 : 1)
      );
    }
    return data.sort(
      (a, b) => 0 - (a.tech.toLowerCase() > b.tech.toLowerCase() ? 1 : -1)
    );
  }

  setTypes(array) {
    if (array.length) {
      for (let data of array) {
        let info = {
          name: data,
          checked: false,
        };
        this.typeFilters.push(info);
      }
    }
  }

  filterByStack(stack: string) {
    let clone = [...this.tecnologies];
    return clone.filter((item) => item.type === stack);
  }

  changeTotal(getNumData: boolean) {
    this.total = this.filterTecnogolies.length;
    if (getNumData) {
      let size = document.getElementsByClassName("cards").length;
      this.total = size;
    }
  }

  applyFilter(e, item: any, i: number) {
    let { checked } = e.target;
    let cloneTecnologies = [...this.tecnologies];

    this.typeFilters.filter((item, index) => {
      item.checked = true;

      if (index !== i) {
        item.checked = false;
      }
    });

    if (i === 0 && checked) {
      this.filterTecnogolies = this.orderData(cloneTecnologies, "asc");
    }

    if (i === 0 && !checked) {
      setTimeout(() => {
        this.filterTecnogolies = this.orderData(cloneTecnologies, "desc");
      });
    }

    if (i !== 0 && checked) {
      this.filterTecnogolies = this.filterByStack(item.name);
    } else {
      this.filterTecnogolies = this.tecnologies;
    }

    this.changeTotal(false);
  }

  ngOnInit() {}
}
