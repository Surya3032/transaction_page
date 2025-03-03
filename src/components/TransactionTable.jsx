import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 24px;
  background-color:white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  max-width: 900px;
  margin: auto;
  font-family: "Arial", sans-serif;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 24px;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr;
  font-size: 14px;
  font-weight: bold;
  color: #888;
  border-bottom: 1px solid #ddd;
  padding-bottom: 12px;
  margin-bottom: 16px;
  text-align: left;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr;
  align-items: center;
  font-size: 14px;
  padding: 16px 0;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

const CardInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CardImage = styled.img`
  width: 32px;
  height: 32px;
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardNumber = styled.p`
  font-weight: bold;
  color: #333;
  margin: 0;
`;

const CardType = styled.p`
  font-size: 12px;
  color: #888;
  margin: 0;
`;

const DateInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const DateText = styled.p`
  color: #333;
  margin: 0;
`;

const TimeText = styled.p`
  color: #888;
  font-size: 12px;
  margin: 0;
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  text-align: center;
`;

const AmountText = styled.div`
  text-align: right;
  font-weight: bold;
  color: ${(props) => props.color};
  font-size: 14px;
`;

// Importing images directly from the components folder
import mastercardLogo from "./mastercard.png";
import visaLogo from "./visa.png";
import amexLogo from "./american_express.png";

// Data for transactions
const transactions = [
  {
    id: 1,
    card: "Mastercard",
    cardNumber: "*4920",
    type: "Credit",
    date: "Jun 24, 2023",
    time: "10:00 am",
    status: "Verified",
    amount: 2890.0,
    logo: mastercardLogo,
  },
  {
    id: 2,
    card: "Visa",
    cardNumber: "*4230",
    type: "Debit",
    date: "Jun 20, 2023",
    time: "11:00 am",
    status: "Rejected",
    amount: -49.0,
    logo: visaLogo,
  },
  {
    id: 3,
    card: "Visa",
    cardNumber: "*5510",
    type: "Credit",
    date: "Jun 19, 2023",
    time: "2:00 pm",
    status: "Pending",
    amount: -80.0,
    logo: visaLogo,
  },
  {
    id: 4,
    card: "American Express",
    cardNumber: "*0983",
    type: "Debit",
    date: "Jun 18, 2023",
    time: "11:00 am",
    status: "Verified",
    amount: -30.0,
    logo: amexLogo,
  },
  {
    id: 5,
    card: "Mastercard",
    cardNumber: "*4443",
    type: "Credit",
    date: "Jun 17, 2023",
    time: "10:00 am",
    status: "Verified",
    amount: 1500.0,
    logo: mastercardLogo,
  },
  {
    id: 6,
    card: "Visa",
    cardNumber: "*7635",
    type: "Debit",
    date: "Jun 14, 2023",
    time: "9:00 am",
    status: "Rejected",
    amount: -200.0,
    logo: visaLogo,
  },
];

// Helper functions for styles
const getStatusStyles = (status) => {
  switch (status) {
    case "Verified":
      return { color: "#2f855a", bgColor: "#c6f6d5" };
    case "Rejected":
      return { color: "#e53e3e", bgColor: "#fed7d7" };
    case "Pending":
      return { color: "#718096", bgColor: "#edf2f7" };
    default:
      return { color: "#333", bgColor: "#eee" };
  }
};

const getAmountColor = (amount) => {
  return amount > 0 ? "#2f855a" : "#e53e3e";
};

const TransactionTable = () => {
  return (
    <Container>
      <Title>Recent Transactions</Title>
      <Subtitle>Transactions overview</Subtitle>
      <TableHeader>
        <div>Card</div>
        <div>Date</div>
        <div>Status</div>
        <div>Amount ($)</div>
      </TableHeader>
      {transactions.map((transaction) => {
        const { color, bgColor } = getStatusStyles(transaction.status);
        const amountColor = getAmountColor(transaction.amount);

        return (
          <TableRow key={transaction.id}>
            {/* Card Info */}
            <CardInfo>
              <CardImage src={transaction.logo} alt={transaction.card} />
              <CardDetails>
                <CardNumber>{transaction.cardNumber}</CardNumber>
                <CardType>{transaction.type}</CardType>
              </CardDetails>
            </CardInfo>

            {/* Date Info */}
            <DateInfo>
              <DateText>{transaction.date}</DateText>
              <TimeText>{transaction.time}</TimeText>
            </DateInfo>

            {/* Status */}
            <StatusBadge color={color} bgColor={bgColor}>
              {transaction.status}
            </StatusBadge>

            {/* Amount */}
            <AmountText color={amountColor}>
              {transaction.amount > 0
                ? `$${transaction.amount.toFixed(2)}`
                : `-$${Math.abs(transaction.amount).toFixed(2)}`}
            </AmountText>
          </TableRow>
        );
      })}
    </Container>
  );
};

export default TransactionTable;
