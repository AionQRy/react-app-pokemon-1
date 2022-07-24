import {useState, useEffect, useMemo} from 'react';

// ระบุ type ด้วย function interface ต้อง *** export มันด้วย
export interface Pokemon {
    id: number;
    name: {
      english: string;
      japanese: string;
    }
    type: string[];
    base: Record<string, number>;
}

// export default function
export default function usePokemon() : 
{
    //ระบุ type Pokemon เอามาจาก interface ด้านบน
    pokemon: Pokemon[];
    filter: string;
    setFilter: (filter: string | ((filter: string) => string)) => void;
}
{
  //ใช้รับค่า จาก input ด้วย filter ส่งค่าลงไปใน Text ด้วย onChange โดยใช้ setFilter by useState
  const [filter, setFilter] = useState("");
  //สร้าง useState ขึ้นมาเพื่อรับค่า json array จาก file pokemon.json 
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]); // ระบุ interfaceด้านหลัง useState ด้วย ให้มันรู้ว่ากำรับรับข้อมูลอะไรอยู่

  //useEffect เสมอเวลา fetch ข้อมูล ***อย่าลืมใส่ [] ท้าย useEffect ด้วย
  useEffect(() =>{
    fetch('/pokemon.json')
      .then(response => response.json())
      // ประกาศตัวแปร(parameter) ให้แทน type ด้วย Pokemon[] จาก interface
      //fetch ข้อมูลออกมาลงใน parameter ***pokemon เสร็จนำไปใส่ useStateที่ชื่อว่า setAllPokemon
      .then((pokemon: Pokemon[]) => setAllPokemon(pokemon))
  }, [] ); //***อย่าลืมใส่ [] ท้าย useEffect ด้วย เพื่อให้มันทำงานต่อการเรียกแค่ครั้งเดียว

  // ใช้ useMemo เพื่อเรียกการใช้งานให้ รีรันทุกครั้ง เมื่อรับค่าจาก filter ถ้าไม่ใช้ 
  // ทุกครั้งที่รับค่ามาจาก usestate ไม่ว่าตัวไหนๆ react จะสั่งให้ทำงาน render ใหม่ทุกครั้ง
  const pokemon = useMemo( () => {
    //รับค่าจาก input เป็น lowercase text
    const lowercaseFilter = filter.toLowerCase();
    //filter หาค่าจาก input ใน pokemon.json
    return allPokemon
      .filter( ({ name: {english}}) => english.toLowerCase()
      .includes(lowercaseFilter) // includes เอามาเทียบค่า แล้วนำไป map แสดงผลที่หน้าบ้าน frontend
    
  ).slice(0, 10); //จำกัดจากค้นหาออกมาไม่เกิน 10
  }, [filter, allPokemon]);

  return {
    // ให้ return ค่ามา 3 อย่างก็คือ pokemon fillter setFilter ต้องระบุ type ตามข้างบนด้วย
    pokemon,
    filter,
    setFilter
  }
}