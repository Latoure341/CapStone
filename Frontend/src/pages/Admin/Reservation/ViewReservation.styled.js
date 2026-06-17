import styled from "styled-components";

export const ReservationContainer = styled.div`
  width: 100%;
  padding: 1rem 3rem;
`;
export const Title = styled.h3`
    width: 100%;
    text-align: center;
`;
export const TableContainer = styled.div`
    width: 100%;
    height: 45vh;
    overflow-y: auto;
`;
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
`;

export const Th = styled.th`
  text-align: left;
  padding: 12px;
  background-color: #f5f5f5;
  color: #555;
  font-weight: 600;
  border-bottom: 1px solid #ddd;
`;
export const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #eee;
  color: #333;
`;

export const Tr = styled.tr`
  &:hover {
    background-color: #fafafa;
  }
`;
export const ActionButton = styled.button`
  padding: 6px 12px;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c0392b;
  }
`;