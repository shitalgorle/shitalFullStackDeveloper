// #include <stdio.h>

// int main(){
//     int number = 10;
//     printf("%d\n",number);
//     return 0;
// }

// #include <stdio.h>

// int main(){
//     int number = 500;
//     int a = 5;
//     int b = 1;
//     printf("%d %d",number/a,number/b);
//     return 0;
// }


// #include <stdio.h>

// int main(){
    
//     // printf("Welcome to my Homepage\n");
//     // printf("hello world");
//     int x = 10;
//     int y = 30;
//     printf("x=%d\n",x);
//     printf("y=%d\n",y);
//     printf("x+y=%d\n",x+y);
//     printf("x-y=%d\n",x-y);
//     printf("x*y=%d\n",x*y);
//     printf("x/y=%d\n",x/y);
   
// }




#include <stdio.h>
#include <string.h>

int main() {
    char string[] = "hello world";
    char name[] = "shital";
    char profession[] = "I am a full stack developer";

    printf("%zu \n", strlen(string));
    printf("%zu \n", strlen(name));
    printf("%zu \n", strlen(profession));
    printf("%s is %s \n", name, profession);
   
}
