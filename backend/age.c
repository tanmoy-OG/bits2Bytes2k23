#include<stdio.h>
int main()
{
    printf("please enter you date of birth in dd/mm/yyyy format: ");
    char dob[10];
    scanf("%s",dob);
    int B_date,B_month,B_year;
    B_date=10*dob[0]+dob[1];
    printf("B_date: %s",dob);
    return 0;
}
