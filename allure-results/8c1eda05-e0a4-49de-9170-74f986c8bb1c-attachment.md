# Test info

- Name: Проверка покупки товаров >> Покупка товара через корзину [Balance]
- Location: E:\tests\ui-tests\tests\e2e\buyProducts.spec.ts:13:8

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  - 2
+ Received  + 2

  Array [
-   "Роутер STARLINK",
-   "Спорткар Lamborgini Urus",
+   "Бритва электрическая",
+   "Demens cibo casus bonus cribro utique vetus caput adsum suffragium.",
  ]
    at BuyProductsService.buyProductsFromCart (E:\tests\ui-tests\services\buyProducts-service.ts:87:38)
    at BuyProductsService.<anonymous> (E:\tests\ui-tests\utils\decorators.ts:5:20)
    at E:\tests\ui-tests\tests\e2e\buyProducts.spec.ts:15:5
```

# Page snapshot

```yaml
- main:
  - complementary:
    - link "buy products":
      - /url: /dashboard/user/all-products
      - img
      - text: buy products
    - link "orders":
      - /url: /dashboard/user/orders
      - img
      - text: orders
    - link "Add funds":
      - /url: /dashboard/user/add-funds
      - img
      - text: Add funds
    - link "Transactions":
      - /url: /dashboard/user/transaction
      - img
      - text: Transactions
    - link "profile":
      - /url: /dashboard/user/profile
      - img
      - text: profile
  - navigation:
    - button:
      - img
    - heading "dashboard" [level=4]
    - 'button "Balance: 7,272,703"':
      - text: "Balance: 7,272,703"
      - img
    - button "Корзина":
      - img
      - text: Корзина
    - button "avatar":
      - img "avatar"
      - img
  - text: Поиск по ID
  - textbox "Поиск по ID"
  - text: Сортировка по цене
  - combobox "Сортировка по цене":
    - option "asc" [selected]
    - option "desc"
  - text: Сортровка по дате
  - combobox "Сортровка по дате":
    - option "asc" [selected]
    - option "desc"
  - text: Сортировка по статусу
  - combobox "Сортировка по статусу":
    - option "unpaid" [selected]
    - option "paid"
  - text: "ID: 688 Status: paid Total Price: ₽ 160,000 Created At: 30.04.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/688
    - button "View Details"
  - text: "ID: 689 Status: paid Total Price: ₽ 13,125 Created At: 30.04.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/689
    - button "View Details"
  - text: "ID: 690 Status: paid Total Price: ₽ 124,500 Created At: 30.04.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/690
    - button "View Details"
  - text: "ID: 691 Status: paid Total Price: ₽ 2,625 Created At: 30.04.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/691
    - button "View Details"
  - text: "ID: 692 Status: paid Total Price: ₽ 2,625 Created At: 30.04.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/692
    - button "View Details"
  - text: "ID: 693 Status: unpaid Total Price: ₽ 2,625 Created At: 30.04.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/693
    - button "View Details"
  - text: "ID: 694 Status: unpaid Total Price: ₽ 2,625 Created At: 30.04.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/694
    - button "View Details"
  - text: "ID: 695 Status: unpaid Total Price: ₽ 2,625 Created At: 30.04.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/695
    - button "View Details"
  - text: "ID: 696 Status: paid Total Price: ₽ 7,875 Created At: 30.04.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/696
    - button "View Details"
  - text: "ID: 697 Status: paid Total Price: ₽ 158,247 Created At: 29.05.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/697
    - button "View Details"
  - text: "ID: 698 Status: paid Total Price: ₽ 2,625 Created At: 29.05.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/698
    - button "View Details"
  - text: "ID: 699 Status: paid Total Price: ₽ 2,625 Created At: 29.05.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/699
    - button "View Details"
  - text: "ID: 700 Status: paid Total Price: ₽ 2,625 Created At: 29.05.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/700
    - button "View Details"
  - text: "ID: 701 Status: paid Total Price: ₽ 2,625 Created At: 30.05.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/701
    - button "View Details"
  - text: "ID: 702 Status: paid Total Price: ₽ 16,000 Created At: 30.05.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/702
    - button "View Details"
  - text: "ID: 703 Status: paid Total Price: ₽ 185,019 Created At: 30.05.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/703
    - button "View Details"
  - text: "ID: 704 Status: paid Total Price: ₽ 147,555 Created At: 30.05.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/704
    - button "View Details"
  - text: "ID: 705 Status: paid Total Price: ₽ 274,817 Created At: 30.05.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/705
    - button "View Details"
  - text: "ID: 706 Status: paid Total Price: ₽ 108,686 Created At: 30.05.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/706
    - button "View Details"
  - text: "ID: 707 Status: paid Total Price: ₽ 292,549 Created At: 30.05.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/707
    - button "View Details"
  - text: "ID: 708 Status: paid Total Price: ₽ 170,197 Created At: 30.05.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/708
    - button "View Details"
  - text: "ID: 709 Status: paid Total Price: ₽ 163,082 Created At: 30.05.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/709
    - button "View Details"
  - text: "ID: 710 Status: paid Total Price: ₽ 54,648 Created At: 30.05.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/710
    - button "View Details"
  - text: "ID: 711 Status: paid Total Price: ₽ 193,447 Created At: 30.05.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/711
    - button "View Details"
  - text: "ID: 712 Status: paid Total Price: ₽ 246,796 Created At: 30.05.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/712
    - button "View Details"
  - text: "ID: 713 Status: paid Total Price: ₽ 4,500 Created At: 30.05.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/713
    - button "View Details"
  - text: "ID: 714 Status: paid Total Price: ₽ 535,651 Created At: 30.05.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/714
    - button "View Details"
  - text: "ID: 715 Status: paid Total Price: ₽ 542,907 Created At: 30.05.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/715
    - button "View Details"
  - text: "ID: 716 Status: unpaid Total Price: ₽ 16,000 Created At: 30.05.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/716
    - button "View Details"
  - text: "ID: 717 Status: unpaid Total Price: ₽ 2,625 Created At: 30.05.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/717
    - button "View Details"
  - text: "ID: 718 Status: unpaid Total Price: ₽ 16,000 Created At: 30.05.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/718
    - button "View Details"
  - text: "ID: 719 Status: unpaid Total Price: ₽ 120,000 Created At: 31.05.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/719
    - button "View Details"
  - text: "ID: 720 Status: paid Total Price: ₽ 16,000 Created At: 31.05.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/720
    - button "View Details"
  - text: "ID: 721 Status: unpaid Total Price: ₽ 169,986 Created At: 31.05.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/721
    - button "View Details"
  - text: "ID: 722 Status: unpaid Total Price: ₽ 182,517 Created At: 31.05.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/722
    - button "View Details"
  - text: "ID: 723 Status: unpaid Total Price: ₽ 175,872 Created At: 31.05.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/723
    - button "View Details"
  - text: "ID: 724 Status: unpaid Total Price: ₽ 57,386 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/724
    - button "View Details"
  - text: "ID: 725 Status: unpaid Total Price: ₽ 223,312 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/725
    - button "View Details"
  - text: "ID: 726 Status: unpaid Total Price: ₽ 74,170 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/726
    - button "View Details"
  - text: "ID: 727 Status: unpaid Total Price: ₽ 277,295 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/727
    - button "View Details"
  - text: "ID: 728 Status: unpaid Total Price: ₽ 72,157 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/728
    - button "View Details"
  - text: "ID: 729 Status: paid Total Price: ₽ 138,238 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/729
    - button "View Details"
  - text: "ID: 730 Status: paid Total Price: ₽ 282,695 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/730
    - button "View Details"
  - text: "ID: 731 Status: paid Total Price: ₽ 182,041 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/731
    - button "View Details"
  - text: "ID: 732 Status: paid Total Price: ₽ 156,889 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/732
    - button "View Details"
  - text: "ID: 733 Status: paid Total Price: ₽ 223,172 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/733
    - button "View Details"
  - text: "ID: 734 Status: unpaid Total Price: ₽ 3,500 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/734
    - button "View Details"
  - text: "ID: 735 Status: unpaid Total Price: ₽ 2,625 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/735
    - button "View Details"
  - text: "ID: 736 Status: paid Total Price: ₽ 179,014 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/736
    - button "View Details"
  - text: "ID: 737 Status: paid Total Price: ₽ 408,642 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/737
    - button "View Details"
  - text: "ID: 738 Status: unpaid Total Price: ₽ 20,000 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/738
    - button "View Details"
  - text: "ID: 739 Status: paid Total Price: ₽ 465,696 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/739
    - button "View Details"
  - text: "ID: 740 Status: paid Total Price: ₽ 192,336 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/740
    - button "View Details"
  - text: "ID: 741 Status: paid Total Price: ₽ 72,199 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/741
    - button "View Details"
  - text: "ID: 742 Status: paid Total Price: ₽ 441,867 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/742
    - button "View Details"
  - text: "ID: 743 Status: paid Total Price: ₽ 231,941 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/743
    - button "View Details"
  - text: "ID: 744 Status: paid Total Price: ₽ 590,603 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/744
    - button "View Details"
  - text: "ID: 745 Status: paid Total Price: ₽ 507,336 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/745
    - button "View Details"
  - text: "ID: 746 Status: paid Total Price: ₽ 128,753 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/746
    - button "View Details"
  - text: "ID: 747 Status: paid Total Price: ₽ 268,976 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/747
    - button "View Details"
  - text: "ID: 748 Status: paid Total Price: ₽ 783,303 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/748
    - button "View Details"
  - text: "ID: 749 Status: paid Total Price: ₽ 144,713 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/749
    - button "View Details"
  - text: "ID: 750 Status: paid Total Price: ₽ 419,265 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/750
    - button "View Details"
  - text: "ID: 751 Status: paid Total Price: ₽ 545,582 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/751
    - button "View Details"
  - text: "ID: 752 Status: paid Total Price: ₽ 86,871 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/752
    - button "View Details"
  - text: "ID: 753 Status: paid Total Price: ₽ 189,980 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/753
    - button "View Details"
  - text: "ID: 754 Status: paid Total Price: ₽ 569,535 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/754
    - button "View Details"
  - text: "ID: 755 Status: paid Total Price: ₽ 123,508 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/755
    - button "View Details"
  - text: "ID: 756 Status: paid Total Price: ₽ 604,490 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/756
    - button "View Details"
  - text: "ID: 757 Status: paid Total Price: ₽ 107,564 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/757
    - button "View Details"
  - text: "ID: 758 Status: paid Total Price: ₽ 521,640 Created At: 01.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/758
    - button "View Details"
  - text: "ID: 759 Status: paid Total Price: ₽ 230,815 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/759
    - button "View Details"
  - text: "ID: 760 Status: paid Total Price: ₽ 183,969 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/760
    - button "View Details"
  - text: "ID: 761 Status: paid Total Price: ₽ 272,045 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/761
    - button "View Details"
  - text: "ID: 762 Status: paid Total Price: ₽ 50,286 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/762
    - button "View Details"
  - text: "ID: 763 Status: paid Total Price: ₽ 223,807 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/763
    - button "View Details"
  - text: "ID: 764 Status: paid Total Price: ₽ 283,474 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/764
    - button "View Details"
  - text: "ID: 765 Status: paid Total Price: ₽ 130,457 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/765
    - button "View Details"
  - text: "ID: 766 Status: paid Total Price: ₽ 75,931 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/766
    - button "View Details"
  - text: "ID: 767 Status: paid Total Price: ₽ 254,944 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/767
    - button "View Details"
  - text: "ID: 768 Status: paid Total Price: ₽ 138,571 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/768
    - button "View Details"
  - text: "ID: 769 Status: paid Total Price: ₽ 181,039 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/769
    - button "View Details"
  - text: "ID: 770 Status: paid Total Price: ₽ 195,147 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/770
    - button "View Details"
  - text: "ID: 771 Status: paid Total Price: ₽ 243,602 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/771
    - button "View Details"
  - text: "ID: 772 Status: paid Total Price: ₽ 210,289 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/772
    - button "View Details"
  - text: "ID: 773 Status: paid Total Price: ₽ 140,024 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/773
    - button "View Details"
  - text: "ID: 774 Status: paid Total Price: ₽ 202,124 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/774
    - button "View Details"
  - text: "ID: 775 Status: paid Total Price: ₽ 190,336 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/775
    - button "View Details"
  - text: "ID: 776 Status: paid Total Price: ₽ 169,788 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/776
    - button "View Details"
  - text: "ID: 777 Status: paid Total Price: ₽ 274,634 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/777
    - button "View Details"
  - text: "ID: 778 Status: paid Total Price: ₽ 280,435 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/778
    - button "View Details"
  - text: "ID: 779 Status: paid Total Price: ₽ 214,571 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/779
    - button "View Details"
  - text: "ID: 780 Status: paid Total Price: ₽ 270,227 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/780
    - button "View Details"
  - text: "ID: 781 Status: paid Total Price: ₽ 533,313 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/781
    - button "View Details"
  - text: "ID: 782 Status: paid Total Price: ₽ 213,217 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/782
    - button "View Details"
  - text: "ID: 783 Status: paid Total Price: ₽ 148,749 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/783
    - button "View Details"
  - text: "ID: 784 Status: paid Total Price: ₽ 532,113 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/784
    - button "View Details"
  - text: "ID: 785 Status: paid Total Price: ₽ 95,287 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/785
    - button "View Details"
  - text: "ID: 786 Status: paid Total Price: ₽ 542,450 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/786
    - button "View Details"
  - text: "ID: 787 Status: paid Total Price: ₽ 589,659 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/787
    - button "View Details"
  - text: "ID: 788 Status: paid Total Price: ₽ 756,430 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/788
    - button "View Details"
  - text: "ID: 789 Status: paid Total Price: ₽ 657,427 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/789
    - button "View Details"
  - text: "ID: 790 Status: paid Total Price: ₽ 805,066 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/790
    - button "View Details"
  - text: "ID: 791 Status: paid Total Price: ₽ 605,753 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/791
    - button "View Details"
  - text: "ID: 792 Status: paid Total Price: ₽ 507,235 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/792
    - button "View Details"
  - text: "ID: 793 Status: paid Total Price: ₽ 513,896 Created At: 02.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/793
    - button "View Details"
  - text: "ID: 794 Status: paid Total Price: ₽ 611,558 Created At: 03.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/794
    - button "View Details"
  - text: "ID: 795 Status: paid Total Price: ₽ 388,599 Created At: 03.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/795
    - button "View Details"
  - text: "ID: 796 Status: paid Total Price: ₽ 141,808 Created At: 04.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/796
    - button "View Details"
  - text: "ID: 797 Status: paid Total Price: ₽ 128,049 Created At: 04.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/797
    - button "View Details"
  - text: "ID: 798 Status: paid Total Price: ₽ 170,632 Created At: 04.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/798
    - button "View Details"
  - text: "ID: 799 Status: paid Total Price: ₽ 240,626 Created At: 04.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/799
    - button "View Details"
  - text: "ID: 800 Status: paid Total Price: ₽ 74,935 Created At: 04.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/800
    - button "View Details"
  - text: "ID: 801 Status: paid Total Price: ₽ 83,600 Created At: 04.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/801
    - button "View Details"
  - text: "ID: 802 Status: paid Total Price: ₽ 499,778 Created At: 04.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/802
    - button "View Details"
  - text: "ID: 803 Status: paid Total Price: ₽ 290,934 Created At: 07.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/803
    - button "View Details"
  - text: "ID: 804 Status: paid Total Price: ₽ 429,675 Created At: 07.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/804
    - button "View Details"
  - text: "ID: 805 Status: paid Total Price: ₽ 85,678 Created At: 07.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/805
    - button "View Details"
  - text: "ID: 806 Status: paid Total Price: ₽ 792,904 Created At: 07.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/806
    - button "View Details"
  - text: "ID: 807 Status: paid Total Price: ₽ 235,492 Created At: 07.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/807
    - button "View Details"
  - text: "ID: 808 Status: paid Total Price: ₽ 529,485 Created At: 07.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/808
    - button "View Details"
  - text: "ID: 809 Status: paid Total Price: ₽ 245,387 Created At: 07.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/809
    - button "View Details"
  - text: "ID: 810 Status: paid Total Price: ₽ 626,024 Created At: 07.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/810
    - button "View Details"
  - text: "ID: 811 Status: paid Total Price: ₽ 449,796 Created At: 09.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/811
    - button "View Details"
  - text: "ID: 812 Status: paid Total Price: ₽ 295,345 Created At: 09.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/812
    - button "View Details"
  - text: "ID: 813 Status: paid Total Price: ₽ 654,304 Created At: 09.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/813
    - button "View Details"
  - text: "ID: 814 Status: paid Total Price: ₽ 227,307 Created At: 09.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/814
    - button "View Details"
  - text: "ID: 815 Status: paid Total Price: ₽ 185,309 Created At: 09.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/815
    - button "View Details"
  - text: "ID: 816 Status: paid Total Price: ₽ 743,895 Created At: 09.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/816
    - button "View Details"
  - text: "ID: 817 Status: paid Total Price: ₽ 149,231 Created At: 09.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/817
    - button "View Details"
  - text: "ID: 818 Status: paid Total Price: ₽ 579,070 Created At: 09.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/818
    - button "View Details"
  - text: "ID: 819 Status: paid Total Price: ₽ 503,075 Created At: 13.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/819
    - button "View Details"
  - text: "ID: 820 Status: paid Total Price: ₽ 183,850 Created At: 13.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/820
    - button "View Details"
  - text: "ID: 821 Status: paid Total Price: ₽ 460,532 Created At: 13.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/821
    - button "View Details"
  - text: "ID: 822 Status: paid Total Price: ₽ 225,524 Created At: 13.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/822
    - button "View Details"
  - text: "ID: 823 Status: paid Total Price: ₽ 146,728 Created At: 13.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/823
    - button "View Details"
  - text: "ID: 824 Status: paid Total Price: ₽ 568,275 Created At: 13.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/824
    - button "View Details"
  - text: "ID: 825 Status: paid Total Price: ₽ 261,066 Created At: 13.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/825
    - button "View Details"
  - text: "ID: 826 Status: paid Total Price: ₽ 591,039 Created At: 13.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/826
    - button "View Details"
  - text: "ID: 827 Status: paid Total Price: ₽ 3,500 Created At: 19.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/827
    - button "View Details"
  - text: "ID: 828 Status: unpaid Total Price: ₽ 2,625 Created At: 19.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/828
    - button "View Details"
  - text: "ID: 829 Status: paid Total Price: ₽ 2,625 Created At: 19.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/829
    - button "View Details"
  - text: "ID: 830 Status: paid Total Price: ₽ 2,625 Created At: 19.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/830
    - button "View Details"
  - text: "ID: 831 Status: paid Total Price: ₽ 538,371 Created At: 19.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/831
    - button "View Details"
  - text: "ID: 832 Status: paid Total Price: ₽ 257,516 Created At: 19.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/832
    - button "View Details"
  - text: "ID: 833 Status: paid Total Price: ₽ 650,236 Created At: 19.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/833
    - button "View Details"
  - text: "ID: 834 Status: paid Total Price: ₽ 219,736 Created At: 19.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/834
    - button "View Details"
  - text: "ID: 835 Status: paid Total Price: ₽ 197,906 Created At: 19.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/835
    - button "View Details"
  - text: "ID: 836 Status: paid Total Price: ₽ 625,986 Created At: 19.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/836
    - button "View Details"
  - text: "ID: 837 Status: paid Total Price: ₽ 112,918 Created At: 19.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/837
    - button "View Details"
  - text: "ID: 838 Status: paid Total Price: ₽ 454,926 Created At: 19.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/838
    - button "View Details"
  - text: "ID: 839 Status: unpaid Total Price: ₽ 3,500 Created At: 20.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/839
    - button "View Details"
  - text: "ID: 840 Status: paid Total Price: ₽ 3,500 Created At: 20.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/840
    - button "View Details"
  - text: "ID: 841 Status: paid Total Price: ₽ 160,000 Created At: 20.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/841
    - button "View Details"
  - text: "ID: 842 Status: paid Total Price: ₽ 160,000 Created At: 20.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/842
    - button "View Details"
  - text: "ID: 843 Status: paid Total Price: ₽ 160,000 Created At: 20.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/843
    - button "View Details"
  - text: "ID: 844 Status: paid Total Price: ₽ 120,000 Created At: 20.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/844
    - button "View Details"
  - text: "ID: 845 Status: unpaid Total Price: ₽ 120,000 Created At: 20.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/845
    - button "View Details"
  - text: "ID: 846 Status: unpaid Total Price: ₽ 120,000 Created At: 20.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/846
    - button "View Details"
  - text: "ID: 847 Status: paid Total Price: ₽ 160,000 Created At: 20.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/847
    - button "View Details"
  - text: "ID: 848 Status: unpaid Total Price: ₽ 160,000 Created At: 20.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/848
    - button "View Details"
  - text: "ID: 849 Status: unpaid Total Price: ₽ 120,000 Created At: 20.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/849
    - button "View Details"
  - text: "ID: 850 Status: unpaid Total Price: ₽ 160,000 Created At: 20.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/850
    - button "View Details"
  - text: "ID: 851 Status: unpaid Total Price: ₽ 160,000 Created At: 20.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/851
    - button "View Details"
  - text: "ID: 852 Status: paid Total Price: ₽ 25,087 Created At: 20.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/852
    - button "View Details"
  - text: "ID: 853 Status: paid Total Price: ₽ 162,500 Created At: 20.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/853
    - button "View Details"
  - text: "ID: 854 Status: paid Total Price: ₽ 162,500 Created At: 20.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/854
    - button "View Details"
  - text: "ID: 855 Status: paid Total Price: ₽ 162,500 Created At: 20.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/855
    - button "View Details"
  - text: "ID: 856 Status: paid Total Price: ₽ 162,500 Created At: 21.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/856
    - button "View Details"
  - text: "ID: 857 Status: paid Total Price: ₽ 162,500 Created At: 21.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/857
    - button "View Details"
  - text: "ID: 858 Status: paid Total Price: ₽ 162,500 Created At: 21.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/858
    - button "View Details"
  - text: "ID: 859 Status: paid Total Price: ₽ 162,500 Created At: 21.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/859
    - button "View Details"
  - text: "ID: 860 Status: unpaid Total Price: ₽ 6,500 Created At: 21.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/860
    - button "View Details"
  - text: "ID: 861 Status: unpaid Total Price: ₽ 121,500 Created At: 21.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/861
    - button "View Details"
  - text: "ID: 862 Status: unpaid Total Price: ₽ 162,500 Created At: 21.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/862
    - button "View Details"
  - text: "ID: 863 Status: unpaid Total Price: ₽ 162,500 Created At: 21.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/863
    - button "View Details"
  - text: "ID: 864 Status: paid Total Price: ₽ 162,500 Created At: 21.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/864
    - button "View Details"
  - text: "ID: 865 Status: paid Total Price: ₽ 160,000 Created At: 27.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/865
    - button "View Details"
  - text: "ID: 866 Status: paid Total Price: ₽ 162,500 Created At: 27.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/866
    - button "View Details"
  - text: "ID: 867 Status: paid Total Price: ₽ 162,500 Created At: 27.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/867
    - button "View Details"
  - text: "ID: 868 Status: paid Total Price: ₽ 162,500 Created At: 28.06.2025"
  - link "View Details":
    - /url: /dashboard/user/orders/868
    - button "View Details"
```

# Test source

```ts
   1 | import { expect, Page } from '@playwright/test';
   2 | import { BuyProductsPage } from '../pages/buyProducts/buyProducts.ts';
   3 | import { BuyModal } from '../pages/modal/buyProducts/buy-modal.ts';
   4 | import { clearPrice } from '../utils/clearPrice.ts';
   5 | import { OrdersPage } from '../pages/orders/orders.ts';
   6 | import { StripePage } from '../pages/external/stripe.ts';
   7 | import { CartModal } from '../pages/modal/buyProducts/cart-modal.ts';
   8 | import { DashboardPage } from '../pages/dashboardPage.ts';
   9 | import { sortStringArrays } from '../utils/sortArrays.ts';
   10 | import { logDecorator } from '../utils/decorators.ts';
   11 |
   12 | export class BuyProductsService {
   13 |   private buyProductsPage: BuyProductsPage;
   14 |   private buyModal: BuyModal;
   15 |   private ordersPage: OrdersPage;
   16 |   private stripePage: StripePage;
   17 |   private cartModal: CartModal;
   18 |   private dashboardPage: DashboardPage;
   19 |   constructor(page: Page) {
   20 |     this.buyProductsPage = new BuyProductsPage(page);
   21 |     this.buyModal = new BuyModal(page);
   22 |     this.ordersPage = new OrdersPage(page);
   23 |     this.stripePage = new StripePage(page);
   24 |     this.cartModal = new CartModal(page);
   25 |     this.dashboardPage = new DashboardPage(page);
   26 |   }
   27 |
   28 |   @logDecorator
   29 |   async buyProducts(quantity: string, position: number, paymentMethod: 'Balance' | 'Credit Card') {
   30 |     const productName = (await (await this.buyProductsPage.getProductName(position)).textContent()) as string;
   31 |     const productPrice = await clearPrice(
   32 |       (await (await this.buyProductsPage.getProductPrice(position)).textContent()) as string
   33 |     );
   34 |     await this.buyProductsPage.clickBuyProductButton(position);
   35 |     await this.buyModal.waitForOpenedAt(position);
   36 |     await this.buyModal.setQuantity(quantity, position);
   37 |     await this.buyModal.selectPaymentMethod(paymentMethod, position);
   38 |     const productNameModal = await (await this.buyModal.getProductName(position)).textContent();
   39 |     const productPriceModal = await clearPrice(
   40 |       (await (await this.buyModal.getProductPrice(position)).textContent()) as string
   41 |     );
   42 |     expect(productName).toBe(productNameModal);
   43 |     expect(productPrice).toBe(productPriceModal * +quantity);
   44 |
   45 |     await this.buyModal.clickBuyProductButton(position);
   46 |     let priceOrder;
   47 |     switch (paymentMethod) {
   48 |       case 'Balance':
   49 |         await this.ordersPage.waitForOpened();
   50 |         priceOrder = await clearPrice(
   51 |           (await (await this.ordersPage.getOrderItemPrice()).last().textContent()) as string
   52 |         );
   53 |         expect(productPriceModal).toBe(priceOrder);
   54 |         break;
   55 |       case 'Credit Card':
   56 |         await this.stripePage.waitForOpened();
   57 |         await this.stripePage.actionPay();
   58 |         await this.ordersPage.waitForOpened();
   59 |         priceOrder = await clearPrice(
   60 |           (await (await this.ordersPage.getOrderItemPrice()).last().textContent()) as string
   61 |         );
   62 |         expect(productPriceModal).toBe(priceOrder);
   63 |     }
   64 |   }
   65 |
   66 |   @logDecorator
   67 |   async buyProductsFromCart(position: number[], paymentMethod: 'Balance' | 'Credit Card') {
   68 |     const namesProduct = await this.buyProductsPage.getProductsName(position);
   69 |     const priceProduct = await this.buyProductsPage.getProductsPrice(position);
   70 |
   71 |     await this.buyProductsPage.addProductToCartAt(position);
   72 |     await this.dashboardPage.openCart();
   73 |     await this.cartModal.waitForOpened();
   74 |
   75 |     const namesCartProduct = await this.cartModal.getProductsName(position);
   76 |     const totalPriceProductCart = await clearPrice(
   77 |       (await (await this.cartModal.getTotalPrice()).textContent()) as string
   78 |     );
   79 |     console.log('priceProduct = ' + priceProduct)
   80 |     const totalPriceProduct = priceProduct.reduce((acc, price) => (acc += price), 0);
   81 |
   82 |     const [sortingNamesProduct, sortingNamesCartProduct] = sortStringArrays(
   83 |       namesProduct as string[],
   84 |       namesCartProduct as string[]
   85 |     );
   86 |
>  87 |     expect.soft(sortingNamesProduct).toEqual(sortingNamesCartProduct);
      |                                      ^ Error: expect(received).toEqual(expected) // deep equality
   88 |     expect.soft(totalPriceProduct).toBe(totalPriceProductCart);
   89 |
   90 |     let priceOrder;
   91 |     switch (paymentMethod) {
   92 |       case 'Balance':
   93 |         await this.cartModal.selectPaymentMethod('Balance');
   94 |         await this.cartModal.clickBuyProductButton();
   95 |         await this.ordersPage.waitForOpened();
   96 |         priceOrder = await clearPrice(
   97 |           (await (await this.ordersPage.getOrderItemPrice()).last().textContent()) as string
   98 |         );
   99 |         expect(totalPriceProductCart).toBe(priceOrder);
  100 |         break;
  101 |       case 'Credit Card':
  102 |         await this.cartModal.selectPaymentMethod('Credit Card');
  103 |         await this.cartModal.clickBuyProductButton();
  104 |         await this.stripePage.waitForOpened();
  105 |         await this.stripePage.actionPay();
  106 |         await this.ordersPage.waitForOpened();
  107 |         priceOrder = await clearPrice(
  108 |           (await (await this.ordersPage.getOrderItemPrice()).last().textContent()) as string
  109 |         );
  110 |         expect(totalPriceProductCart).toBe(priceOrder);
  111 |         break;
  112 |       default:
  113 |         throw Error('Укажите доступный метод оплаты');
  114 |     }
  115 |   }
  116 | }
  117 |
```