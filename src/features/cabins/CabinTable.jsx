// import styled from "styled-components";
import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Menus from "../../ui/Menus";
import { useEffect, useState } from 'react';


function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [filterValue, setFilterValue] = useState('all');

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setFilterValue(searchParams.get("discount") || "all");
  }, []);

  if (isLoading) return <Spinner />;

  let filteredCabins;
  if (filterValue === "all") {
    filteredCabins = cabins;
  }
  else if (filterValue === "no-discount") {
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0); 
  }
  else if (filterValue === "with-discount") {
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
  }


  return (
    <Menus>
    <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header role="row">
        
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </Table.Header>
       
       <Table.Body
        // data={cabins}
        data={filteredCabins}
        render={(cabin) =><CabinRow cabin={cabin}
        key={cabin.id} />
        }
        />
    </Table>
    </Menus>
  );
}

export default CabinTable;
