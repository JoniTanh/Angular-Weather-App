﻿// <auto-generated />
using System;
using API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace API.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20231107121810_InitialCreate")]
    partial class InitialCreate
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.13");

            modelBuilder.Entity("API.Entities.AppCity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("CityName")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Cities");
                });

            modelBuilder.Entity("API.Entities.Weather", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("AppCityId")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Date")
                        .HasColumnType("TEXT");

                    b.Property<float>("Rainfall")
                        .HasColumnType("REAL");

                    b.Property<float>("TempC")
                        .HasColumnType("REAL");

                    b.Property<float>("WindSpeed")
                        .HasColumnType("REAL");

                    b.HasKey("Id");

                    b.HasIndex("AppCityId");

                    b.ToTable("WeatherData");
                });

            modelBuilder.Entity("API.Entities.Weather", b =>
                {
                    b.HasOne("API.Entities.AppCity", "AppCity")
                        .WithMany("WeatherData")
                        .HasForeignKey("AppCityId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("AppCity");
                });

            modelBuilder.Entity("API.Entities.AppCity", b =>
                {
                    b.Navigation("WeatherData");
                });
#pragma warning restore 612, 618
        }
    }
}
