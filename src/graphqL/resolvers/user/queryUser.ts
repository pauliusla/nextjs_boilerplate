export const user = async (
  parent: any,
  args: any,
  contextValue: any,
  info: any
) => {
  return {
    id: args.id,
    firstName: "Paulius",
    lastName: "Lapinskas",
    email: "pauldarkas@gmail.com",
    age: 28,
    active: true,
  };
};
