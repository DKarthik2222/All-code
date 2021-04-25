$(document).ready(() => {
  var status = JSON.parse(window.localStorage.getItem("loginStatus")) || false;
  if (status == true) {
    var tableData = [];
    $.get(
      `https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products`,
      (data) => {
        $(`#count`).text(data.length);
        tableData = data;
        createTableRow(data);
      }
    );
    var filteredData = [];
    function filterOptions() {
      for (var i = 0; i < 2; i++) {
        let checkStatus = document.getElementById(`check-${i}`);
        if (checkStatus.checked === true) {
          filteredData.push(checkStatus.name);
        }
      }
      console.log(filteredData);
      getFilteredItems(filteredData);
      filteredData = [];
    }
    function getFilteredItems(data) {
      if (data.length == 2) {
        createTableRow(tableData);
      } else if (data.length == 1) {
        if (data[0] == "expired") {
          var newData = getLowCostItems(tableData);
          getCheckedItems(tableData, newData);
        } else {
          var newData = getExpiredItems(tableData);
          getCheckedItems(tableData, newData);
        }
      } else {
        var expiryItemsData = getExpiredItems(tableData);
        var lowStockItemsData = getLowCostItems(tableData);
        var newData = expiryItemsData.concat(lowStockItemsData);
        getCheckedItems(tableData, newData);
      }
    }
    function getCheckedItems(tableData, filteredData) {
      console.log(filteredData);
      var getCheckedRows = tableData;
      console.log(getCheckedRows);
      getCheckedRows = getCheckedRows.filter(function (el) {
        return !filteredData.includes(el);
      });

      console.log(getCheckedRows);
      createTableRow(getCheckedRows);
      getCheckedRows = [];
    }
    var lowStockItems = [];
    function getLowCostItems(tableData) {
      for (var i = 0; i < tableData.length; i++) {
        if (tableData[i].stock < 100) {
          lowStockItems.push(tableData[i]);
        }
      }
      console.log(lowStockItems);
      return lowStockItems;
    }
    var expiredItems = [];
    function getExpiredItems(tableData) {
      let today = new Date();
      today.setHours(0, 0, 0, 0);
      for (let i = 0; i < tableData.length; i++) {
        const ed = tableData[i].expiryDate;
        var varDate = new Date(ed); //dd-mm-YYYY
        if (varDate < today) {
          expiredItems.push(tableData[i]);
        }
      }
      return expiredItems;
    }
    $(".check-boxes").on("change", function () {
      filterOptions(tableData);
    });
    function createTableRow(data) {
      $("#tableBody").html("");
      for (let i = 0; i < data.length; i++) {
        let date = data[i].expiryDate.split("-");
        $(`#tableBody`).append(
          $("<tr>").append(
            $("<td>").attr("class", "dimColor").text(data[i].id),
            $("<td>").text(data[i].medicineName),
            $("<td>").attr("class", "dimColor").text(data[i].medicineBrand),
            $("<td>").text(`${date[0]} ${date[1]}, ${date[2]}`),
            $("<td>").attr("class", "dimColor").text(`$${data[i].unitPrice}`),
            $("<td>").attr("class", "dimColor").text(data[i].stock)
          )
        );
      }
      $(`#count`).text(data.length);
      expiredItems = [];
      lowStockItems = [];
    }
    $(`#logout`).click(() => {
      localStorage.setItem("loginStatus", false);
      $(`#logout`).attr("href", "./index.html");
    });
  } else {
    window.location.replace("./index.html");
  }
});
