export function checkPrazo(expirationDate: string): boolean {
  // Converter 'dd-mm-YYYY' para 'YYYY-MM-DD'
  const [day, month, year] = expirationDate.split('-');
  const formattedDate = `${year}-${month}-${day}`;

  const currentDate = new Date();
  const dueDate = new Date(formattedDate);

  // Comparar as datas
  return dueDate < currentDate;
}
