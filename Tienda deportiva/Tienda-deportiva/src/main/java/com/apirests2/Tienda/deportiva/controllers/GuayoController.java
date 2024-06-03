package com.apirests2.Tienda.deportiva.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apirests2.Tienda.deportiva.models.Guayo;
import com.apirests2.Tienda.deportiva.repositories.GuayoRepository;


@RestController
@RequestMapping("/api/guayos")
public class GuayoController {

    @Autowired
private GuayoRepository guayoRepository;

@GetMapping
public List<Guayo> obtenerTodosLosGuayos(){
    return guayoRepository.findAll();
}

@GetMapping("/{id}")
  public Guayo obtenerGuayoPorId(@PathVariable Long id) {
    return guayoRepository.findById(id).orElse(null);
  }

  @PostMapping("/add/guayo")
  public Guayo crearGuayo(@RequestBody Guayo guayo) {

    return guayoRepository.save(guayo);
  }

  @PutMapping("/update-guayo/{id}")
  public Guayo actualizarGuayo(@PathVariable Long id, @RequestBody Guayo guayo) {
    guayo.setId(id);
    return guayoRepository.save(guayo);

  }

  @DeleteMapping("/delete-guayo/{id}")

    public void borrarGuayo(@PathVariable Long id){
      guayoRepository.deleteById(id);
    
  }

}
